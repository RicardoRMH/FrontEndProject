import Link from "next/link";
import styles from "./quickAccess.module.css";

const cards = [
  {
    icon: "💬",
    title: "Foros por País",
    description: "Únete a debates con aficionados de tu selección favorita",
    href: "/foros",
  },
  {
    icon: "📊",
    title: "Pronósticos",
    description: "Vota por tu equipo y predice los resultados",
    href: "/pronosticos",
  },
  {
    icon: "📍",
    title: "Reuniones",
    description: "Encuentra puntos para ver los partidos con otros fans",
    href: "/reuniones",
  },
  {
    icon: "🍴",
    title: "Restaurantes Aliados",
    description: "Descubre lugares con promociones especiales",
    href: "/restaurantes",
  },
];

export default function QuickAccess() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {cards.map((card) => (
          <article className={styles.card} key={card.title}>
            <span className={styles.icon}>{card.icon}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>

            <Link href={card.href} className={styles.link}>
              Ir →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}