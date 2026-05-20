import { ForumPost } from "./foros";
import styles from "./forumPostCard.module.css";

type ForumPostCardProps = {
  post: ForumPost;
};

export default function ForumPostCard({ post }: ForumPostCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.votes}>
        <button>↑</button>
        <strong>{post.votes}</strong>
        <button>↓</button>
      </div>

      <div className={styles.content}>
        <div className={styles.author}>
          <span className={styles.avatar}>{post.avatar}</span>

          <div>
            <h3>{post.user}</h3>
            <p>{post.date}</p>
          </div>
        </div>

        <h2>{post.title}</h2>
        <p className={styles.text}>{post.content}</p>

        <div className={styles.actions}>
          <span>💬 {post.comments} comentarios</span>
          <span>🔗 Compartir</span>
          <span>🔖 Guardar</span>
        </div>
      </div>

      <div className={styles.tagBox}>
        <span className={styles.tag}>{post.category}</span>
        {post.pinned && <span className={styles.pin}>📌</span>}
      </div>
    </article>
  );
}