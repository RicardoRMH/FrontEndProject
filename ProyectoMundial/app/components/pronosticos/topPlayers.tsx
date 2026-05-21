import styles from "./topPlayers.module.css";

const players = [
  {
    rank: 1,
    name: "Lionel Messi",
    votes: "34% de votos",
    emoji: "🇦🇷",
  },
  {
    rank: 2,
    name: "Kylian Mbappé",
    votes: "28% de votos",
    emoji: "🇫🇷",
  },
  {
    rank: 3,
    name: "Neymar Jr",
    votes: "22% de votos",
    emoji: "🇧🇷",
  },
];

export default function TopPlayers() {
  return (
    <section className={styles.card}>
      <h2>Top 3 Jugadores Más Votados</h2>

      <div className={styles.players}>
        {players.map((player) => (
          <div className={styles.player} key={player.rank}>
            <span className={styles.rank}>{player.rank}</span>
            <span className={styles.avatar}>{player.emoji}</span>

            <div>
              <h3>{player.name}</h3>
              <p>{player.votes}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}