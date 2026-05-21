"use client";

import { useState } from "react";
import ProfileCard from "./profileCard";
import ProfileTabs from "./profileTabs";
import RecentActivity from "./recentActivity";
import styles from "./perfil.module.css";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState("Actividad");

  return (
    <main className={styles.perfil}>
      <ProfileCard />

      <section className={styles.content}>
        <div className={styles.header}>
          <h1>Mi Perfil</h1>
          <p>Gestiona tu actividad y preferencias</p>
        </div>

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <RecentActivity activeTab={activeTab} />
      </section>
    </main>
  );
}