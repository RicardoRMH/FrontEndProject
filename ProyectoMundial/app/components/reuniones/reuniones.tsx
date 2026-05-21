import ReunionesActions from "./reunionesActions";
import ReunionesList from "./reunionesList";
import styles from "./reuniones.module.css";

export default function Reuniones() {
    return (
        <main className={styles.reuniones}>
            <section className={styles.hero}>
                <h1>Reuniones para Ver Partidos</h1>
                <p>Encuentra o crea puntos de reunión con otros aficionados</p>
            </section>

            <ReunionesActions />

            <ReunionesList />
        </main>
    );
}