import styles from "./matchFilters.module.css";

export default function MatchFilters() {
  return (
    <section className={styles.filters}>
      <div className={styles.leftFilters}>
        <button className={styles.activeButton}>✤ Todos</button>
        <button className={styles.filterButton}>🔴 🎥 En Vivo</button>
        <button className={styles.filterButton}>☀️ Hoy</button>
        <button className={styles.filterButton}>📅 Próximos</button>
      </div>

      <div className={styles.rightFilters}>
        <button className={styles.dropdownButton}>
          ⚚ Todos⌄
        </button>
      </div>
    </section>
  );
}