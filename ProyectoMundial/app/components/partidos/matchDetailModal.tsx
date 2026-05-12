import Link from "next/link";
import styles from "./matchDetailModal.module.css";

type Match = {
  id: number;
  status: string;
  date: string;
  time: string;
  stadium: string;
  city: string;
  teamA: string;
  codeA: string;
  percentA: number;
  drawPercent: number;
  teamB: string;
  codeB: string;
  percentB: number;
};

type MatchDetailModalProps = {
  match: Match;
  onClose: () => void;
};

export default function MatchDetailModal({ match, onClose }: MatchDetailModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <section className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <span className={styles.status}>{match.status}</span>

        <div className={styles.teams}>
          <div className={styles.team}>
            <div className={styles.flag}>{match.codeA}</div>
            <h2>{match.teamA}</h2>
          </div>

          <span className={styles.vs}>VS</span>

          <div className={styles.team}>
            <div className={styles.flag}>{match.codeB}</div>
            <h2>{match.teamB}</h2>
          </div>
        </div>

        <div className={styles.info}>
          <p>📅 {match.date} · {match.time}</p>
          <p>📍 {match.stadium}, {match.city}</p>
          <p>👥 15,420 aficionados siguiendo este partido</p>
        </div>

        <div className={styles.predictionsBox}>
          <h3>Pronósticos de la comunidad</h3>

          <div className={styles.predictionRow}>
            <span>{match.teamA}</span>
            <div className={styles.bar}>
              <div style={{ width: `${match.percentA}%` }}></div>
            </div>
            <strong>{match.percentA}%</strong>
          </div>

          <div className={styles.predictionRow}>
            <span>Empate</span>
            <div className={styles.bar}>
              <div style={{ width: `${match.drawPercent}%` }}></div>
            </div>
            <strong>{match.drawPercent}%</strong>
          </div>

          <div className={styles.predictionRow}>
            <span>{match.teamB}</span>
            <div className={styles.bar}>
              <div style={{ width: `${match.percentB}%` }}></div>
            </div>
            <strong>{match.percentB}%</strong>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/pronosticos" className={styles.primaryButton}>
            Hacer Pronóstico
          </Link>

          <Link href="/reuniones" className={styles.secondaryButton}>
            Buscar Reunión
          </Link>
        </div>
      </section>
    </div>
  );
}