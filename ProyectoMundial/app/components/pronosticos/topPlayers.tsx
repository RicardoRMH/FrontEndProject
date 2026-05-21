import styles from "./topPlayers.module.css";

const players = [
  {
    rank: 1,
    name: "Lionel Messi",
    votes: "34% de votos",
    image: "/restaurantes/messi.jpg",
  },
  {
    rank: 2,
    name: "Kylian Mbappé",
    votes: "28% de votos",
    image: "/restaurantes/mbappe.jpg",
  },
  {
    rank: 3,
    name: "Neymar Jr",
    votes: "22% de votos",
    image: "/restaurantes/neymar.jpg",
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

            <img
              src={player.image}
              alt={player.name}
              className={styles.avatar}
            />

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