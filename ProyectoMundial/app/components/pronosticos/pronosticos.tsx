import PredictionForm from "./predictionForm";
import VotingTrends from "./votingTrends";
import TopPlayers from "./topPlayers";
import styles from "./pronosticos.module.css";

export default function Pronosticos() {
  return (
    <main className={styles.pronosticos}>
      <section className={styles.hero}>
        <h1>Pronósticos y Votaciones</h1>
        <p>Predice los resultados y compite con otros aficionados</p>
      </section>

      <section className={styles.content}>
        <PredictionForm />

        <div className={styles.rightColumn}>
          <VotingTrends />
          <TopPlayers />
        </div>
      </section>
    </main>
  );
}