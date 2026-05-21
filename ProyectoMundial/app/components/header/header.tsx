"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./header.module.css";

const menuItems = [
  {
    label: "Partidos",
    href: "/partidos",
  },
  {
    label: "Pronósticos",
    href: "/pronosticos",
  },
  {
    label: "Foros",
    href: "/foros",
  },
  {
    label: "Reuniones",
    href: "/reuniones",
  },
  {
    label: "Restaurantes",
    href: "/restaurantes",
  },
  {
    label: "Favoritos",
    href: "/favoritos",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>⚽</span>
            <span>Mundial Connect</span>
          </Link>

          <ul className={styles.menu}>
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? styles.activeLink : styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.actions}>
            <Link
              href="/perfil"
              className={
                pathname === "/perfil" ? styles.activeAvatar : styles.avatar
              }
            >
              <img
                src="/restaurantes/cristiano.jpg"
                alt="Foto de perfil"
                className={styles.avatarImage}
              />
            </Link>

            <button
              className={
                showLogin ? styles.loginButtonActive : styles.loginButton
              }
              onClick={() => setShowLogin(true)}
            >
              Iniciar sesión
            </button>
          </div>
        </nav>
      </header>

      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.loginModal}>
            <button
              className={styles.closeButton}
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>

            <h2>Iniciar Sesión</h2>

            <form className={styles.loginForm}>
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />

              <label>Contraseña</label>
              <input type="password" placeholder="••••••••" />

              <button type="submit" className={styles.submitLogin}>
                Entrar
              </button>
            </form>

            <p className={styles.registerText}>
              ¿No tienes cuenta? <span>Regístrate</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}