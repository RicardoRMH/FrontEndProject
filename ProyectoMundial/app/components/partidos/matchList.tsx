import MatchCard from "./matchCard";
import styles from "./matchList.module.css";

const matches = [
  {
    id: 1,
    status: "PRÓXIMO",
    date: "2024-06-15",
    time: "20:00",
    stadium: "Estadio Azteca",
    city: "Ciudad de México",
    teamA: "Argentina",
    codeA: "AR",
    percentA: 45,
    drawPercent: 15,
    teamB: "Brasil",
    codeB: "BR",
    percentB: 40,
  },
  {
    id: 2,
    status: "EN VIVO",
    date: "2024-06-16",
    time: "17:00",
    stadium: "Camp Nou",
    city: "Barcelona",
    teamA: "España",
    codeA: "ES",
    percentA: 52,
    drawPercent: 18,
    teamB: "Francia",
    codeB: "FR",
    percentB: 30,
  },
  {
    id: 3,
    status: "PRÓXIMO",
    date: "2024-06-17",
    time: "20:00",
    stadium: "Estadio Jalisco",
    city: "Guadalajara",
    teamA: "México",
    codeA: "MX",
    percentA: 48,
    drawPercent: 22,
    teamB: "Uruguay",
    codeB: "UY",
    percentB: 30,
  },
  {
    id: 4,
    status: "PRÓXIMO",
    date: "2024-06-18",
    time: "18:00",
    stadium: "Wembley Stadium",
    city: "Londres",
    teamA: "Alemania",
    codeA: "GER",
    percentA: 42,
    drawPercent: 25,
    teamB: "Inglaterra",
    codeB: "ENG",
    percentB: 33,
  },
];

export default function MatchList() {
  return (
    <section className={styles.list}>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </section>
  );
}