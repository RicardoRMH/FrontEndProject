"use client";

import { useMemo, useState } from "react";

import { ForumCountry, ForumPost } from "./foros";

import ForumPostCard from "./forumPostCard";
import ForumSidebar from "./forumSidebar";
import CreatePostModal from "./createPostModal";

import styles from "./forumDetail.module.css";

import { supabase } from "@/app/lib/supabase";

type ForumDetailProps = {
    forum: ForumCountry;

    onBack: () => void;

    onAddPost: (
        forumId: number,
        post: ForumPost
    ) => void;
};

const categories = [
    "Todos",
    "Previas",
    "Alineaciones",
    "Debate del partido",
    "Memes",
    "Reuniones",
];

export default function ForumDetail({
    forum,
    onBack,
    onAddPost,
}: ForumDetailProps) {

    /*
        ESTADOS
    */
    const [activeCategory, setActiveCategory] =
        useState("Todos");

    const [sortBy, setSortBy] =
        useState<"recent" | "votes">(
            "recent"
        );

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    /*
        FILTRAR POSTS
    */
    const filteredPosts = useMemo(() => {

        const filtered =
            activeCategory === "Todos"
                ? forum.posts
                : forum.posts.filter(
                      (post) =>
                          post.category ===
                          activeCategory
                  );

        return [...filtered].sort(
            (a, b) => {

                if (sortBy === "votes") {

                    return (
                        b.votes - a.votes
                    );
                }

                return b.id - a.id;
            }
        );

    }, [
        forum.posts,
        activeCategory,
        sortBy,
    ]);

    /*
        CREAR POST
    */
    const handleCreatePost =
        async (postData: {
            category: string;
            title: string;
            content: string;
        }) => {

            /*
                INSERTAR EN SUPABASE
            */
            const response =
                await supabase
                    .from("publicacion")
                    .insert([
                        {
                            titulo:
                                postData.title,

                            contenido:
                                postData.content,

                            categoria:
                                postData.category,

                            pais:
                                forum.country,

                            comentarios: 0,

                            /*
                                RODRIGO ROJAS
                            */
                            id_usuario: 2,

                            fecha_publicacion:
                                new Date().toISOString(),
                        },
                    ])
                 .select("*")
                    .single();

            /*
                DEBUG
            */
            console.log(
                "SUPABASE RESPONSE:",
                response
            );

            /*
                ERROR
            */
            if (
                response.error ||
                !response.data
            ) {

                console.error(
                    response.error
                );

                alert(
                    JSON.stringify(
                        response.error
                    )
                );

                return;
            }

            /*
                NUEVO POST
            */
            const newPost: ForumPost = {
                id:
                    response.data
                        .id_publicacion,

                /*
                    NOMBRE REAL
                */
                user:
                    response.data
                        .usuario
                        ?.nombre ||
                    "Usuario",

                avatar: "👤",

                date: "Ahora",

                votes: 0,

                title:
                    postData.title,

                content:
                    postData.content,

                comments: 0,

                category:
                    postData.category,
            };

            /*
                ACTUALIZAR UI
            */
            onAddPost(
                forum.id,
                newPost
            );

            /*
                CERRAR MODAL
            */
            setIsModalOpen(false);
        };

    return (
        <main className={styles.detail}>

            <button
                className={
                    styles.backButton
                }
                onClick={onBack}
            >
                ← Volver a foros
            </button>

            <section className={styles.hero}>

                <span>
                    {forum.code}
                </span>

                <div>

                    <h1>
                        Foro de{" "}
                        {
                            forum.country
                        }
                    </h1>

                    <p>
                        {
                            forum.postsCount
                        }{" "}
                        posts activos •{" "}
                        {
                            forum.members
                        }{" "}
                        miembros
                    </p>

                </div>
            </section>

            <div className={styles.categories}>

                {categories.map(
                    (category) => (

                        <button
                            key={category}

                            className={
                                activeCategory ===
                                category
                                    ? styles.activeCategory
                                    : styles.category
                            }

                            onClick={() =>
                                setActiveCategory(
                                    category
                                )
                            }
                        >
                            {category}
                        </button>
                    )
                )}

            </div>

            <section className={styles.layout}>

                <div>

                    <div className={styles.toolbar}>

                        <div>

                            <button
                                className={
                                    sortBy ===
                                    "recent"
                                        ? styles.activeSort
                                        : styles.sort
                                }

                                onClick={() =>
                                    setSortBy(
                                        "recent"
                                    )
                                }
                            >
                                Más recientes
                            </button>

                            <button
                                className={
                                    sortBy ===
                                    "votes"
                                        ? styles.activeSort
                                        : styles.sort
                                }

                                onClick={() =>
                                    setSortBy(
                                        "votes"
                                    )
                                }
                            >
                                Más votados
                            </button>

                        </div>

                        <button
                            className={
                                styles.createButton
                            }

                            onClick={() =>
                                setIsModalOpen(
                                    true
                                )
                            }
                        >
                            + Crear post
                        </button>

                    </div>

                    <div className={styles.posts}>

                        {filteredPosts.map(
                            (post) => (

                                <ForumPostCard
                                    key={post.id}
                                    post={post}
                                />
                            )
                        )}

                    </div>
                </div>

                <ForumSidebar
                    forum={forum}
                />

            </section>

            {isModalOpen && (

                <CreatePostModal
                    onClose={() =>
                        setIsModalOpen(
                            false
                        )
                    }

                    onCreatePost={
                        handleCreatePost
                    }
                />
            )}

        </main>
    );
}