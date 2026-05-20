import { ForumCountry } from "./foros";
import styles from "./forumSidebar.module.css";

type ForumSidebarProps = {
  forum: ForumCountry;
};

export default function ForumSidebar({ forum }: ForumSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2>Información del Foro</h2>

      <div className={styles.stat}>
        <span>👤</span>
        <div>
          <strong>{forum.members}</strong>
          <p>Miembros</p>
        </div>
      </div>

      <div className={styles.stat}>
        <span>💬</span>
        <div>
          <strong>{forum.postsCount}</strong>
          <p>Posts totales</p>
        </div>
      </div>

      <div className={styles.stat}>
        <span>🔥</span>
        <div>
          <strong>{forum.ranking || "Top 10"}</strong>
          <p>Ranking global</p>
        </div>
      </div>

      <hr />

      <h3>Reglas del Foro</h3>

      <ul>
        <li>Respeta a todos los miembros</li>
        <li>No spam ni contenido ofensivo</li>
        <li>Mantén las discusiones relevantes</li>
      </ul>
    </aside>
  );
}