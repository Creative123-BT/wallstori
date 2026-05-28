"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Partners.module.css";

const PARTNERS = [
  {
    type: "Architect Partner",
    firm: "M/s KCK Architects",
    people: [
      { role: "Architect", name: "Mr. Chenthil Kumar" },
      { role: "Architect", name: "C. Kaviya" },
    ],
    desc: "Led by Mr. Chenthil Kumar, former associate of NVA Architects. His architectural experience spans an impressive 38 years with a track record of working with Chennai's leading developers. His daughter C. Kaviya, holding a B.Arch and a Master's in Architecture from the UK, collaborates with several emerging developers of Chennai.",
    url: "www.kckarchitects.in",
    href: "https://www.kckarchitects.in",
  },
  {
    type: "Architects",
    firm: "Design Transcend",
    people: [
      { role: "Co-Founder and CEO",            name: "Amit Rastogi" },
      { role: "Co-Founder and Director-Design", name: "Vamsi Varma K" },
    ],
    desc: "A home's personality and flair rests on a striking design vision and intent. We are privileged to associate with the frontrunners in this space. Their pan Indian body of work and impressive line-up of completed projects are ample testimony to their capabilities.",
    url: "www.designtranscend.com",
    href: "https://www.designtranscend.com",
  },
  {
    type: "Legal",
    firm: "M/s Srisan Associates",
    people: [
      { role: "Headed by Legal Advisor", name: "Mr. N. Srinivasan" },
      { role: "Ably supported by",       name: "Mr. N. S. Balachandar & Mr. S. K. Rahul Vivek" },
    ],
    desc: "A four decade specialist in real estate documentation. Expert in matters related to immovable property, commercial agreements and structuring joint venture real estate transactions. Clientele include Chaitanya, Vishranthi Homes, SIS, Navin's, Swathi Builders, Binny Limited.",
    url: "www.srisanassociates.com",
    href: "https://www.srisanassociates.com",
  },
];

// Variants for card entrance animation
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Partners() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section className={styles.section} id="partners" ref={sectionRef}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Strategic<br />Partners
      </motion.h2>

      <div className={styles.grid}>
        {PARTNERS.map((p, idx) => (
          <motion.div
            key={p.firm}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={idx}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Decorative dot pattern (unique card element) */}
            <div className={styles.cardDecor} aria-hidden="true" />

            <span className={styles.type}>{p.type}</span>
            <h3 className={styles.firm}>{p.firm}</h3>

            {p.people.map((person) => (
              <div key={person.name} className={styles.person}>
                <p className={styles.personRole}>{person.role}</p>
                <p className={styles.personName}>{person.name}</p>
              </div>
            ))}

            <p className={styles.desc}>{p.desc}</p>

            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.url}
            >
              {p.url}
            </a>

            {/* Animated shine overlay (unique hover effect) */}
            <div className={styles.shine} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}