import RankingTeams from "./rankingTeams";
import StatsPanels from "./statsPanels";
import styles from "./favoritos.module.css";

export default function Favoritos() {
  return (
    <main className={styles.favoritos}>
      <section className={styles.hero}>
        <h1>Favoritos y Estadísticas</h1>
        <p>Descubre las tendencias y equipos más apoyados por la comunidad</p>
      </section>

      <RankingTeams />

      <StatsPanels />
    </main>
  );
}