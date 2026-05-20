import Link from "next/link";
import styles from "./heroHome.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <span className={styles.badge}>🏆 MUNDIAL 2026</span>

        <h1>
          CONECTA CON MILLONES <br />
          <span>DE AFICIONADOS</span> <br />
          ALREDEDOR DEL MUNDO
        </h1>

        <p>
          Foros, pronósticos, reuniones y más para vivir el Mundial como nunca
          antes
        </p>

        <div className={styles.actions}>
          <Link href="/foros" className={styles.primaryButton}>
            Explorar Foros
          </Link>

          <Link href="/partidos" className={styles.secondaryButton}>
            Ver Próximos Partidos
          </Link>
        </div>
      </div>
    </section>
  );
}