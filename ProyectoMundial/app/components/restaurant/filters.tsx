"use client";

import { useEffect, useState } from "react";

import styles from "./filters.module.css";

import { supabase } from "@/app/lib/supabase";

type FiltersProps = {
    onApplyFilters: (filters: {
        ciudad: string;
        tiposComida: string[];
        rating: number;
        promociones: boolean;
    }) => void;
};

export default function Filters({
    onApplyFilters
}: FiltersProps) {

    const [ciudad, setCiudad] = useState("");

    const [tiposComida, setTiposComida] = useState<string[]>([]);

    const [tiposDisponibles, setTiposDisponibles] = useState<string[]>([]);

    const [rating, setRating] = useState(0);

    const [promociones, setPromociones] = useState(false);

    /*
        OBTENER TIPOS DE COMIDA
    */
    async function fetchTiposComida() {

        const { data, error } = await supabase
            .from("restaurante")
            .select("tipo_comida");

        if (error) {
            console.log(error);
            return;
        }

        /*
            ELIMINAR DUPLICADOS
        */
        const tiposUnicos = [
            ...new Set(
                data.map(
                    (item) => item.tipo_comida
                )
            )
        ];

        setTiposDisponibles(
            tiposUnicos as string[]
        );
    }

    useEffect(() => {
        fetchTiposComida();
    }, []);

    function handleTipoComida(tipo: string) {

        if (tiposComida.includes(tipo)) {

            setTiposComida(
                tiposComida.filter(
                    (item) => item !== tipo
                )
            );

        } else {

            setTiposComida([
                ...tiposComida,
                tipo
            ]);
        }
    }

    function aplicarFiltros() {

        onApplyFilters({
            ciudad,
            tiposComida,
            rating,
            promociones
        });
    }

    function limpiarFiltros() {

        setCiudad("");

        setTiposComida([]);

        setRating(0);

        setPromociones(false);

        onApplyFilters({
            ciudad: "",
            tiposComida: [],
            rating: 0,
            promociones: false
        });
    }

    return (

        <aside className={styles.filters}>

            <h3>Filtros</h3>

            <div className={styles.filterGroup}>

                <label>Buscar por ciudad</label>

                <input
                    type="text"
                    placeholder="Ciudad..."
                    value={ciudad}
                    onChange={(e) =>
                        setCiudad(e.target.value)
                    }
                />

            </div>

            <div className={styles.filterGroup}>

                <label>Tipo de comida</label>

                {
                    tiposDisponibles.map((tipo) => (

                        <label
                            key={tipo}
                            className={styles.checkbox}
                        >

                            <input
                                type="checkbox"
                                checked={
                                    tiposComida.includes(tipo)
                                }
                                onChange={() =>
                                    handleTipoComida(tipo)
                                }
                            />

                            {tipo}

                        </label>

                    ))
                }

            </div>

            <div className={styles.filterGroup}>

                <label>Rating mínimo</label>

                <div className={styles.ratingButtons}>

                    <button
                        type="button"
                        onClick={() => setRating(0)}
                        className={
                            rating === 0
                                ? styles.activeRating
                                : ""
                        }
                    >
                        Todos
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(3)}
                        className={
                            rating === 3
                                ? styles.activeRating
                                : ""
                        }
                    >
                        3+
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(4)}
                        className={
                            rating === 4
                                ? styles.activeRating
                                : ""
                        }
                    >
                        4+
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(5)}
                        className={
                            rating === 5
                                ? styles.activeRating
                                : ""
                        }
                    >
                        5
                    </button>

                </div>

            </div>

            <div className={styles.filterGroup}>

                <label className={styles.checkbox}>

                    <input
                        type="checkbox"
                        checked={promociones}
                        onChange={() =>
                            setPromociones(!promociones)
                        }
                    />

                    Con promociones

                </label>

            </div>

            <div className={styles.buttonsContainer}>

                <button
                    type="button"
                    onClick={aplicarFiltros}
                    className={styles.clearButton}
                >
                    Aplicar filtros
                </button>

                <button
                    type="button"
                    onClick={limpiarFiltros}
                    className={styles.clearButton}
                >
                    Limpiar filtros
                </button>

            </div>

        </aside>
    );
}