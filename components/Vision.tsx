import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <section className={styles.vision} id="vision">
      {/* Oversized script watermark */}
      <div className={styles.watermark} aria-hidden="true">
        Wall Stori
      </div>

      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Wall<br />Stori
          </h2>
        </div>

        <div className={styles.right}>
          <blockquote className={styles.quote}>
            &quot;We aspire to be a thought led pioneer and an alternative challenger
            brand in the Real Estate Terrain of South India. We promise to
            reimagine, innovate, strive hard to cater to discerning progressive
            buyers and leave behind an indelible imprint in the housing category&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
