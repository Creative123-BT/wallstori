import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <h2 className={styles.headline}>
            A crack core team mix that<br />
            draws rich experience from realty and<br />
            other relevant diverse verticals
          </h2>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imageContainer}>
            <Image src="/images/core-team.png" alt="Core Team" fill className={styles.coreTeamImage} />
          </div>
          <p className={styles.trackLabel}>
            TRACK RECORD SPANS<br />ILLUSTRIOUS BRANDS
          </p>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}></div>
        <div className={styles.bottomMiddle}>
          <div className={styles.member}>
            <p className={styles.role}>CORE TEAM<br />FOUNDER &amp; MD :</p>
            <h3 className={styles.name}>MR. SUBRAMANI</h3>
            <p className={styles.bio}>
              Armed with an MBA, the founder is a<br />
              first generation Entrepreneur with<br />
              two decades of on-ground<br />
              experience in Real Estate Sales &amp;<br />
              Marketing.
            </p>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.company}>
            <p className={styles.companyName}>Baashyaam Constructions</p>
            <p className={styles.years}>2019 – 2024</p>
            <p className={styles.projects}>
              (The Plutus Residence, Cloud Graze,<br />Crown Residences, The Peak)
            </p>
          </div>

          <div className={styles.company}>
            <p className={styles.companyName}>Bhaggyam Constructions</p>
            <p className={styles.projects}>(Vriddhi, Prakriti, Komala)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
