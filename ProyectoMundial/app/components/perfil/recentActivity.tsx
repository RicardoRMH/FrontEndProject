import styles from "./recentActivity.module.css";

type RecentActivityProps = {
  activeTab: string;
};

const activityItems = [
  {
    icon: "💬",
    label: "Creaste un post",
    title: "Análisis táctico: México vs Uruguay",
    detail: "↑ 187 votos",
    date: "2024-06-11",
  },
  {
    icon: "📊",
    label: "Hiciste un pronóstico",
    title: "Argentina vs Brasil",
    detail: "Argentina 2-1",
    date: "2024-06-10",
  },
  {
    icon: "📍",
    label: "Te uniste a una reunión",
    title: "La Cantina del Gol",
    detail: "Argentina vs Brasil",
    date: "2024-06-15",
  },
];

const predictionItems = [
  {
    icon: "✅",
    label: "Pronóstico acertado",
    title: "México vs Uruguay",
    detail: "México 2-0",
    date: "2024-06-17",
  },
  {
    icon: "📊",
    label: "Pronóstico enviado",
    title: "España vs Francia",
    detail: "Empate 1-1",
    date: "2024-06-16",
  },
];

const favoriteItems = [
  {
    icon: "⭐",
    label: "Equipo favorito",
    title: "México",
    detail: "Selección más seguida por ti",
    date: "Activo",
  },
  {
    icon: "🍴",
    label: "Restaurante guardado",
    title: "La Cantina del Gol",
    detail: "2x1 en cervezas durante partidos",
    date: "Guardado",
  },
];

const reunionItems = [
  {
    icon: "📍",
    label: "Reunión próxima",
    title: "La Cantina del Gol",
    detail: "Argentina vs Brasil",
    date: "2024-06-15",
  },
  {
    icon: "👥",
    label: "Reunión asistida",
    title: "Tapas y Fútbol",
    detail: "España vs Francia",
    date: "2024-06-16",
  },
];

export default function RecentActivity({ activeTab }: RecentActivityProps) {
  const getItems = () => {
    if (activeTab === "Pronósticos") return predictionItems;
    if (activeTab === "Favoritos") return favoriteItems;
    if (activeTab === "Reuniones") return reunionItems;

    return activityItems;
  };

  const getTitle = () => {
    if (activeTab === "Pronósticos") return "Mis Pronósticos";
    if (activeTab === "Favoritos") return "Mis Favoritos";
    if (activeTab === "Reuniones") return "Mis Reuniones";

    return "Actividad Reciente";
  };

  const items = getItems();

  return (
    <section className={styles.activity}>
      <h2>{getTitle()}</h2>

      <div className={styles.list}>
        {items.map((item) => (
          <article className={styles.item} key={`${item.title}-${item.date}`}>
            <div className={styles.icon}>{item.icon}</div>

            <div>
              <p className={styles.label}>{item.label}</p>
              <h3>{item.title}</h3>
              <p className={styles.detail}>{item.detail}</p>
              <span>{item.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}