"use client";

import { useEffect, useState } from "react";

import ForumHome from "./forumHome";
import ForumDetail from "./forumDetail";

import { supabase } from "@/app/lib/supabase";

export type ForumPost = {
    id: number;
    user: string;
    avatar: string;
    date: string;
    votes: number;
    title: string;
    content: string;
    comments: number;
    category: string;
    pinned?: boolean;
};

export type ForumCountry = {
    id: number;
    country: string;
    code: string;
    postsCount: number;
    members: number;
    trending?: boolean;
    ranking?: string;
    posts: ForumPost[];
};

export default function Foros() {

    /*
        ESTADOS
    */
    const [forums, setForums] = useState<
        ForumCountry[]
    >([]);

    const [selectedForumId, setSelectedForumId] =
        useState<number | null>(null);

    /*
        OBTENER POSTS DESDE SUPABASE
    */
    useEffect(() => {

        async function fetchForums() {

            /*
                QUERY RELACIONAL
            */
            const { data, error } =
                await supabase
                    .from("publicacion")
                    .select(`
                        *,
                        usuario (
                            nombre
                        )
                    `)
                    .order(
                        "fecha_publicacion",
                        {
                            ascending: false,
                        }
                    );

            if (error || !data) {

                console.error(error);

                return;
            }

            /*
                AGRUPAR POSTS POR PAÍS
            */
            const groupedForums: Record<
                string,
                ForumCountry
            > = {};

            data.forEach(
                (post, index) => {

                    const pais =
                        post.pais;

                    /*
                        CREAR FORO
                    */
                    if (
                        !groupedForums[
                            pais
                        ]
                    ) {

                        groupedForums[
                            pais
                        ] = {
                            id:
                                index + 1,

                            country:
                                pais,

                            code:
                                pais
                                    .slice(
                                        0,
                                        2
                                    )
                                    .toUpperCase(),

                            postsCount: 0,

                            members: 0,

                            trending: false,

                            ranking: "",

                            posts: [],
                        };
                    }

                    /*
                        FORMATEAR FECHA
                    */
                    const formattedDate =
                        new Date(
                            post.fecha_publicacion
                        ).toLocaleDateString(
                            "es-MX",
                            {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                            }
                        );

                    /*
                        AGREGAR POST
                    */
                    groupedForums[
                        pais
                    ].posts.push({
                        id:
                            post.id_publicacion,

                        /*
                            NOMBRE REAL
                        */
                        user:
                            post.usuario
                                ?.nombre ||
                            "Usuario",

                        avatar: "⚽",

                        date:
                            formattedDate,

                        votes:
                            Math.floor(
                                Math.random() *
                                    500
                            ) + 1,

                        title:
                            post.titulo,

                        content:
                            post.contenido,

                        comments:
                            post.comentarios ||
                            0,

                        category:
                            post.categoria,

                        pinned: false,
                    });

                    /*
                        CONTAR POSTS
                    */
                    groupedForums[
                        pais
                    ].postsCount += 1;
                }
            );

            /*
                CONTAR MIEMBROS
            */
            Object.values(
                groupedForums
            ).forEach((forum) => {

                const uniqueUsers =
                    new Set(
                        forum.posts.map(
                            (post) =>
                                post.user
                        )
                    );

                forum.members =
                    uniqueUsers.size;
            });

            /*
                OBTENER MÁXIMO GLOBAL
            */
            const maxPosts =
                Math.max(
                    ...Object.values(
                        groupedForums
                    ).map(
                        (forum) =>
                            forum.postsCount
                    )
                );

            /*
                CALCULAR RANKING
            */
            Object.values(
                groupedForums
            ).forEach((forum) => {

                const ranking =
                    Math.round(
                        (
                            forum.postsCount /
                            maxPosts
                        ) * 5
                    );

                forum.ranking =
                    "Top " +
                    ranking;

                /*
                    TRENDING
                */
                forum.trending =
                    ranking >= 4;
            });

            /*
                CONVERTIR A ARRAY
            */
            const forumsArray =
                Object.values(
                    groupedForums
                );

            setForums(
                forumsArray
            );
        }

        fetchForums();

    }, []);

    /*
        FORO SELECCIONADO
    */
    const selectedForum =
        forums.find(
            (forum) =>
                forum.id ===
                selectedForumId
        );

    /*
        AGREGAR POST
    */
    const handleAddPost = (
        forumId: number,
        post: ForumPost
    ) => {

        setForums(
            (currentForums) =>
                currentForums.map(
                    (forum) =>
                        forum.id ===
                        forumId
                            ? {
                                  ...forum,

                                  postsCount:
                                      forum.postsCount +
                                      1,

                                  posts: [
                                      post,
                                      ...forum.posts,
                                  ],
                              }
                            : forum
                )
        );
    };

    /*
        DETALLE DEL FORO
    */
    if (selectedForum) {

        return (
            <ForumDetail
                forum={
                    selectedForum
                }

                onBack={() =>
                    setSelectedForumId(
                        null
                    )
                }

                onAddPost={
                    handleAddPost
                }
            />
        );
    }

    /*
        HOME
    */
    return (
        <ForumHome
            forums={forums}

            onSelectForum={(
                forumId
            ) =>
                setSelectedForumId(
                    forumId
                )
            }
        />
    );
}