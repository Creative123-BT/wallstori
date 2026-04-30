import LogoBlocks from "./LogoBlocks";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Wireframe grid overlay */}
      <div className={styles.wireframe} aria-hidden="true" />
      <div className={styles.wireframeFade} aria-hidden="true" />

      <div className={styles.content}>
        <LogoBlocks variant="hero" />

        <div className={styles.brandBlock}>
          <span className={styles.brandName}>WALL STORI</span>
          <span className={styles.brandSub}>DEVELOPERS</span>
        </div>

        <div className={styles.divider} />

        <p className={styles.tagline}>
          Pioneering South India&apos;s real estate terrain with vision,
          innovation, and an indelible mark in the housing category.
        </p>

        <div className={styles.actions}>
          <a href="#about" className={styles.btnPrimary}>Discover More</a>
          <a href="#contact" className={styles.btnGhost}>Get In Touch</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
