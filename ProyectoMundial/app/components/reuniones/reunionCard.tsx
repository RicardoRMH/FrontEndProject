import styles from "./reunionCard.module.css";

type ReunionCardProps = {
    name: string;
    image: string;
    countryA: string;
    codeA: string;
    countryB: string;
    codeB: string;
    date: string;
    time: string;
    address: string;
    people: string;
    percentage: number;
    confirmedText: string;
};

export default function ReunionCard({
    name,
    image,
    countryA,
    codeA,
    countryB,
    codeB,
    date,
    time,
    address,
    people,
    percentage,
    confirmedText
}: ReunionCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageBox}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.info}>
                <h2>{name}</h2>

                <div className={styles.match}>
                    <span>{codeA}</span>
                    <strong>{countryA}</strong>
                    <small>VS</small>
                    <strong>{countryB}</strong>
                    <span>{codeB}</span>
                </div>

                <p className={styles.text}>📅 {date} · {time}</p>
                <p className={styles.text}>📍 {address}</p>

                <div className={styles.capacity}>
                    <div className={styles.capacityText}>
                        <span>Cupo: {people} personas</span>
                        <span>{percentage}%</span>
                    </div>

                    <div className={styles.progress}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>

                <p className={styles.confirmed}>👥 {confirmedText}</p>
            </div>

            <div className={styles.buttons}>
                <button className={styles.joinButton}>ME APUNTO</button>
                <button className={styles.secondaryButton}>Ver quién va</button>
                <button className={styles.shareButton}>⌘ Compartir</button>
            </div>
        </article>
    );
}