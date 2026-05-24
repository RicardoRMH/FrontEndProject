import styles from "./pronosticos.module.css";

export default function Pronosticos() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Mis Pronósticos
      </h2>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.matchTitle}>
              Argentina vs Brasil
            </h3>

            <span className={styles.status}>
              PENDIENTE
            </span>
          </div>

          <div className={styles.grid}>
            <div>
              <p className={styles.label}>
                Ganador
              </p>

              <p className={styles.value}>
                Argentina
              </p>
            </div>

            <div>
              <p className={styles.label}>
                Marcador
              </p>

              <p className={styles.score}>
                2-1
              </p>
            </div>

            <div>
              <p className={styles.label}>
                Jugador destacado
              </p>

              <p className={styles.value}>
                Lionel Messi
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.matchTitle}>
              México vs Uruguay
            </h3>

            <span className={styles.status}>
              PENDIENTE
            </span>
          </div>

          <div className={styles.grid}>
            <div>
              <p className={styles.label}>
                Ganador
              </p>

              <p className={styles.value}>
                México
              </p>
            </div>

            <div>
              <p className={styles.label}>
                Marcador
              </p>

              <p className={styles.score}>
                3-1
              </p>
            </div>

            <div>
              <p className={styles.label}>
                Jugador destacado
              </p>

              <p className={styles.value}>
                Hirving Lozano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}