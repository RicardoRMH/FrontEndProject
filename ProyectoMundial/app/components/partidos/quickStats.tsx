import styles from "./quickStats.module.css";

export default function QuickStats() {
  return (
    <section className={styles.card}>
      <h2>Estadísticas Rápidas</h2>

      <div className={styles.grid}>
        <div className={styles.stat}>
          <span>⚽</span>
          <strong>48</strong>
          <p>Partidos</p>
        </div>

        <div className={styles.stat}>
          <span>👥</span>
          <strong>12.4K</strong>
          <p>Aficionados</p>
        </div>

        <div className={styles.stat}>
          <span>🍴</span>
          <strong>9</strong>
          <p>Restaurantes</p>
        </div>

        <div className={styles.stat}>
          <span>📍</span>
          <strong>24</strong>
          <p>Reuniones</p>
        </div>
      </div>
    </section>
  );
}