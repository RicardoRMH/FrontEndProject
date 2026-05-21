"use client";

import { useState } from "react";
import styles from "./predictionForm.module.css";

const matches = [
  {
    id: 1,
    label: "Argentina vs Brasil",
    teamA: "Argentina",
    codeA: "AR",
    teamB: "Brasil",
    codeB: "BR",
    date: "2024-06-15",
    time: "20:00",
  },
  {
    id: 2,
    label: "España vs Francia",
    teamA: "España",
    codeA: "ES",
    teamB: "Francia",
    codeB: "FR",
    date: "2024-06-16",
    time: "18:00",
  },
  {
    id: 3,
    label: "México vs Uruguay",
    teamA: "México",
    codeA: "MX",
    teamB: "Uruguay",
    codeB: "UY",
    date: "2024-06-17",
    time: "20:00",
  },
  {
    id: 4,
    label: "Alemania vs Inglaterra",
    teamA: "Alemania",
    codeA: "DE",
    teamB: "Inglaterra",
    codeB: "ENG",
    date: "2024-06-18",
    time: "19:00",
  },
  {
    id: 5,
    label: "Portugal vs Italia",
    teamA: "Portugal",
    codeA: "PT",
    teamB: "Italia",
    codeB: "IT",
    date: "2024-06-19",
    time: "20:30",
  },
  {
    id: 6,
    label: "Colombia vs Países Bajos",
    teamA: "Colombia",
    codeA: "CO",
    teamB: "Países Bajos",
    codeB: "NL",
    date: "2024-06-20",
    time: "17:00",
  },
];

const players = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Kylian Mbappé",
  "Neymar Jr",
  "Erling Haaland",
  "Vinicius Jr",
  "Kevin De Bruyne",
  "Harry Kane",
];

export default function PredictionForm() {
  const [selectedMatchId, setSelectedMatchId] = useState(1);
  const [winner, setWinner] = useState("");
  const [goalsA, setGoalsA] = useState("0");
  const [goalsB, setGoalsB] = useState("0");
  const [player, setPlayer] = useState("");
  const [message, setMessage] = useState("");

  const selectedMatch = matches.find((match) => match.id === selectedMatchId)!;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!winner || !player) {
      setMessage("Selecciona ganador y jugador destacado.");
      return;
    }

    setMessage("✓ Pronóstico enviado correctamente");
  };

  return (
    <section className={styles.card}>
      <h2>Hacer Pronóstico</h2>

      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Selecciona el partido</label>
        <select
          className={styles.select}
          value={selectedMatchId}
          onChange={(event) => {
            setSelectedMatchId(Number(event.target.value));
            setWinner("");
            setMessage("");
          }}
        >
          {matches.map((match) => (
            <option key={match.id} value={match.id}>
              {match.label}
            </option>
          ))}
        </select>

        <div className={styles.matchBox}>
          <div>
            <strong>{selectedMatch.codeA}</strong>
            <span>{selectedMatch.teamA}</span>
          </div>

          <p>VS</p>

          <div>
            <strong>{selectedMatch.codeB}</strong>
            <span>{selectedMatch.teamB}</span>
          </div>

          <small>
            {selectedMatch.date} • {selectedMatch.time}
          </small>
        </div>

        <label className={styles.label}>¿Quién ganará?</label>

        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="winner"
              value={selectedMatch.teamA}
              checked={winner === selectedMatch.teamA}
              onChange={(event) => setWinner(event.target.value)}
            />
            {selectedMatch.teamA}
          </label>

          <label>
            <input
              type="radio"
              name="winner"
              value="Empate"
              checked={winner === "Empate"}
              onChange={(event) => setWinner(event.target.value)}
            />
            Empate
          </label>

          <label>
            <input
              type="radio"
              name="winner"
              value={selectedMatch.teamB}
              checked={winner === selectedMatch.teamB}
              onChange={(event) => setWinner(event.target.value)}
            />
            {selectedMatch.teamB}
          </label>
        </div>

        <label className={styles.label}>Marcador final</label>

        <div className={styles.score}>
          <input
            type="number"
            min="0"
            value={goalsA}
            onChange={(event) => setGoalsA(event.target.value)}
          />

          <span>-</span>

          <input
            type="number"
            min="0"
            value={goalsB}
            onChange={(event) => setGoalsB(event.target.value)}
          />
        </div>

        <label className={styles.label}>Jugador destacado</label>

        <select
          className={styles.select}
          value={player}
          onChange={(event) => setPlayer(event.target.value)}
        >
          <option value="">Selecciona un jugador</option>
          {players.map((playerName) => (
            <option key={playerName} value={playerName}>
              {playerName}
            </option>
          ))}
        </select>

        <button className={styles.submitButton} type="submit">
          Enviar Pronóstico
        </button>

        {message && <p className={styles.message}>{message}</p>}
      </form>
    </section>
  );
}