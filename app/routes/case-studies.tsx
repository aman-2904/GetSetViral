import type { Route } from "./+types/case-studies";
import { Header } from "~/components/header/header";
import styles from "./case-studies.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Case Studies - KrazyFox" },
    {
      name: "description",
      content: "Explore our successful collaborations and the measurable impact we've delivered for our clients.",
    },
  ];
}

const caseStudies = [
  {
    id: "fenty-campaign",
    title: "Fenty Beauty Global Launch",
    description:
      "A comprehensive digital campaign that reached 50M+ users across social platforms, driving unprecedented engagement for the beauty industry.",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    growth: "+250% engagement",
    date: "Q4 2023",
  },
  {
    id: "acko-digital",
    title: "Acko Insurance Digital Transformation",
    description:
      "Revolutionized customer acquisition through targeted content marketing and influencer partnerships, resulting in significant market share growth.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    growth: "+180% conversions",
    date: "Q2 2023",
  },
  {
    id: "lakme-influencer",
    title: "Lakme Influencer Network",
    description:
      "Built and managed a network of 100+ beauty influencers, creating authentic content that resonated with diverse audiences.",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    growth: "+320% reach",
    date: "Q1 2024",
  },
];

export default function CaseStudies() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <h1 className={styles.title}>Case Studies</h1>
        <p className={styles.description}>
          Dive deep into our most successful collaborations. Each case study showcases the strategies, execution, and
          measurable results we've achieved for our partners.
        </p>

        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study) => (
            <article key={study.id} className={styles.caseStudyCard}>
              <img src={study.imageUrl} alt={study.title} className={styles.caseStudyImage} loading="lazy" />
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                <p className={styles.caseStudyDescription}>{study.description}</p>
                <div className={styles.caseStudyMeta}>
                  <span className={styles.caseStudyGrowth}>{study.growth}</span>
                  <span className={styles.caseStudyDate}>{study.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
