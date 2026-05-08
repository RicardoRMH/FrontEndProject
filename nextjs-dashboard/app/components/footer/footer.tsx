

import styles from "./footer.module.css";
import headerStyles from "../header/header.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={headerStyles.container}>
        <div className={styles.grid}>
          {/*Se configura la primer columna*/}
          <div>
            {/*Se muestra el logo de la pagina*/}
            <div className={styles.brand}>
                                <Image
                                src="/logos/Logo.png"
                                alt="Mundial Connect Logo"
                                width={48}
                                height={48}
                                className={styles.logo}
                                />
              <span className={styles.brandText}>
                Mundial Connect
              </span>
            </div>
            {/*Se muestran los iconos de las redes sociales */}
            <div className={styles.socials}>
                <a
                href="https://facebook.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.socialLink}
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                href="https://twitter.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.socialLink}
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                href="https://instagram.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.socialLink}
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                href="https://tiktok.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.socialLink}
                >
                  <i className="ri-tiktok-fill"></i>
                </a>
            </div>
          </div>
          {/*Se configura la segunda columna */}
          <div>
            <div>
              <h4 className={styles.columnTitle}>
                Explora
              </h4>

              <ul className={styles.linksList}>
                <li>
                  <a
                    href="/components/foros"
                    className={styles.footerLink}
                >
                   Foros
                  </a>
                </li>

                <li>
                  <a
                    href="/components/pronosticos"
                    className={styles.footerLink}
                  >
                    Pronósticos
                  </a>
                </li>

                <li>
                  <a
                  href="/components/reuniones"
                  className={styles.footerLink}
                  >
                    Reuniones
                    </a>
                    </li>
                    <li>
                      <a
                    href="/components/restaurantes"
                    className={styles.footerLink}
                  >
                    Restaurantes
                  </a>
                </li>

                <li>
                  <a
                    href="/components/favoritos"
                    className={styles.footerLink}
                  >
                    Favoritos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Se configura la tercer columna*/}
          <div>
            <div>
              <h4 className={styles.columnTitle}>
                Soporte
              </h4>

              <ul className={styles.linksList}>
                <li>
                  <a
                    href="/components/faq"
                    className={styles.footerLink}
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="/components/contacto"
                    className={styles.footerLink}
                  >
                    Contacto
                  </a>
                </li>

                <li>
                  <a
                    href="/components/terminos"
                    className={styles.footerLink}
                  >
                    Términos
                  </a>
                </li>

                <li>
                  <a
                    href="/components/privacidad"
                    className={styles.footerLink}
                  >
                    Privacidad
                  </a>
                </li>

                <li>
                  <a
                    href="/components/restaurantes"
                    className={styles.footerLink}
                  >
                    Para Restaurantes
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Se configura la cuarta columna*/}
          <div>
            <form className={styles.subscribeForm}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Tu email"
                  className={styles.emailInput}
                />

                <button
                  type="submit"
                  className={styles.subscribeButton}
                >
                  Enviar
                </button>
              </div>

              <p className={styles.privacyText}>
                Al suscribirte aceptas nuestra política de privacidad
              </p>
            </form>

          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 Mundial Connect. Todos los derechos reservados.
            </p>

            <p className={styles.madeWith}>
              Hecho con
              <i className={`ri-football-fill ${styles.icon}`}></i>
              para los aficionados
            </p>

            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.poweredBy}
            >
              Powered by Equipo 10
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}