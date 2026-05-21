"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./promoBanner.module.css";

const promos = [
  {
    restaurant: "La Cantina del Gol",
    offer: "2x1 en cervezas durante partidos",
    city: "Ciudad de México",
  },
  {
    restaurant: "Samba Grill",
    offer: "Rodizio libre en partidos",
    city: "São Paulo",
  },
  {
    restaurant: "El Estadio Bar & Grill",
    offer: "Descuento 20% en alimentos",
    city: "Guadalajara",
  },
];

export default function PromoBanner() {
  const [activePromo, setActivePromo] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePromo((current) => (current + 1) % promos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) {
    return null;
  }

  const promo = promos[activePromo];

  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <span className={styles.icon}>📢</span>
        <span className={styles.badge}>PROMO</span>
        <strong>{promo.restaurant}</strong>
        <span className={styles.separator}>—</span>
        <span className={styles.offer}>{promo.offer}</span>
        <span className={styles.city}>({promo.city})</span>
      </div>

      <div className={styles.right}>
        <div className={styles.dots}>
          {promos.map((_, index) => (
            <button
              key={index}
              className={index === activePromo ? styles.activeDot : styles.dot}
              onClick={() => setActivePromo(index)}
            />
          ))}
        </div>

        <Link href="/restaurantes" className={styles.moreButton}>
          Ver más
        </Link>

        <button className={styles.closeButton} onClick={() => setVisible(false)}>
          ×
        </button>
      </div>
    </section>
  );
}