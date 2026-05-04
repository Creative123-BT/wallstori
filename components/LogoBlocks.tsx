import { motion } from "framer-motion";
import styles from "./LogoBlocks.module.css";

type Variant = "nav" | "hero" | "mini";

const blockVariants = {
  hidden: { scale: 0, opacity: 0, rotate: -45 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function LogoBlocks({ variant = "nav" }: { variant?: Variant }) {
  return (
    <div className={`${styles.blocks} ${styles[variant]}`}>
      <motion.span 
        custom={0}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.block} ${styles.lime}`} 
      />
      <motion.span 
        custom={1}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.block} ${styles.purple}`} 
      />
      <motion.span 
        custom={2}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.block} ${styles.coral}`} 
      />
      <motion.span 
        custom={3}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.block} ${styles.orange}`} 
      />
    </div>
  );
}
