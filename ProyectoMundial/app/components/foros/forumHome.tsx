"use client";

import { useEffect, useState } from "react";
import { ForumCountry } from "./foros";
import styles from "./forumHome.module.css";
import { supabase } from "@/app/lib/supabase";

type ForumHomeProps = {
  forums: ForumCountry[];
  onSelectForum: (forumId: number) => void;
};

type ForumStats = {
  postsCount: number;
  members: number;
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

  /*
      ESTADÍSTICAS POR PAÍS
  */
  const [forumStats, setForumStats] = useState<
    Record<string, ForumStats>
  >({});

  /*
      OBTENER POSTS Y MIEMBROS
  */
  useEffect(() => {
    async function fetchForumStats() {

      const { data, error } = await supabase
        .from("publicacion")
        .select("pais, id_usuario");

      if (error || !data) {
        console.error(error);
        return;
      }

      /*
          AGRUPAR DATOS POR PAÍS
      */
      const stats: Record<string, ForumStats> = {};

      data.forEach((post) => {

        const pais = post.pais;

        /*
            SI EL PAÍS NO EXISTE
        */
        if (!stats[pais]) {

          stats[pais] = {
            postsCount: 0,
            members: 0,
          };
        }

        /*
            CONTAR POSTS
        */
        stats[pais].postsCount += 1;
      });

      /*
          CONTAR MIEMBROS ÚNICOS
      */
      Object.keys(stats).forEach((pais) => {

        const usuariosUnicos = new Set(
          data
            .filter((post) => post.pais === pais)
            .map((post) => post.id_usuario)
        );

        stats[pais].members = usuariosUnicos.size;
      });

      setForumStats(stats);
    }

    fetchForumStats();
  }, []);

  /*
      FILTROS
  */
  const filteredForums = forums.filter((forum) => {

    const matchesSearch = forum.country
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "Todos" ||
      forum.country === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className={styles.foros}>
      <section className={styles.hero}>
        <h1>Foros por País</h1>

        <p>
          Únete a la conversación con aficionados
          de todo el mundo
        </p>
      </section>

      <input
        className={styles.search}
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={
              activeFilter === filter
                ? styles.activeFilter
                : styles.filter
            }
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {filteredForums.map((forum) => {

          const stats = forumStats[forum.country];

          return (
            <article
              className={styles.card}
              key={forum.id}
            >
              <div className={styles.cardHeader}>
                <h2>{forum.country}</h2>

                {forum.trending && (
                  <span className={styles.trending}>
                    TRENDING
                  </span>
                )}
              </div>

              <p>
                💬{" "}
                <strong>
                  {stats?.postsCount || 0}
                </strong>{" "}
                posts activos
              </p>

              <p>
                👤{" "}
                <strong>
                  {stats?.members || 0}
                </strong>{" "}
                miembros
              </p>

              <button
                className={styles.enterButton}
                onClick={() =>
                  onSelectForum(forum.id)
                }
              >
                Entrar al foro →
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}