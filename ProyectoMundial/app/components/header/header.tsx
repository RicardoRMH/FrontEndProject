import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>⚽</span>
                    <span>Mundial Connect</span>
                </div>

                <ul className={styles.menu}>
                    <li><Link href="/partidos">Partidos</Link></li>
                    <li><Link href="/pronosticos">Pronósticos</Link></li>
                    <li><Link href="/foros">Foros</Link></li>
                    <li><Link href="/reuniones">Reuniones</Link></li>
                    <li><Link href="/restaurantes">Restaurantes</Link></li>
                    <li><Link href="/favoritos">Favoritos</Link></li>
                </ul>

                <div className={styles.actions}>
                    <button className={styles.iconButton}>🔍</button>
                    <button className={styles.iconButton}>🔔</button>
                    <button className={styles.avatar}>👤</button>
                    <button className={styles.loginButton}>Iniciar sesión</button>
                </div>
            </nav>
        </header>
    );
}