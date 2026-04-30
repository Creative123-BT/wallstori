import styles from "./LogoBlocks.module.css";

type Variant = "nav" | "hero" | "mini";

export default function LogoBlocks({ variant = "nav" }: { variant?: Variant }) {
  return (
    <div className={`${styles.blocks} ${styles[variant]}`}>
      <span className={`${styles.block} ${styles.lime}`} />
      <span className={`${styles.block} ${styles.purple}`} />
      <span className={`${styles.block} ${styles.coral}`} />
      <span className={`${styles.block} ${styles.orange}`} />
    </div>
  );
}
