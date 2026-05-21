"use client";

import { useState } from "react";
import styles from "./filters.module.css";

type FiltersProps = {
    onApplyFilters: (filters: {
        ciudad: string;
        tiposComida: string[];
        rating: number;
        promociones: boolean;
    }) => void;
};

export default function Filters({ onApplyFilters }: FiltersProps) {

    const [ciudad, setCiudad] = useState("");
    const [tiposComida, setTiposComida] = useState<string[]>([]);
    const [rating, setRating] = useState(0);
    const [promociones, setPromociones] = useState(false);

    function handleTipoComida(tipo: string) {

        if (tiposComida.includes(tipo)) {
            setTiposComida(
                tiposComida.filter((item) => item !== tipo)
            );
        } else {
            setTiposComida([...tiposComida, tipo]);
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
                    onChange={(e) => setCiudad(e.target.value)}
                />
            </div>

            <div className={styles.filterGroup}>

                <label>Tipo de comida</label>

                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={tiposComida.includes("Mexicana")}
                        onChange={() => handleTipoComida("Mexicana")}
                    />
                    Mexicana
                </label>

                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={tiposComida.includes("Internacional")}
                        onChange={() => handleTipoComida("Internacional")}
                    />
                    Internacional
                </label>

                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={tiposComida.includes("Italiana")}
                        onChange={() => handleTipoComida("Italiana")}
                    />
                    Italiana
                </label>

                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={tiposComida.includes("Argentina")}
                        onChange={() => handleTipoComida("Argentina")}
                    />
                    Argentina
                </label>
            </div>

            <div className={styles.filterGroup}>

                <label>Rating mínimo</label>

                <div className={styles.ratingButtons}>

                    <button onClick={() => setRating(0)}>
                        Todos
                    </button>

                    <button onClick={() => setRating(4)}>
                        4+
                    </button>

                    <button onClick={() => setRating(4.5)}>
                        4.5+
                    </button>

                    <button onClick={() => setRating(4.8)}>
                        4.8+
                    </button>

                </div>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.checkbox}>

                    <input
                        type="checkbox"
                        checked={promociones}
                        onChange={() => setPromociones(!promociones)}
                    />

                    Con promociones

                </label>
            </div>

            <button
                onClick={aplicarFiltros}
                className={styles.clearButton}
            >
                Aplicar filtros
            </button>

            <button
                onClick={limpiarFiltros}
                className={styles.clearButton}
            >
                Limpiar filtros
            </button>

        </aside>
    );
}