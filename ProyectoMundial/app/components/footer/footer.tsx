import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>⚽</span>
                        <span>Mundial Connect</span>
                    </div>

                    <p>La comunidad del fútbol mundial</p>

                    <div className={styles.socials}>
                        <button>f</button>
                        <button>X</button>
                        <button>◎</button>
                        <button>♪</button>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Explora</h3>
                    <a href="#">Foros</a>
                    <a href="#">Pronósticos</a>
                    <a href="#">Reuniones</a>
                    <a href="#">Restaurantes</a>
                    <a href="#">Favoritos</a>
                </div>

                <div className={styles.column}>
                    <h3>Soporte</h3>
                    <a href="#">FAQ</a>
                    <a href="#">Contacto</a>
                    <a href="#">Términos</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Para Restaurantes</a>
                </div>

                <div className={styles.newsletter}>
                    <h3>Recibe las novedades</h3>

                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="tu@email.com" />
                        <button>Enviar</button>
                    </div>

                    <p>Al suscribirte aceptas nuestra política de privacidad.</p>
                </div>
            </div>

            <div className={styles.copy}>
                <span>© 2026 Mundial Connect. Todos los derechos reservados.</span>
                <span>Hecho con ⚽ para los aficionados</span>

            </div>
        </footer>
    );
}