"use client";

import { useEffect, useState } from "react";

import RestaurantCard from "./restaurantCard";

import styles from "./restaurantList.module.css";

import { supabase } from "@/app/lib/supabase";

type Filters = {
    ciudad: string;
    tiposComida: string[];
    rating: number;
    promociones: boolean;
};

type RestaurantListProps = {
    filters: Filters;
};

export default function RestaurantList({
    filters
}: RestaurantListProps) {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchRestaurants() {

        setLoading(true);

        let query = supabase
            .from("restaurante")
            .select("*");

        /*
            FILTRO CIUDAD
        */
        if (filters.ciudad !== "") {

            query = query.ilike(
                "ciudad",
                `%${filters.ciudad}%`
            );
        }

        /*
            FILTRO TIPO COMIDA
        */
        if (filters.tiposComida.length > 0) {

            query = query.in(
                "tipo_comida",
                filters.tiposComida
            );
        }

        /*
            FILTRO RATING
        */
        if (filters.rating > 0) {

            query = query.gte(
                "rating",
                filters.rating
            );
        }

        /*
            FILTRO PROMOCIONES
        */
        if (filters.promociones) {

            query = query.eq(
                "tiene_promocion",
                true
            );
        }

        const { data, error } = await query;

        if (error) {
            console.log(error);
            return;
        }

        setRestaurants(data || []);
        setLoading(false);
    }

    useEffect(() => {
        fetchRestaurants();
    }, [filters]);

    if (loading) {
        return <p>Cargando restaurantes...</p>;
    }




return (

    <section className={styles.listSection}>

        {
            restaurants.length === 0
                ? (

                    <div className={styles.emptyState}>

                        <h2>
                            No se encontraron restaurantes
                        </h2>

                        <p>
                            Intenta cambiar los filtros de búsqueda
                        </p>

                    </div>

                )
                : (

                    <div className={styles.grid}>

                        {
                            restaurants.map((restaurant) => (

                                <RestaurantCard
                                    key={restaurant.id_restaurante}

                                    name={restaurant.nombre}

                                    image={"/restaurant1.jpg"}

                                    rating={
                                        restaurant.rating?.toString() || "0"
                                    }

                                    reviews={restaurant.numero_resenas}

                                    address={restaurant.direccion}

                                    foodType={restaurant.tipo_comida}

                                    promotion={restaurant.descripcion}
                                />

                            ))
                        }

                    </div>

                )
        }

    </section>

);
}