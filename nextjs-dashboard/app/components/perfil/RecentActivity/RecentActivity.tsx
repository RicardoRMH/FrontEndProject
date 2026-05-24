// RecentActivity.tsx

import styles from "./RecentActivity.module.css";

export default function RecentActivity() {
  return (
    <section className={styles.activitySection}>

      <h2 className={styles.sectionTitle}>
        Actividad Reciente
      </h2>

      <div className={styles.activityContainer}>

        {/* CARD 1 */}
        <div className={styles.activityCard}>

          <div className={styles.activityIconContainer}>
            <i className={`ri-chat-3-line ${styles.activityIcon}`}></i>
          </div>

          <div className={styles.activityContent}>

            <p className={styles.activityLabel}>
              Creaste un post
            </p>

            <h3 className={styles.activityTitle}>
              Análisis táctico: México vs Uruguay
            </h3>

            <div className={styles.activityMeta}>

              <span className={styles.activityVotes}>
                ↑ 187 votos
              </span>

              <span className={styles.activityDate}>
                2024-06-11
              </span>

            </div>

          </div>

        </div>

        {/* CARD 2 */}
        <div className={styles.activityCard}>

          <div className={styles.activityIconContainer}>
            <i className={`ri-bar-chart-line ${styles.activityIcon}`}></i>
          </div>

          <div className={styles.activityContent}>

            <p className={styles.activityLabel}>
              Hiciste un pronóstico
            </p>

            <h3 className={styles.activityTitle}>
              Argentina vs Brasil
            </h3>

            <p className={styles.prediction}>
              Argentina 2-1
            </p>

            <p className={styles.activityDate}>
              2024-06-10
            </p>

          </div>

        </div>

        {/* CARD 3 */}
        <div className={styles.activityCard}>

          <div className={styles.activityIconContainer}>
            <i className={`ri-map-pin-line ${styles.activityIcon}`}></i>
          </div>

          <div className={styles.activityContent}>

            <p className={styles.activityLabel}>
              Te uniste a una reunión
            </p>

            <h3 className={styles.activityTitle}>
              La Cantina del Gol
            </h3>

            <p className={styles.secondaryText}>
              Argentina vs Brasil
            </p>

            <p className={styles.activityDate}>
              2024-06-15
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}