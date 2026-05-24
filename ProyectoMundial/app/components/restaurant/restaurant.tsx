"use client";

import { useState } from "react";

import Filters from "./filters";
import RestaurantList from "./restaurantList";

import styles from "./restaurant.module.css";

export default function Restaurant() {

    const [filters, setFilters] = useState({
        ciudad: "",
        tiposComida: [] as string[],
        rating: 0,
        promociones: false
    });

    return (
        <main className={styles.restaurant}>

            <section className={styles.hero}>
                <h1>Restaurantes Aliados</h1>

                <p>
                    Descubre lugares con promociones especiales para ver los partidos
                </p>
            </section>

            <section className={styles.content}>

                <Filters onApplyFilters={setFilters} />

                <RestaurantList filters={filters} />

            </section>

        </main>
    );
}