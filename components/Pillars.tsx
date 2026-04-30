import styles from "./Pillars.module.css";

const PILLARS = [
  {
    id: "transparency",
    title: "Transparency",
    body: `"Transparency" is the catchword that we adhere to in every sphere of our operation and home-buying process`,
    color: "purple",
  },
  {
    id: "professional",
    title: "Professional Service",
    body: "Our empowered knowledge led staff strive hard to provide an unrivalled world class customer interaction experience",
    color: "coral",
  },
  {
    id: "quality",
    title: "Quality",
    body: "Our quality obsession is unmatched with a near zero tolerance policy. Every move of ours is aimed at improving the value proposition",
    color: "lime",
  },
  {
    id: "delivery",
    title: "On Time Delivery",
    body: "We ensure no client of ours ever experiences any breach of deadline promises",
    color: "orange",
  },
];

export default function Pillars() {
  return (
    <section className={styles.section} id="pillars">
      {/* Left intro */}
      <div className={styles.intro}>
        <span className={styles.tag}>Our Foundation</span>
        <h2 className={styles.title}>
          Our <span className={styles.numCircle}>4</span> Concrete<br />
          Pillars That<br />Delight Homebuyers
        </h2>
        <p className={styles.sub}>
          We diligently concentrate on the most sought after missing ingredients
          in the realty market
        </p>
      </div>

      {/* Right 2×2 grid */}
      <div className={styles.grid}>
        {PILLARS.map((p) => (
          <div key={p.id} className={`${styles.card} ${styles[p.color]}`}>
            <div className={styles.divider} />
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
