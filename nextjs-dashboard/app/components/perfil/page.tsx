"use client";

import { useState } from "react";

import styles from "./perfil.module.css";

import Sidebar from "./Sidebar/sidebar";

import RecentActivity from "./RecentActivity/RecentActivity";
import Pronosticos from "./Pronosticos/Pronosticos";
import Favoritos from "./Favoritos/Favoritos";
import Reuniones from "./Reuniones/Reuniones";

import {
  Clock3,
  ChartColumn,
  Heart,
  MapPin,
} from "lucide-react";

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("actividad");

  function renderSection() {
    switch (activeTab) {
      case "actividad":
        return <RecentActivity />;

      case "pronosticos":
        return <Pronosticos />;

      case "favoritos":
        return <Favoritos />;

      case "reuniones":
        return <Reuniones />;

      default:
        return <RecentActivity />;
    }
  }

  return (
    <main className={styles.pageContainer}>
      <div className={styles.layout}>
        <Sidebar />

        <section className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>Mi Perfil</h1>

            <p className={styles.subtitle}>
              Gestiona tu actividad y preferencias
            </p>
          </header>

          <div className={styles.tabs}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "actividad" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("actividad")}
            >
              <Clock3 size={16} />
              Actividad
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "pronosticos" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("pronosticos")}
            >
              <ChartColumn size={16} />
              Pronósticos
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "favoritos" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("favoritos")}
            >
              <Heart size={16} />
              Favoritos
            </button>

            <button
              className={`${styles.tabButton} ${
                activeTab === "reuniones" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("reuniones")}
            >
              <MapPin size={16} />
              Reuniones
            </button>
          </div>

          <div className={styles.sectionContainer}>
            {renderSection()}
          </div>
        </section>
      </div>
    </main>
  );
}