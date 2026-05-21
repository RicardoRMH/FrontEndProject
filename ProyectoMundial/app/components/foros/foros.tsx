"use client";

import { useState } from "react";
import ForumHome from "./forumHome";
import ForumDetail from "./forumDetail";

export type ForumPost = {
  id: number;
  user: string;
  avatar: string;
  date: string;
  votes: number;
  title: string;
  content: string;
  comments: number;
  category: string;
  pinned?: boolean;
};

export type ForumCountry = {
  id: number;
  country: string;
  code: string;
  postsCount: number;
  members: number;
  trending?: boolean;
  ranking?: string;
  posts: ForumPost[];
};

const initialForums: ForumCountry[] = [
  {
    id: 1,
    country: "México",
    code: "MX",
    postsCount: 1247,
    members: 3117,
    trending: true,
    ranking: "Top 5",
    posts: [
      {
        id: 1,
        user: "TacticoMX",
        avatar: "🇲🇽",
        date: "11 jun, 09:15",
        votes: 187,
        title: "Análisis táctico: México vs Uruguay",
        content:
          "Posible formación 4-3-3 con Lozano y Vega en las bandas. ¿Qué opinan?",
        comments: 56,
        category: "Previas",
        pinned: true,
      },
      {
        id: 2,
        user: "AztecaFan",
        avatar: "⚽",
        date: "12 jun, 18:30",
        votes: 143,
        title: "¿Quién debería ser titular en el ataque?",
        content:
          "Creo que México necesita más velocidad por las bandas para abrir espacios.",
        comments: 41,
        category: "Alineaciones",
      },
      {
        id: 3,
        user: "VerdePasión",
        avatar: "🔥",
        date: "13 jun, 20:10",
        votes: 96,
        title: "Reunión en CDMX para ver el partido",
        content: "Estamos organizando una reunión cerca del Ángel. ¿Quién se apunta?",
        comments: 27,
        category: "Reuniones",
      },
    ],
  },
  {
    id: 2,
    country: "Argentina",
    code: "AR",
    postsCount: 2156,
    members: 5390,
    trending: true,
    ranking: "Top 5",
    posts: [
      {
        id: 1,
        user: "LeoFan10",
        avatar: "🇦🇷",
        date: "10 jun, 14:30",
        votes: 234,
        title: "¿Messi jugará los 90 minutos contra Brasil?",
        content:
          "Considerando su edad y el ritmo del partido, ¿creen que Scaloni lo deje toda la cancha?",
        comments: 89,
        category: "Debate del partido",
      },
      {
        id: 2,
        user: "Albiceleste",
        avatar: "⭐",
        date: "11 jun, 11:20",
        votes: 201,
        title: "La clave será el mediocampo",
        content: "Si Argentina domina la mitad de cancha, Brasil va a sufrir mucho.",
        comments: 64,
        category: "Alineaciones",
      },
      {
        id: 3,
        user: "MateGol",
        avatar: "🧉",
        date: "12 jun, 16:45",
        votes: 155,
        title: "¿Dónde ver el partido en Buenos Aires?",
        content: "Busco un buen lugar con ambiente para ver Argentina vs Brasil.",
        comments: 38,
        category: "Reuniones",
      },
    ],
  },
  {
    id: 3,
    country: "Brasil",
    code: "BR",
    postsCount: 3421,
    members: 8552,
    trending: true,
    ranking: "Top 5",
    posts: [
      {
        id: 1,
        user: "MemeBrasil",
        avatar: "🇧🇷",
        date: "12 jun, 16:45",
        votes: 512,
        title: "Cuando Neymar hace una falta y se tira él 😂",
        content: "No puede faltar el clásico meme de Neymar rodando.",
        comments: 143,
        category: "Memes",
      },
      {
        id: 2,
        user: "Canarinha",
        avatar: "🟡",
        date: "13 jun, 10:20",
        votes: 331,
        title: "Brasil tiene que presionar desde arriba",
        content:
          "Si dejamos salir jugando a Argentina, nos pueden complicar mucho.",
        comments: 87,
        category: "Debate del partido",
      },
      {
        id: 3,
        user: "SambaGol",
        avatar: "🥁",
        date: "14 jun, 19:00",
        votes: 212,
        title: "¿Vinicius debe ser el jugador clave?",
        content: "Para mí Vini puede romper el partido con espacios.",
        comments: 52,
        category: "Alineaciones",
        pinned: true,
      },
    ],
  },
  {
    id: 4,
    country: "España",
    code: "ES",
    postsCount: 1876,
    members: 4690,
    posts: [
      {
        id: 1,
        user: "MadridRoja",
        avatar: "🇪🇸",
        date: "14 jun, 08:00",
        votes: 156,
        title: "Reunión en Madrid para ver España vs Francia",
        content: "Nos juntamos en Tapas y Fútbol, Las Ramblas. ¡Únete!",
        comments: 34,
        category: "Reuniones",
      },
      {
        id: 2,
        user: "LaRoja",
        avatar: "🔴",
        date: "13 jun, 12:15",
        votes: 144,
        title: "España necesita jugar con paciencia",
        content:
          "Francia es fuerte en transición, hay que cuidar cada pérdida.",
        comments: 44,
        category: "Debate del partido",
      },
    ],
  },
  {
    id: 5,
    country: "Francia",
    code: "FR",
    postsCount: 1654,
    members: 4135,
    trending: true,
    posts: [
      {
        id: 1,
        user: "AllesFrance",
        avatar: "🇫🇷",
        date: "13 jun, 11:20",
        votes: 298,
        title: "Mbappé confirmado como titular",
        content: "Según L'Équipe, Mbappé será titular junto a Griezmann.",
        comments: 72,
        category: "Alineaciones",
        pinned: true,
      },
      {
        id: 2,
        user: "Parisien",
        avatar: "🗼",
        date: "13 jun, 17:20",
        votes: 122,
        title: "¿Francia debe atacar o esperar?",
        content:
          "España controla mucho la pelota, pero Francia puede hacer daño al contragolpe.",
        comments: 31,
        category: "Debate del partido",
      },
    ],
  },
  {
    id: 6,
    country: "Alemania",
    code: "DE",
    postsCount: 1432,
    members: 3580,
    posts: [
      {
        id: 1,
        user: "MannschaftFan",
        avatar: "🇩🇪",
        date: "13 jun, 09:40",
        votes: 176,
        title: "Alemania vs Inglaterra: duelo físico",
        content:
          "Este partido se puede definir por intensidad y pelota parada.",
        comments: 46,
        category: "Previas",
      },
    ],
  },
  {
    id: 7,
    country: "Inglaterra",
    code: "🏳️",
    postsCount: 1298,
    members: 3245,
    posts: [
      {
        id: 1,
        user: "ThreeLions",
        avatar: "🏳️",
        date: "12 jun, 13:00",
        votes: 145,
        title: "¿Kane debe jugar solo arriba?",
        content:
          "Me gustaría verlo acompañado para presionar mejor a Alemania.",
        comments: 39,
        category: "Alineaciones",
      },
    ],
  },
  {
    id: 8,
    country: "Portugal",
    code: "PT",
    postsCount: 987,
    members: 2467,
    posts: [
      {
        id: 1,
        user: "LusoGol",
        avatar: "🇵🇹",
        date: "15 jun, 10:10",
        votes: 111,
        title: "Portugal vs Italia: partido cerrado",
        content: "Creo que será un partido de pocos goles.",
        comments: 22,
        category: "Previas",
      },
    ],
  },
  {
    id: 9,
    country: "Uruguay",
    code: "UY",
    postsCount: 876,
    members: 2190,
    posts: [
      {
        id: 1,
        user: "Charrúa",
        avatar: "🇺🇾",
        date: "15 jun, 12:10",
        votes: 98,
        title: "Uruguay puede sorprender a México",
        content: "La garra y presión alta pueden ser la clave.",
        comments: 25,
        category: "Debate del partido",
      },
    ],
  },
  {
    id: 10,
    country: "Colombia",
    code: "CO",
    postsCount: 1123,
    members: 2807,
    posts: [
      {
        id: 1,
        user: "CaféGol",
        avatar: "🇨🇴",
        date: "15 jun, 18:15",
        votes: 119,
        title: "Colombia llega con buen ritmo",
        content: "El equipo se ve sólido y con confianza.",
        comments: 30,
        category: "Previas",
      },
    ],
  },
  {
    id: 11,
    country: "Italia",
    code: "IT",
    postsCount: 1045,
    members: 2612,
    posts: [
      {
        id: 1,
        user: "AzzurriFan",
        avatar: "🇮🇹",
        date: "16 jun, 09:45",
        votes: 103,
        title: "Italia necesita defender con orden",
        content:
          "Portugal tiene mucha calidad arriba, no podemos regalar espacios.",
        comments: 21,
        category: "Alineaciones",
      },
    ],
  },
  {
    id: 12,
    country: "Países Bajos",
    code: "NL",
    postsCount: 892,
    members: 2230,
    posts: [
      {
        id: 1,
        user: "OrangeFan",
        avatar: "🇳🇱",
        date: "16 jun, 15:35",
        votes: 88,
        title: "Países Bajos puede dominar por bandas",
        content: "La amplitud será clave para generar peligro.",
        comments: 19,
        category: "Previas",
      },
    ],
  },
];

export default function Foros() {
  const [forums, setForums] = useState<ForumCountry[]>(initialForums);
  const [selectedForumId, setSelectedForumId] = useState<number | null>(null);

  const selectedForum = forums.find((forum) => forum.id === selectedForumId);

  const handleAddPost = (forumId: number, post: ForumPost) => {
    setForums((currentForums) =>
      currentForums.map((forum) =>
        forum.id === forumId
          ? {
              ...forum,
              postsCount: forum.postsCount + 1,
              posts: [post, ...forum.posts],
            }
          : forum
      )
    );
  };

  if (selectedForum) {
    return (
      <ForumDetail
        forum={selectedForum}
        onBack={() => setSelectedForumId(null)}
        onAddPost={handleAddPost}
      />
    );
  }

  return (
    <ForumHome
      forums={forums}
      onSelectForum={(forumId) => setSelectedForumId(forumId)}
    />
  );
}