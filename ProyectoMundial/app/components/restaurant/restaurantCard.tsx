import styles from "./restaurantCard.module.css";

type RestaurantCardProps = {
    name: string;
    image: string;
    rating: string;
    reviews: number;
    address: string;
    foodType: string;
    promotion: string;
};

export default function RestaurantCard({
    name,
    image,
    rating,
    reviews,
    address,
    foodType,
    promotion
}: RestaurantCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} />
                <span>Promoción</span>
            </div>

            <div className={styles.info}>
                <h3>{name}</h3>

                <p className={styles.rating}>

                    {"⭐".repeat(Number(rating))}

                    {" "}

                    {rating}

                    {" "}

                    ({reviews} reseñas)
 
                </p>

                <p className={styles.text}>📍 {address}</p>
                <p className={styles.text}>🍴 {foodType}</p>

                <div className={styles.promotion}>
                    🎁 {promotion}
                </div>

                <button className={styles.button}>
                    Ver detalles
                </button>
            </div>
        </article>
    );
}