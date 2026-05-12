import styles from "./featuredMatch.module.css";

export default function FeaturedMatch() {
  return (
    <section className={styles.featured}>
      <div className={styles.info}>
        <span className={styles.badge}>● PRÓXIMO PARTIDO DESTACADO</span>

        <h1>
          ARGENTINA <span>VS</span> BRASIL
        </h1>

        <div className={styles.details}>
          <p>📅 2024-06-15</p>
          <p>🕘 20:00 hrs</p>
          <p>📍 Estadio Azteca, Ciudad de México</p>
        </div>

        <div className={styles.countdown}>
          <div>
            <strong>03</strong>
            <span>DÍAS</span>
          </div>
          <div>
            <strong>14</strong>
            <span>HRS</span>
          </div>
          <div>
            <strong>27</strong>
            <span>MIN</span>
          </div>
          <div>
            <strong>07</strong>
            <span>SEG</span>
          </div>
        </div>
      </div>

      <div className={styles.teams}>
        <div>
          <div className={styles.circle}>AR</div>
          <h3>Argentina</h3>
          <p>45%</p>
        </div>

        <span className={styles.vs}>VS</span>

        <div>
          <div className={styles.circle}>BR</div>
          <h3>Brasil</h3>
          <p>40%</p>
        </div>
      </div>
    </section>
  );
}