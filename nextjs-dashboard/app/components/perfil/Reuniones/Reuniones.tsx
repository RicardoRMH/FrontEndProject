import styles from "./reuniones.module.css";

import { CalendarDays, Clock3 } from "lucide-react";

export default function Reuniones() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Reuniones Confirmadas
      </h2>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3 className={styles.place}>
              La Cantina del Gol
            </h3>

            <p className={styles.match}>
              Argentina vs Brasil
            </p>

            <div className={styles.info}>
              <span className={styles.infoItem}>
                <CalendarDays size={16} />
                2024-06-15
              </span>

              <span className={styles.infoItem}>
                <Clock3 size={16} />
                19:00
              </span>
            </div>
          </div>

          <button className={styles.button}>
            Ver detalles
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <h3 className={styles.place}>
              El Estadio Bar & Grill
            </h3>

            <p className={styles.match}>
              México vs Uruguay
            </p>

            <div className={styles.info}>
              <span className={styles.infoItem}>
                <CalendarDays size={16} />
                2024-06-17
              </span>

              <span className={styles.infoItem}>
                <Clock3 size={16} />
                20:00
              </span>
            </div>
          </div>

          <button className={styles.button}>
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
}