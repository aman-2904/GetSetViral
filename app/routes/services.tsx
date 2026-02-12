import type { Route } from "./+types/services";
import { Header } from "~/components/header/header";
import { Palette, Target, Zap, Users } from "lucide-react";
import styles from "./services.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - KrazyFox" },
    {
      name: "description",
      content: "Discover the comprehensive services we offer to elevate your brand's digital presence.",
    },
  ];
}

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Crafting compelling brand narratives that resonate with your target audience and drive engagement.",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Data-driven campaigns across multiple channels to maximize reach and conversion rates.",
  },
  {
    icon: Zap,
    title: "Content Creation",
    description: "High-quality, engaging content that tells your story and connects with your audience.",
  },
  {
    icon: Users,
    title: "Influencer Partnerships",
    description: "Strategic collaborations with influencers to amplify your brand message authentically.",
  },
];

export default function Services() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
          We offer a comprehensive suite of services designed to help your brand thrive in the digital landscape. From
          strategy to execution, we're your partner in success.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={styles.serviceCard}>
                <Icon className={styles.serviceIcon} />
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
