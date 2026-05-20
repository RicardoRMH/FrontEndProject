import HeroHome from "./heroHome";
import QuickAccess from "./quickAccess";
import UpcomingMatches from "./upcomingMatches";
import HomeForums from "./homeForums";
import HomeCta from "./homeCta";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <HeroHome />
      <QuickAccess />
      <UpcomingMatches />
      <HomeForums />
      <HomeCta />
    </main>
  );
}