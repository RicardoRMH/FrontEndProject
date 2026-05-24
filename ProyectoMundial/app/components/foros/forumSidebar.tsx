"use client";

import { useEffect, useState } from "react";
import { ForumCountry } from "./foros";
import styles from "./forumSidebar.module.css";
import { supabase } from "@/app/lib/supabase";

type ForumSidebarProps = {
  forum: ForumCountry;
};

type ForumStats = {
  members: number;
  postsCount: number;
  ranking: number;
};

export default function ForumSidebar({
  forum,
}: ForumSidebarProps) {

  const [stats, setStats] = useState<ForumStats>({
    members: 0,
    postsCount: 0,
    ranking: 0,
  });

  useEffect(() => {

    async function fetchForumStats() {

      /*
          TRAER POSTS
      */
      const { data, error } = await supabase
        .from("publicacion")
        .select("pais, id_usuario");

      if (error || !data) {
        console.error(error);
        return;
      }

      /*
          POSTS DEL FORO ACTUAL
      */
      const forumPosts = data.filter(
        (post) => post.pais === forum.country
      );

      /*
          TOTAL POSTS DEL FORO
      */
      const postsCount = forumPosts.length;

      /*
          USUARIOS ÚNICOS
      */
      const uniqueUsers = new Set(
        forumPosts.map(
          (post) => post.id_usuario
        )
      );

      const members = uniqueUsers.size;

      /*
          CONTAR POSTS POR PAÍS
      */
      const postsPerCountry: Record<
        string,
        number
      > = {};

      data.forEach((post) => {

        if (!postsPerCountry[post.pais]) {
          postsPerCountry[post.pais] = 0;
        }

        postsPerCountry[post.pais] += 1;
      });

      /*
          OBTENER EL MÁXIMO GLOBAL
      */
      const maxPosts = Math.max(
        ...Object.values(postsPerCountry)
      );

      /*
          RANKING 0 - 5
      */
      let ranking = 0;

      if (maxPosts > 0) {

        ranking = Math.round(
          (postsCount / maxPosts) * 5
        );
      }

      setStats({
        members,
        postsCount,
        ranking,
      });
    }

    fetchForumStats();

  }, [forum.country]);

  return (
    <aside className={styles.sidebar}>
      <h2>Información del Foro</h2>

      <div className={styles.stat}>
        <span>👤</span>

        <div>
          <strong>{stats.members}</strong>

          <p>Miembros</p>
        </div>
      </div>

      <div className={styles.stat}>
        <span>💬</span>

        <div>
          <strong>{stats.postsCount}</strong>

          <p>Posts totales</p>
        </div>
      </div>

      <div className={styles.stat}>
        <span>🔥</span>

        <div>
          <strong>
            Top {stats.ranking}
          </strong>

          <p>Ranking global</p>
        </div>
      </div>

      <hr />

      <h3>Reglas del Foro</h3>

      <ul>
        <li>Respeta a todos los miembros</li>

        <li>
          No spam ni contenido ofensivo
        </li>

        <li>
          Mantén las discusiones relevantes
        </li>
      </ul>
    </aside>
  );
}