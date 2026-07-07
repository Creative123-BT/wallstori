import Image from "next/image";
import styles from "./LogoBlocks.module.css";

type Variant = "nav" | "hero" | "mini";

export default function LogoBlocks({ variant = "nav" }: { variant?: Variant }) {
  return (
    <div className={`${styles.logoContainer} ${styles[variant]}`}>
      <Image
        src="/images/new.png"
        alt="Wallstori Logo"
        width={0}
        height={0}
        className={styles.logoImage}
      />
    </div>
  );
}
