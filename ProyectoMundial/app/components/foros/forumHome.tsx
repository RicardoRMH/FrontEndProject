"use client";

import { useState } from "react";
import { ForumCountry } from "./foros";
import styles from "./forumHome.module.css";

type ForumHomeProps = {
  forums: ForumCountry[];
  onSelectForum: (forumId: number) => void;
};

const filters = [
  "Todos",
  "México",
  "Argentina",
  "Brasil",
  "España",
  "Francia",
  "Alemania",
  "Inglaterra",
  "Portugal",
];

export default function ForumHome({ forums, onSelectForum }: ForumHomeProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredForums = forums.filter((forum) => {
    const matchesSearch = forum.country
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "Todos" || forum.country === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className={styles.foros}>
      <section className={styles.hero}>
        <h1>Foros por País</h1>
        <p>Únete a la conversación con aficionados de todo el mundo</p>
      </section>

      <input
        className={styles.search}
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={
              activeFilter === filter ? styles.activeFilter : styles.filter
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {filteredForums.map((forum) => (
          <article className={styles.card} key={forum.id}>
            <div className={styles.cardHeader}>
              <h2>{forum.country}</h2>

              {forum.trending && (
                <span className={styles.trending}>TRENDING</span>
              )}
            </div>

            <p>
              💬 <strong>{forum.postsCount}</strong> posts activos
            </p>

            <p>
              👤 <strong>{forum.members}</strong> miembros
            </p>

            <button
              className={styles.enterButton}
              onClick={() => onSelectForum(forum.id)}
            >
              Entrar al foro →
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}