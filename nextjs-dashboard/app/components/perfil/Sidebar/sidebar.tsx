// Sidebar.tsx

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.profileCard}>

        {/* PERFIL */}
        <div className={styles.profileHeader}>

          <img
            src="https://readdy.ai/api/search-image?query=profile%20avatar%20of%20friendly%20male%20football%20fan%20in%20his%20thirties%20wearing%20casual%20sports%20jersey%20smiling%20warmly%20simple%20clean%20background%20professional%20portrait%20style&width=200&height=200&seq=userprofile&orientation=squarish"
            alt="Carlos Rodríguez"
            className={styles.avatar}
          />

          <h2 className={styles.userName}>
            Carlos Rodríguez
          </h2>

          <p className={styles.userTag}>
            @carlosR10
          </p>

        </div>

        {/* PAÍS FAVORITO */}
        <div className={styles.favoriteCountryCard}>

          <p className={styles.cardLabel}>
            País Favorito
          </p>

          <div className={styles.favoriteCountryContent}>

            <span className={styles.flag}>
              🇲🇽
            </span>

            <span className={styles.countryName}>
              México
            </span>

          </div>

        </div>

        {/* STATS */}
        <div className={styles.statsContainer}>

          <div className={styles.statCard}>

            <div className={styles.statInfo}>

              <i className={`ri-chat-3-line ${styles.statIcon}`}></i>

              <span className={styles.statLabel}>
                Posts
              </span>

            </div>

            <span className={styles.statValue}>
              47
            </span>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statInfo}>

              <i className={`ri-checkbox-circle-line ${styles.statIcon}`}></i>

              <span className={styles.statLabel}>
                Aciertos
              </span>

            </div>

            <span className={styles.statValue}>
              32
            </span>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statInfo}>

              <i className={`ri-map-pin-line ${styles.statIcon}`}></i>

              <span className={styles.statLabel}>
                Reuniones
              </span>

            </div>

            <span className={styles.statValue}>
              12
            </span>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statInfo}>

              <i className={`ri-bar-chart-line ${styles.statIcon}`}></i>

              <span className={styles.statLabel}>
                Votos
              </span>

            </div>

            <span className={styles.statValue}>
              156
            </span>

          </div>

        </div>

        {/* BOTÓN */}
        <button className={styles.editButton}>
          Editar Perfil
        </button>

      </div>

    </aside>
  );
}