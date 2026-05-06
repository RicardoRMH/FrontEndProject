import React from "react";
import styles from "./restaurants.module.css";
import Filters from "./filters";
import Restaurant from "./restaurantList";

export default function Page() {
  return (
    <>
<section className={styles.hero}>
  <div>
    <h1>Explora restaurantes</h1>
    <p>Encuentra los mejores lugares</p>
  </div>
</section>

<main className={styles.layout}>
  <aside className={styles.filters}>
    <Filters />
  </aside>

  <section className={styles.restaurantContainer}>
    <Restaurant />
  </section>
</main>
  
  </>
  );
}