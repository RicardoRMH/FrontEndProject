import styles from "./profileTabs.module.css";

type ProfileTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  {
    name: "Actividad",
    icon: "⏱️",
  },
  {
    name: "Pronósticos",
    icon: "📊",
  },
  {
    name: "Favoritos",
    icon: "♡",
  },
  {
    name: "Reuniones",
    icon: "📍",
  },
];

export default function ProfileTabs({
  activeTab,
  setActiveTab,
}: ProfileTabsProps) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={activeTab === tab.name ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab(tab.name)}
        >
          <span>{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
}