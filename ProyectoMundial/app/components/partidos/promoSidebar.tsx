"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./promoSidebar.module.css";

const promos = [
  {
    title: "La Cantina del Gol",
    offer: "2x1 en cervezas",
    description: "Durante partidos seleccionados.",
  },
  {
    title: "El Estadio Bar & Grill",
    offer: "20% de descuento",
    description: "En alimentos durante el partido.",
  },
  {
    title: "Samba Grill",
    offer: "Rodizio especial",
    description: "Promoción mundialista.",
  },
];

export default function PromoSidebar() {
  const [activePromo, setActivePromo] = useState(0);

  const promo = promos[activePromo];

  return (
    <section className={styles.card}>
      <h2>Promos del Día</h2>

      <div className={styles.promoBox}>
        <span>🔥</span>
        <h3>{promo.title}</h3>
        <strong>{promo.offer}</strong>
        <p>{promo.description}</p>
      </div>

      <div className={styles.dots}>
        {promos.map((_, index) => (
          <button
            key={index}
            className={index === activePromo ? styles.activeDot : styles.dot}
            onClick={() => setActivePromo(index)}
          />
        ))}
      </div>

      <Link href="/restaurantes" className={styles.button}>
        Explorar Restaurantes
      </Link>
    </section>
  );
}