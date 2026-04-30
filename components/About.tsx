import LogoBlocks from "./LogoBlocks";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      {/* Left label column */}
      <div className={styles.labelCol}>
        <h2 className={styles.label}>About</h2>
      </div>

      {/* Centre: dark room image */}
      <div className={styles.imageCol}>
        <div className={styles.imageBg} />
        <div className={styles.imageOverlay} />
        <p className={styles.imageCaption}>
          When it comes to a<br />
          prime piece of land or<br />
          an aspirational home<br />
          who else but us?
        </p>
      </div>

      {/* Right: text */}
      <div className={styles.textCol}>
        <div className={styles.logoLockup}>
          <LogoBlocks variant="mini" />
          <div>
            <span className={styles.brandName}>WALL STORI</span>
            <span className={styles.brandSub}>DEVELOPERS</span>
          </div>
        </div>

        <p className={styles.body}>
          Wall Stori aspires and promises to be a shining pioneer, lead innovator
          and tangible impact driven player in the realty industry. The long term
          goal is to be a shining beacon in the industry and later become an
          undeniable force to reckon in South India&apos;s real estate market.
        </p>

        <p className={styles.body}>
          We aspire to be the go to brand that will help land/homebuyers rely on
          for all their housing needs. We will achieve this with optimal ground
          presence, carefully curated land banks, secure investments and
          intelligently harness the power of leading edge technology to cater to
          micro needs of homebuyers.
        </p>
      </div>
    </section>
  );
}
