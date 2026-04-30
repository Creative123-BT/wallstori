import styles from "./HomeBuying.module.css";

export default function HomeBuying() {
  return (
    <section className={styles.section} id="homebuying">
      <div className={styles.wireframe} aria-hidden="true" />

      <div className={styles.inner}>
        <h2 className={styles.title}>
          Shaping The Home Buying Needs of The New-Gen Indian
        </h2>

        <p className={styles.desc}>
          We are poised to delight a new age homebuyer who seeks significant
          added value. Right from identifying the right land banks, to getting
          approvals and sanctions, to carefully planning and executing the
          residential/housing, to interacting with our well-oiled, transparent,
          customer friendly teams, we ensure silken smooth tractions.
        </p>
      </div>
    </section>
  );
}
