import styles from "./profileCard.module.css";

export default function ProfileCard() {
  return (
    <aside className={styles.card}>
      <div className={styles.avatar}>
        👤
      </div>

      <h2>Carlos Rodríguez</h2>
      <p className={styles.username}>@carlosR10</p>

      <div className={styles.favorite}>
        <span>País Favorito</span>

        <div>
          <strong>MX</strong>
          <h3>México</h3>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>💬 Posts</span>
          <strong>47</strong>
        </div>

        <div className={styles.stat}>
          <span>✅ Aciertos</span>
          <strong>32</strong>
        </div>

        <div className={styles.stat}>
          <span>📍 Reuniones</span>
          <strong>12</strong>
        </div>

        <div className={styles.stat}>
          <span>📊 Votos</span>
          <strong>156</strong>
        </div>
      </div>

      <button className={styles.editButton}>Editar Perfil</button>
    </aside>
  );
}