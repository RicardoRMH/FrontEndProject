import styles from "./statsPanels.module.css";

const expectedMatches = [
  { name: "Argentina vs Brasil", percent: 95 },
  { name: "España vs Francia", percent: 88 },
  { name: "Alemania vs Inglaterra", percent: 82 },
  { name: "Portugal vs Italia", percent: 76 },
  { name: "México vs Uruguay", percent: 71 },
];

const restaurants = [
  { rank: 1, name: "Samba Grill", rating: "4.8", visits: 612 },
  { rank: 2, name: "Brasas Argentinas", rating: "4.7", visits: 521 },
  { rank: 3, name: "Pizzería Azzurra", rating: "4.9", visits: 456 },
  { rank: 4, name: "Wings & Goals", rating: "4.4", visits: 523 },
  { rank: 5, name: "Tapas y Fútbol", rating: "4.6", visits: 445 },
];

const countries = [
  { name: "Brasil", percent: 95 },
  { name: "Argentina", percent: 92 },
  { name: "México", percent: 88 },
  { name: "España", percent: 85 },
  { name: "Francia", percent: 82 },
  { name: "Alemania", percent: 78 },
];

export default function StatsPanels() {
  return (
    <section className={styles.panels}>
      <article className={styles.panel}>
        <h2>🔥 Partidos Más Esperados</h2>

        {expectedMatches.map((match) => (
          <div className={styles.progressItem} key={match.name}>
            <div className={styles.progressHeader}>
              <span>{match.name}</span>
              <strong>{match.percent}%</strong>
            </div>

            <div className={styles.bar}>
              <div style={{ width: `${match.percent}%` }} />
            </div>
          </div>
        ))}
      </article>

      <article className={styles.panel}>
        <h2>🍴 Restaurantes Más Populares</h2>

        <div className={styles.restaurantList}>
          {restaurants.map((restaurant) => (
            <div className={styles.restaurantItem} key={restaurant.rank}>
              <span className={styles.rank}>{restaurant.rank}</span>

              <div>
                <h3>{restaurant.name}</h3>
                <p>★★★★★ {restaurant.rating}</p>
              </div>

              <strong>
                {restaurant.visits}
                <small>visitas</small>
              </strong>
            </div>
          ))}
        </div>
      </article>

      <article className={styles.panel}>
        <h2>🌐 Países con Más Actividad</h2>

        {countries.map((country) => (
          <div className={styles.progressItem} key={country.name}>
            <div className={styles.progressHeader}>
              <span>{country.name}</span>
              <strong>{country.percent}% actividad</strong>
            </div>

            <div className={styles.barGreen}>
              <div style={{ width: `${country.percent}%` }} />
            </div>
          </div>
        ))}
      </article>

      <article className={styles.panel}>
        <h2>🏆 Tus Estadísticas</h2>

        <div className={styles.userStats}>
          <div>
            <span>✅</span>
            <strong>68%</strong>
            <p>Pronósticos acertados</p>
          </div>

          <div>
            <span>📊</span>
            <strong>72%</strong>
            <p>Promedio comunidad</p>
          </div>

          <div>
            <span>🏅</span>
            <strong>TOP 15%</strong>
            <p>Ranking global</p>
          </div>

          <div>
            <span>👥</span>
            <strong>12</strong>
            <p>Reuniones asistidas</p>
          </div>
        </div>
      </article>
    </section>
  );
}