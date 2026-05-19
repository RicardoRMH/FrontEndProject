import styles from "./rankingTeams.module.css";

const topTeams = [
  {
    rank: 2,
    code: "AR",
    name: "Argentina",
    percent: "21.8%",
    followers: "42,341 seguidores",
    className: "second",
  },
  {
    rank: 1,
    code: "BR",
    name: "Brasil",
    percent: "23.5%",
    followers: "45,678 seguidores",
    className: "first",
  },
  {
    rank: 3,
    code: "FR",
    name: "Francia",
    percent: "15.2%",
    followers: "29,543 seguidores",
    className: "third",
  },
];

const otherTeams = [
  {
    rank: 4,
    code: "ES",
    name: "España",
    percent: "12.4%",
    followers: "24,098 seguidores",
  },
  {
    rank: 5,
    code: "DE",
    name: "Alemania",
    percent: "10.1%",
    followers: "19,632 seguidores",
  },
  {
    rank: 6,
    code: "🏳️",
    name: "Inglaterra",
    percent: "8.7%",
    followers: "16,921 seguidores",
  },
  {
    rank: 7,
    code: "PT",
    name: "Portugal",
    percent: "4.2%",
    followers: "8,165 seguidores",
  },
  {
    rank: 8,
    code: "MX",
    name: "México",
    percent: "4.1%",
    followers: "7,968 seguidores",
  },
];

export default function RankingTeams() {
  return (
    <section className={styles.ranking}>
      <h2>Ranking de Selecciones Más Apoyadas</h2>

      <div className={styles.podium}>
        {topTeams.map((team) => (
          <div
            key={team.rank}
            className={`${styles.podiumItem} ${styles[team.className]}`}
          >
            <div className={styles.bar}>
              <span className={styles.code}>{team.code}</span>
              <span className={styles.rank}>{team.rank}</span>
            </div>

            <h3>{team.name}</h3>
            <strong>{team.percent}</strong>
            <p>{team.followers}</p>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {otherTeams.map((team) => (
          <article className={styles.teamCard} key={team.rank}>
            <div className={styles.cardHeader}>
              <span className={styles.smallRank}>{team.rank}</span>
              <span className={styles.smallCode}>{team.code}</span>
            </div>

            <h3>{team.name}</h3>
            <strong>{team.percent}</strong>
            <p>{team.followers}</p>
          </article>
        ))}
      </div>
    </section>
  );
}