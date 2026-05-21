import FeaturedMatch from "./featuredMatch";
import PromoBanner from "./promoBanner";
import MatchFilters from "./matchFilters";
import MatchList from "./matchList";
import PromoSidebar from "./promoSidebar";
import QuickStats from "./quickStats";
import styles from "./partidos.module.css";

export default function Partidos() {
  return (
    <main className={styles.partidos}>
      <FeaturedMatch />

      <PromoBanner />

      <MatchFilters />

      <section className={styles.content}>
        <div className={styles.mainContent}>
          <MatchList />
        </div>

        <aside className={styles.sidebar}>
          <PromoSidebar />
          <QuickStats />
        </aside>
      </section>
    </main>
  );
}