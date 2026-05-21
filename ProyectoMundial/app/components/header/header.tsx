"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
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
            👤
          </Link>

          <button className={styles.loginButton}>Iniciar sesión</button>
        </div>
      </nav>
    </header>
  );
}