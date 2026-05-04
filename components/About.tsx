"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoBlocks from "./LogoBlocks";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.fromTo(
        imageRef.current,
        { y: 50 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Fade in text elements
      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.about} id="about" ref={containerRef}>
      {/* Left label column */}
      <div className={styles.labelCol}>
        <h2 className={styles.label + " reveal-text"}>About</h2>
      </div>

      {/* Centre: dark room image */}
      <div className={styles.imageCol}>
        <div className={styles.imageBg} ref={imageRef} />
        <div className={styles.imageOverlay} />
        <p className={styles.imageCaption + " reveal-text"}>
          When it comes to a<br />
          prime piece of land or<br />
          an aspirational home<br />
          who else but us?
        </p>
      </div>

      {/* Right: text */}
      <div className={styles.textCol} ref={textRef}>
        <div className={styles.logoLockup + " reveal-text"}>
          <LogoBlocks variant="mini" />
          <div>
            <span className={styles.brandName}>WALL STORI</span>
            <span className={styles.brandSub}>DEVELOPERS</span>
          </div>
        </div>

        <p className={styles.body + " reveal-text"}>
          Wall Stori aspires and promises to be a shining pioneer, lead innovator
          and tangible impact driven player in the realty industry. The long term
          goal is to be a shining beacon in the industry and later become an
          undeniable force to reckon in South India&apos;s real estate market.
        </p>

        <p className={styles.body + " reveal-text"}>
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
