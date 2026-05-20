import Link from "next/link";
import styles from "./homeForums.module.css";

const forums = [
  {
    country: "México",
    posts: 1247,
    trending: true,
  },
  {
    country: "Argentina",
    posts: 2156,
    trending: true,
  },
  {
    country: "Brasil",
    posts: 3421,
    trending: true,
  },
  {
    country: "España",
    posts: 1876,
    trending: false,
  },
  {
    country: "Francia",
    posts: 1654,
    trending: true,
  },
  {
    country: "Alemania",
    posts: 1432,
    trending: false,
  },
];

export default function HomeForums() {
  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <div>
          <h2>FOROS POR PAÍS</h2>
          <span></span>
        </div>

        <Link href="/foros" className={styles.viewAll}>
          Ver todos →
        </Link>
      </div>

      <div className={styles.grid}>
        {forums.map((forum) => (
          <article className={styles.card} key={forum.country}>
            <div className={styles.cardTop}>
              <h3>{forum.country}</h3>

              {forum.trending && (
                <span className={styles.trending}>TRENDING</span>
              )}
            </div>

            <p>
              <strong>{forum.posts}</strong> posts activos
            </p>

            <Link href="/foros" className={styles.enter}>
              Entrar al foro →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}