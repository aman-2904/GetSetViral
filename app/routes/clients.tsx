import type { Route } from "./+types/clients";
import { Header } from "~/components/header/header";
import styles from "./clients.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Clients - KrazyFox" },
    {
      name: "description",
      content:
        "Meet the innovative brands and companies we've partnered with to create exceptional digital experiences.",
    },
  ];
}

const clients = [
  {
    name: "Saffola",
    industry: "Food & Wellness",
    logo: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&q=80",
  },
  {
    name: "Paytm",
    industry: "Fintech & Payments",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&q=80",
  },
  {
    name: "Acko Insurance",
    industry: "Insurance & Fintech",
    logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80",
  },
  {
    name: "Mahindra Paybima",
    industry: "Insurance",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80",
  },
  {
    name: "Health",
    industry: "Healthcare & Wellness",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&q=80",
  },
  {
    name: "Ozivia",
    industry: "Lifestyle & Wellness",
    logo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80",
  },
  {
    name: "MuscleBlaze",
    industry: "Fitness & Nutrition",
    logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&q=80",
  },
  {
    name: "Maggie",
    industry: "Food & Beverages",
    logo: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&q=80",
  },
  {
    name: "Jio",
    industry: "Telecommunications",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
  },
  {
    name: "Zee Entertainment",
    industry: "Media & Entertainment",
    logo: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=200&q=80",
  },
  {
    name: "Bajaj",
    industry: "Financial Services",
    logo: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=200&q=80",
  },
  {
    name: "Tata Motors",
    industry: "Automotive",
    logo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&q=80",
  },
];

const testimonials = [
  {
    quote:
      "KrazyFox transformed our digital presence completely. Their strategic approach and creative execution exceeded all our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director, Fenty Beauty",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Working with KrazyFox was a game-changer for our brand. They understood our vision and delivered results that spoke for themselves.",
    author: "Raj Patel",
    role: "CEO, Acko Insurance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export default function Clients() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <h1 className={styles.title}>Our Clients</h1>
        <p className={styles.description}>
          We're proud to partner with industry-leading brands across diverse sectors. Each collaboration is a testament
          to our commitment to excellence and innovation.
        </p>

        <div className={styles.clientsGrid}>
          {clients.map((client) => (
            <div key={client.name} className={styles.clientCard}>
              <img src={client.logo} alt={client.name} className={styles.clientLogo} loading="lazy" />
              <h2 className={styles.clientName}>{client.name}</h2>
              <p className={styles.clientIndustry}>{client.industry}</p>
            </div>
          ))}
        </div>

        <section className={styles.testimonialSection}>
          <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <img src={testimonial.avatar} alt={testimonial.author} className={styles.authorAvatar} loading="lazy" />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.author}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
