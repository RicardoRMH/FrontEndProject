import ReunionCard from "./reunionCard";
import styles from "./reunionesList.module.css";

const reuniones = [
    {
        name: "La Cantina del Gol",
        image: "/reunion1.jpg",
        countryA: "Argentina",
        codeA: "AR",
        countryB: "Brasil",
        codeB: "BR",
        date: "2024-06-15",
        time: "19:00",
        address: "Av. Insurgentes Sur 1234, Roma Norte, Ciudad de México",
        people: "18/30",
        percentage: 60,
        confirmedText: "y 15 más confirmados"
    },
    {
        name: "Tapas y Fútbol",
        image: "/reunion2.jpg",
        countryA: "España",
        codeA: "ES",
        countryB: "Francia",
        codeB: "FR",
        date: "2024-06-16",
        time: "17:00",
        address: "Las Ramblas 456, Gótico, Barcelona",
        people: "22/25",
        percentage: 88,
        confirmedText: "y 20 más confirmados"
    },
    {
        name: "El Estadio Bar & Grill",
        image: "/reunion3.jpg",
        countryA: "México",
        codeA: "MX",
        countryB: "Uruguay",
        codeB: "UY",
        date: "2024-06-17",
        time: "20:00",
        address: "Av. Chapultepec 567, Col. Americana, Guadalajara",
        people: "35/40",
        percentage: 88,
        confirmedText: "y 32 más confirmados"
    },
    {
        name: "The Green Pub",
        image: "/reunion4.jpg",
        countryA: "Alemania",
        codeA: "DE",
        countryB: "Inglaterra",
        codeB: "EN",
        date: "2024-06-18",
        time: "18:00",
        address: "Calle Gran Vía 123, Centro, Madrid",
        people: "28/35",
        percentage: 80,
        confirmedText: "y 26 más confirmados"
    },
    {
        name: "Brasas Argentinas",
        image: "/reunion5.jpg",
        countryA: "Argentina",
        codeA: "AR",
        countryB: "Brasil",
        codeB: "BR",
        date: "2024-06-15",
        time: "19:30",
        address: "Av. Corrientes 2345, Palermo, Buenos Aires",
        people: "45/50",
        percentage: 90,
        confirmedText: "y 42 más confirmados"
    },
    {
        name: "Pizzería Azzurra",
        image: "/reunion6.jpg",
        countryA: "Portugal",
        codeA: "PT",
        countryB: "Italia",
        codeB: "IT",
        date: "2024-06-19",
        time: "19:30",
        address: "Calle Morelos 890, Centro, Monterrey",
        people: "16/20",
        percentage: 80,
        confirmedText: "y 14 más confirmados"
    }
];

export default function ReunionesList() {
    return (
        <section className={styles.list}>
            {reuniones.map((reunion) => (
                <ReunionCard
                    key={reunion.name}
                    name={reunion.name}
                    image={reunion.image}
                    countryA={reunion.countryA}
                    codeA={reunion.codeA}
                    countryB={reunion.countryB}
                    codeB={reunion.codeB}
                    date={reunion.date}
                    time={reunion.time}
                    address={reunion.address}
                    people={reunion.people}
                    percentage={reunion.percentage}
                    confirmedText={reunion.confirmedText}
                />
            ))}
        </section>
    );
}