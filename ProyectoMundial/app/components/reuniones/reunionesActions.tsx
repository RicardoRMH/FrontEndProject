import styles from "./reunionesActions.module.css";

export default function ReunionesActions() {
    return (
        <section className={styles.actions}>
            <div className={styles.leftActions}>
                <button className={styles.activeButton}>☷ Lista</button>
                <button className={styles.outlineButton}>📍 Mapa</button>
            </div>

            <div className={styles.rightActions}>
                <button className={styles.outlineButton}>▦ Mi código QR</button>
                <button className={styles.activeButton}>＋ Crear reunión</button>
            </div>
        </section>
    );
}