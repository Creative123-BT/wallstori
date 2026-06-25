"use client";
import Image from "next/image";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section id="partners" className={styles.wrapper}>
      {/* Block 1: KCK Architects */}
      <div className={styles.splitBlock}>
        <div className={styles.splitLeft}>
          <Image src="/images/strategic.png" fill alt="Strategic Partner" className={styles.coverImg} />
        </div>
        <div className={styles.splitRight}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>STRATEGIC</h2>
            <div className={styles.line} />
            <h2 className={styles.title}>PARTNERS</h2>
            <div className={styles.line} />
          </div>

          <div className={styles.partnerInfo}>
            <p className={styles.roleTitle}>ARCHITECT PARTNER :</p>
            <h3 className={styles.firmName}>M/s KCK ARCHITECTS</h3>
            <div className={styles.personBlock}>
              <p className={styles.personRole}>Architect:</p>
              <p className={styles.personName}>Mr. Chenthil Kumar</p>
              <div className={styles.desc}>
                <p>This effervescent firm is led by Mr. Chenthil Kumar, former associate of NVA Architects</p>
                <p>His architectural experience spans an impressive 38 years</p>
                <p>His firm has a track record of having worked with Chennai&apos;s leading developers.</p>
              </div>
            </div>

            <div className={styles.personBlock}>
              <p className={styles.personRole}>Architect:</p>
              <p className={styles.personName}>C. Kaviya</p>
              <div className={styles.desc}>
                <p>Adding to Mr Chenthil&apos;s legacy, his daughter has joined the firm</p>
                <p>She has a B.Arch degree and a Master&apos;s in Architecture from the UK</p>
                <p>She now collaborates with several emerging developers of Chennai.</p>
              </div>
            </div>

            <a href="https://www.kckarchitects.in" target="_blank" rel="noreferrer" className={styles.linkBtn}>www.kckarchitects.in</a>
          </div>
        </div>
      </div>

      {/* Block 2: Design Transcend & Srisan Associates */}
      <div className={styles.fullBlock}>
        <div className={styles.wireframeBg}>
          <Image src="/images/pertners.png" fill alt="Wireframe" className={styles.containImg} />
        </div>

        <div className={styles.fullTop}>
          <div className={styles.titleWrapperAlt}>
            <h2 className={styles.titleAlt}>STRATEGIC</h2>
            <div className={styles.lineAlt} />
            <h2 className={styles.titleAlt}>PARTNERS</h2>
            <div className={styles.lineAlt} />
          </div>
        </div>

        <div className={styles.fullColumns}>
          <div className={styles.columnLeft}>
            <p className={styles.roleTitleAlt}>ARCHITECTS :</p>
            <h3 className={styles.firmNameAlt}>DESIGN TRANSCEND</h3>

            <div className={styles.personBlockAlt}>
              <p className={styles.personRoleAlt}>Co-Founder and CEO</p>
              <p className={styles.personNameAlt}>Amit Rastogi</p>
            </div>
            <div className={styles.personBlockAlt}>
              <p className={styles.personRoleAlt}>Co-Founder and Director-Design</p>
              <p className={styles.personNameAlt}>Vamsi Varma K</p>
            </div>

            <div className={styles.descAlt}>
              <p>A home&apos;s personality and flair rests on a striking design vision and intent. We are privileged to associate with the frontrunners in this space. Their pan Indian body of work and impressive line-up of completed projects are ample testimony to their capabilities.</p>
            </div>

            <a href="https://www.designtranscend.com" target="_blank" rel="noreferrer" className={styles.linkBtnAlt}>www.designtranscend.com</a>
          </div>

          <div className={styles.columnRight}>
            <p className={styles.roleTitleAlt}>LEGAL :</p>
            <h3 className={styles.firmNameAlt}>M/s SRISAN ASSOCIATES</h3>

            <div className={styles.personBlockAlt}>
              <p className={styles.personRoleAlt}>Headed by Legal Advisor</p>
              <p className={styles.personNameAlt}>Mr. N. Srinivasan</p>
            </div>
            <div className={styles.personBlockAlt}>
              <p className={styles.personRoleAlt}>Ably supported by his two sons</p>
              <p className={styles.personNameAlt}>Mr. N. S. Balachandar and Mr. S. K. Rahul Vivek</p>
            </div>

            <div className={styles.descAlt}>
              <p>A four decade specialist in real estate documentation</p>
              <p>Expert in matters related to immovable property, commercial agreements and structuring joint venture real estate transactions.</p>
            </div>

            <div className={styles.clientele}>
              <p>Clientele include :</p>
              <p>Chaitanya, Vishranthi Homes, SIS, Navin&apos;s, Swathi Builders, Binny Limited.</p>
            </div>

            <a href="https://www.srisanassociates.com" target="_blank" rel="noreferrer" className={styles.linkBtnAlt}>www.srisanassociates.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}