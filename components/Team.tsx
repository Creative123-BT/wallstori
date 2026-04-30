import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section} id="team">
      {/* Left */}
      <div className={styles.left}>
        <h2 className={styles.headline}>
          A crack core team mix that draws rich experience from realty and other
          relevant diverse verticals
        </h2>

        <div className={styles.member}>
          <p className={styles.role}>Core Team · Founder &amp; MD</p>
          <h3 className={styles.name}>MR. SUBRAMANI</h3>
          <p className={styles.bio}>
            Armed with an MBA, the founder is a first generation Entrepreneur
            with two decades of on-ground experience in Real Estate Sales &amp;
            Marketing.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <p className={styles.trackLabel}>Track Record Spans Illustrious Brands</p>

        <div className={styles.company}>
          <p className={styles.companyName}>Baashyaam Constructions</p>
          <p className={styles.years}>2019 – 2024</p>
          <p className={styles.projects}>
            The Plutus Residence, Cloud Graze, Crown Residences, The Peak
          </p>
        </div>

        <div className={styles.company}>
          <p className={styles.companyName}>Bhaggyam Constructions</p>
          <p className={styles.years}>Previous Tenure</p>
          <p className={styles.projects}>Vriddhi, Prakriti, Komala</p>
        </div>
      </div>
    </section>
  );
}
