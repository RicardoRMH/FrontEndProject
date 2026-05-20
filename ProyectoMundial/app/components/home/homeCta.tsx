import styles from "./homeCta.module.css";

export default function HomeCta() {
  return (
    <section className={styles.cta}>
      <h2>¿Listo para vivir el Mundial?</h2>

      <p>
        Únete a la comunidad más grande de aficionados al fútbol y no te pierdas
        ningún momento
      </p>

      <button>Únete Ahora</button>
    </section>
  );
}