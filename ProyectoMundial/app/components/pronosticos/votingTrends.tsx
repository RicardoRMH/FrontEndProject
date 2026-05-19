import styles from "./votingTrends.module.css";

const trends = [
  {
    codeA: "AR",
    teamA: "Argentina",
    codeB: "BR",
    teamB: "Brasil",
    values: [45, 15, 40],
  },
  {
    codeA: "ES",
    teamA: "España",
    codeB: "FR",
    teamB: "Francia",
    values: [38, 22, 40],
  },
  {
    codeA: "MX",
    teamA: "México",
    codeB: "UY",
    teamB: "Uruguay",
    values: [52, 18, 30],
  },
  {
    codeA: "DE",
    teamA: "Alemania",
    codeB: "ENG",
    teamB: "Inglaterra",
    values: [42, 25, 33],
  },
];

export default function VotingTrends() {
  return (
    <section className={styles.card}>
      <h2>Tendencias de Votación</h2>

      <div className={styles.trends}>
        {trends.map((trend) => (
          <div className={styles.trend} key={`${trend.codeA}-${trend.codeB}`}>
            <div className={styles.matchHeader}>
              <span>{trend.codeA}</span>
              <strong>{trend.teamA}</strong>
              <small>vs</small>
              <strong>{trend.teamB}</strong>
              <span>{trend.codeB}</span>
            </div>

            <div className={styles.row}>
              <span>{trend.teamA}</span>
              <div className={styles.bar}>
                <div
                  className={styles.gold}
                  style={{ width: `${trend.values[0]}%` }}
                >
                  {trend.values[0]}%
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <span>Empate</span>
              <div className={styles.bar}>
                <div
                  className={styles.gray}
                  style={{ width: `${trend.values[1]}%` }}
                >
                  {trend.values[1]}%
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <span>{trend.teamB}</span>
              <div className={styles.bar}>
                <div
                  className={styles.gold}
                  style={{ width: `${trend.values[2]}%` }}
                >
                  {trend.values[2]}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}