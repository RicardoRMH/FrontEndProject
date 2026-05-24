"use client";

import { useState } from "react";

import styles from "./createPostModal.module.css";

type CreatePostModalProps = {
    onClose: () => void;

    onCreatePost: (postData: {
        category: string;
        title: string;
        content: string;
    }) => Promise<void>;
};

export default function CreatePostModal({
    onClose,
    onCreatePost,
}: CreatePostModalProps) {

    /*
        ESTADOS
    */
    const [category, setCategory] =
        useState("Previas");

    const [title, setTitle] =
        useState("");

    const [content, setContent] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    /*
        ENVIAR FORMULARIO
    */
    const handleSubmit =
        async (
            event: React.FormEvent<HTMLFormElement>
        ) => {

            event.preventDefault();

            /*
                VALIDAR CAMPOS
            */
            if (
                !title.trim() ||
                !content.trim()
            ) {

                setError(
                    "Completa todos los campos"
                );

                return;
            }

            try {

                setLoading(true);

                setError("");

                /*
                    CREAR POST
                */
                await onCreatePost({
                    category,
                    title,
                    content,
                });

                /*
                    LIMPIAR
                */
                setTitle("");

                setContent("");

                setCategory(
                    "Previas"
                );

            } catch (error) {

                console.error(error);

                setError(
                    "Error al publicar"
                );

            } finally {

                setLoading(false);
            }
        };

    return (
        <div className={styles.overlay}>

            <form
                className={
                    styles.modal
                }

                onSubmit={
                    handleSubmit
                }
            >

                <button
                    type="button"

                    className={
                        styles.close
                    }

                    onClick={onClose}
                >
                    ×
                </button>

                <h2>
                    Crear Nuevo Post
                </h2>

                <label>
                    Categoría
                </label>

                <select
                    value={category}

                    onChange={(e) =>
                        setCategory(
                            e.target.value
                        )
                    }
                >
                    <option>
                        Previas
                    </option>

                    <option>
                        Alineaciones
                    </option>

                    <option>
                        Debate del partido
                    </option>

                    <option>
                        Memes
                    </option>

                    <option>
                        Reuniones
                    </option>
                </select>

                <label>
                    Título
                </label>

                <input
                    type="text"

                    placeholder="Escribe un título llamativo..."

                    value={title}

                    onChange={(e) =>
                        setTitle(
                            e.target.value
                        )
                    }
                />

                <label>
                    Contenido
                </label>

                <textarea
                    placeholder="Comparte tu opinión..."

                    maxLength={500}

                    value={content}

                    onChange={(e) =>
                        setContent(
                            e.target.value
                        )
                    }
                />

                <p>
                    Máximo 500 caracteres
                </p>

                {error && (
                    <p>
                        {error}
                    </p>
                )}

                <button
                    type="submit"

                    className={
                        styles.publish
                    }

                    disabled={loading}
                >
                    {loading
                        ? "Publicando..."
                        : "Publicar"}
                </button>

            </form>
        </div>
    );
}