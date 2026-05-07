import RestaurantCard from "./restaurantCard";
import styles from "./restaurantList.module.css";

const restaurants = [
    {
        name: "La Cantina del Gol",
        image: "/restaurant1.jpg",
        rating: "4.8",
        reviews: "342",
        address: "Av. Insurgentes Sur 1234, Roma Norte",
        foodType: "Mexicana",
        promotion: "2x1 en cervezas durante partidos"
    },
    {
        name: "El Estadio Bar & Grill",
        image: "/restaurant2.jpg",
        rating: "4.6",
        reviews: "289",
        address: "Av. Chapultepec 567, Col. Americana",
        foodType: "Internacional",
        promotion: "Descuento 20% en alimentos"
    },
    {
        name: "Pizzería Azzurra",
        image: "/restaurant3.jpg",
        rating: "4.9",
        reviews: "456",
        address: "Calle Morelos 890, Centro",
        foodType: "Italiana",
        promotion: "Pizza gratis por cada 5 visitas"
    },
    {
        name: "Brasas Argentinas",
        image: "/restaurant4.jpg",
        rating: "4.7",
        reviews: "521",
        address: "Av. Corrientes 2345, Palermo",
        foodType: "Argentina",
        promotion: "Parrillada especial Mundial"
    },
    {
        name: "The Green Pub",
        image: "/restaurant5.jpg",
        rating: "4.5",
        reviews: "398",
        address: "Calle Gran Vía 123, Centro",
        foodType: "Bar",
        promotion: "Happy hour extendido"
    },
    {
        name: "Samba Grill",
        image: "/restaurant6.jpg",
        rating: "4.8",
        reviews: "612",
        address: "Rua Augusta 789, Jardins",
        foodType: "Brasileña",
        promotion: "Rodizio libre en partidos"
    },
    {
        name: "Tapas y Fútbol",
        image: "/restaurant7.jpg",
        rating: "4.6",
        reviews: "445",
        address: "Las Ramblas 456, Gótico",
        foodType: "Española",
        promotion: "Tapas gratis con bebidas"
    },
    {
        name: "Le Bistro du Ballon",
        image: "/restaurant8.jpg",
        rating: "4.7",
        reviews: "378",
        address: "Rue de Rivoli 234, Marais",
        foodType: "Francesa",
        promotion: "Menú especial Mundial"
    },
    {
        name: "Wings & Goals",
        image: "/restaurant9.jpg",
        rating: "4.4",
        reviews: "523",
        address: "Sunset Blvd 567, Hollywood",
        foodType: "Americana",
        promotion: "Alitas ilimitadas"
    }
];

export default function RestaurantList() {
    return (
        <section className={styles.listSection}>
            <p className={styles.count}>Mostrando {restaurants.length} restaurantes</p>

            <div className={styles.grid}>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.name}
                        name={restaurant.name}
                        image={restaurant.image}
                        rating={restaurant.rating}
                        reviews={restaurant.reviews}
                        address={restaurant.address}
                        foodType={restaurant.foodType}
                        promotion={restaurant.promotion}
                    />
                ))}
            </div>
        </section>
    );
}