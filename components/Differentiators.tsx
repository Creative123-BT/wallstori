import styles from "./Differentiators.module.css";

const ITEMS = [
  { num: "1",  name: "Far Sighted\nLeadership" },
  { num: "2",  name: "Strong Customer\nSupport Teams" },
  { num: "3",  name: "Local Market\nInsights" },
  { num: "4",  name: "Need Gap\nAnalysis" },
  { num: "5",  name: "Buyer Sentiment\nIntelligence" },
  { num: "6",  name: "Value Based\nSegmentation" },
  { num: "7",  name: "Competitive\nPricing" },
  { num: "8",  name: "Financial\nOutlays" },
  { num: "9",  name: "Category Pain\nPoint Solutions" },
  { num: "10", name: "Technology\nNous" },
  { num: "11", name: "Legal Clearance\nNorms" },
  { num: "12", name: "Growth Potential\nPatterns" },
  { num: "13", name: "Investment\nPay-off Potential" },
];

export default function Differentiators() {
  return (
    <section className={styles.section} id="differentiators">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Go-To Brand With<br />Key Differentiators
        </h2>
        <div className={styles.headerRight}>
          <p className={styles.desc}>
            Homebuyers can rely on our entire gamut of systematic, wide ranging
            services. Right from our core, tested team of professionals, with
            decades of industry exposure, real-time market intelligence and
            property market information nuggets.
          </p>
          <p className={styles.desc} style={{ marginTop: "16px" }}>
            We are armed with an enviable track record for delivering the impossible.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <div key={item.num} className={styles.item}>
            <span className={styles.num}>{item.num}</span>
            <span className={styles.name}>
              {item.name.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < item.name.split("\n").length - 1 && <br />}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
