import Link from "next/link";
import styles from "./upcomingMatches.module.css";

const matches = [
  {
    date: "2024-06-15",
    time: "20:00",
    codeA: "AR",
    teamA: "Argentina",
    codeB: "BR",
    teamB: "Brasil",
  },
  {
    date: "2024-06-16",
    time: "18:00",
    codeA: "ES",
    teamA: "España",
    codeB: "FR",
    teamB: "Francia",
  },
  {
    date: "2024-06-17",
    time: "21:00",
    codeA: "MX",
    teamA: "México",
    codeB: "UY",
    teamB: "Uruguay",
  },
  {
    date: "2024-06-18",
    time: "19:00",
    codeA: "DE",
    teamA: "Alemania",
    codeB: "🏳️",
    teamB: "Inglaterra",
  },
];

export default function UpcomingMatches() {
  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <h2>PRÓXIMOS PARTIDOS</h2>
        <span></span>
      </div>

      <div className={styles.grid}>
        {matches.map((match) => (
          <article className={styles.card} key={`${match.codeA}-${match.codeB}`}>
            <div className={styles.top}>
              <span>
                {match.date} • {match.time}
              </span>
              <strong>PRÓXIMO</strong>
            </div>

            <div className={styles.teams}>
              <div>
                <h3>{match.codeA}</h3>
                <p>{match.teamA}</p>
              </div>

              <span className={styles.vs}>VS</span>

              <div>
                <h3>{match.codeB}</h3>
                <p>{match.teamB}</p>
              </div>
            </div>

            <Link href="/pronosticos" className={styles.button}>
              Ver pronósticos
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}