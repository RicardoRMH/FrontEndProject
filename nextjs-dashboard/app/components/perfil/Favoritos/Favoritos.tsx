import styles from "./favoritos.module.css";

export default function Favoritos() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Equipos Seguidos
      </h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.flag}>
            🇲🇽
          </div>

          <h3 className={styles.country}>
            México
          </h3>

          <button className={styles.button}>
            Dejar de seguir
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.flag}>
            🇦🇷
          </div>

          <h3 className={styles.country}>
            Argentina
          </h3>

          <button className={styles.button}>
            Dejar de seguir
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.flag}>
            🇧🇷
          </div>

          <h3 className={styles.country}>
            Brasil
          </h3>

          <button className={styles.button}>
            Dejar de seguir
          </button>
        </div>
      </div>
    </section>
  );
}