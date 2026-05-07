import styles from "./filters.module.css";

export default function Filters() {
    return (
        <aside className={styles.filters}>
            <h3>Filtros</h3>

            <div className={styles.filterGroup}>
                <label>Buscar por ciudad</label>
                <input type="text" placeholder="Ciudad..." />
            </div>

            <div className={styles.filterGroup}>
                <label>Tipo de comida</label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Mexicana
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Internacional
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Italiana
                </label>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Argentina
                </label>
            </div>

            <div className={styles.filterGroup}>
                <label>Rating mínimo</label>

                <div className={styles.ratingButtons}>
                    <button>Todos</button>
                    <button>4+</button>
                    <button>4.5+</button>
                    <button>4.8+</button>
                </div>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    Con promociones
                </label>
            </div>

            <button className={styles.clearButton}>
                Limpiar filtros
            </button>
        </aside>
    );
}