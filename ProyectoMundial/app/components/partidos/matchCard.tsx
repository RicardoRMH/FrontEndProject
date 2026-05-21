"use client";

import { useState } from "react";
import Link from "next/link";
import MatchDetailModal from "./matchDetailModal";
import styles from "./matchCard.module.css";

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

type MatchCardProps = {
  match: Match;
};

export default function MatchCard({ match }: MatchCardProps) {
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrediction = (
    event: React.MouseEvent<HTMLButtonElement>,
    prediction: string
  ) => {
    event.stopPropagation();
    setSelectedPrediction(prediction);
  };

  return (
    <>
      <article className={styles.card} onClick={() => setIsModalOpen(true)}>
        <div className={styles.top}>
          <div>
            <span
              className={
                match.status === "EN VIVO" ? styles.liveBadge : styles.statusBadge
              }
            >
              {match.status}
            </span>
            <p className={styles.date}>📅 {match.date} · {match.time}</p>
          </div>

          <p className={styles.stadium}>📍 {match.stadium}, {match.city}</p>
        </div>

        <div className={styles.teams}>
          <div className={styles.team}>
            <div className={styles.flag}>{match.codeA}</div>
            <h3>{match.teamA}</h3>
          </div>

          <span className={styles.vs}>VS</span>

          <div className={styles.team}>
            <div className={styles.flag}>{match.codeB}</div>
            <h3>{match.teamB}</h3>
          </div>
        </div>

        <div className={styles.predictions}>
          <button
            className={
              selectedPrediction === match.codeA
                ? styles.predictionActive
                : styles.prediction
            }
            onClick={(event) => handlePrediction(event, match.codeA)}
          >
            <span>{match.codeA}</span>
            <strong>{match.percentA}%</strong>
          </button>

          <button
            className={
              selectedPrediction === "EMP"
                ? styles.predictionActive
                : styles.prediction
            }
            onClick={(event) => handlePrediction(event, "EMP")}
          >
            <span>EMP</span>
            <strong>{match.drawPercent}%</strong>
          </button>

          <button
            className={
              selectedPrediction === match.codeB
                ? styles.predictionActive
                : styles.prediction
            }
            onClick={(event) => handlePrediction(event, match.codeB)}
          >
            <span>{match.codeB}</span>
            <strong>{match.percentB}%</strong>
          </button>
        </div>

        {selectedPrediction && (
          <p className={styles.voteMessage}>✓ ¡Voto registrado!</p>
        )}

        <div className={styles.progress}>
          <div
            className={styles.progressA}
            style={{ width: `${match.percentA}%` }}
          />
          <div
            className={styles.progressDraw}
            style={{ width: `${match.drawPercent}%` }}
          />
          <div
            className={styles.progressB}
            style={{ width: `${match.percentB}%` }}
          />
        </div>

        <div className={styles.actions}>
          <Link
            href="/pronosticos"
            className={styles.primaryButton}
            onClick={(event) => event.stopPropagation()}
          >
            Pronóstico
          </Link>

          <Link
            href="/reuniones"
            className={styles.secondaryButton}
            onClick={(event) => event.stopPropagation()}
          >
            Reuniones
          </Link>
        </div>
      </article>

      {isModalOpen && (
        <MatchDetailModal
          match={match}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}