import { useState, useEffect, useRef } from "react";
import { Form, useActionData, useSubmit, Link } from "react-router";
import type { Route } from "./+types/contact";
import { Header } from "~/components/header/header";
import classNames from "classnames";
import styles from "./contact.module.css";
import { createContactSubmission, type BrandSubmission, type CreatorSubmission } from "~/services/contact.server";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import _1 from "/1.png";
import _9 from "/9.png";
import _3 from "/3.png";
import FooterLogo from "/get-set-viral-logo-02.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact Us - KrazyFox" },
    {
      name: "description",
      content: "Get in touch with KrazyFox. We'd love to hear about your project and explore how we can collaborate.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const submissionType = formData.get("submission_type") as "brand" | "creator";

  try {
    if (submissionType === "brand") {
      const helpWith = formData.getAll("help_with") as string[];
      const data: BrandSubmission = {
        submission_type: "brand",
        full_name: formData.get("full_name") as string,
        email: formData.get("email") as string,
        phone_number: formData.get("phone_number") as string,
        help_with: helpWith,
        project_budget: formData.get("project_budget") as string,
        project_details: formData.get("project_details") as string,
      };
      await createContactSubmission(data);
    } else {
      const data: CreatorSubmission = {
        submission_type: "creator",
        full_name: formData.get("full_name") as string,
        email: formData.get("email") as string,
        phone_number: formData.get("phone_number") as string,
        instagram_link: formData.get("instagram_link") as string,
        youtube_link: formData.get("youtube_link") as string,
        other_links: formData.get("other_links") as string,
        about_message: formData.get("about_message") as string,
      };
      await createContactSubmission(data);
    }

    return { success: true, message: "Your submission has been received!" };
  } catch (error) {
    return { success: false, message: "Failed to submit. Please try again." };
  }
}

type SubmissionType = "brand" | "creator";

// Client logos for carousel
const clientLogos = [
  { src: "/1.png", alt: "Client 1" },
  { src: "/3.png", alt: "Client 2" },
  { src: "/5.png", alt: "Client 3" },
  { src: "/9.png", alt: "Client 4" },
  { src: "/10.png", alt: "Client 5" },
  { src: "/16.png", alt: "Client 6" },
  { src: "/17.png", alt: "Client 7" },
  { src: "/22.png", alt: "Client 8" },
  { src: "/1.png", alt: "Client 9" },
  { src: "/3.png", alt: "Client 10" },
  { src: "/5.png", alt: "Client 11" },
  { src: "/9.png", alt: "Client 12" },
];

const expectationCards = [
  {
    number: "01",
    title: "Slide Into Our DMs",
    description: "Share your vision and what's cooking. No bots or auto-replies here, just humans obsessed with great ideas.",
  },
  {
    number: "02",
    title: "Rapid Fire Response",
    description: "We move faster than a trending tweet. Unless there's a meme war breaking out, expect a reply in record time.",
  },
  {
    number: "03",
    title: "Meet & Map it out",
    description: "We jump on a call. We vibe check. We talk goals, budgets, creators, chaos. Then we send a deck so sharp it might break the internet.",
  },
  {
    number: "04",
    title: "Hit Go. Make It Count.",
    description: "From the first brief to the final delivery, we're your hype-fuelled, hands-on partners. That's the Krazyfox way.",
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<SubmissionType>("brand");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Reset form after successful submission
  useEffect(() => {
    if (actionData?.success) {
      // Reset selected services
      setSelectedServices([]);

      // Reset form fields
      const form = document.querySelector('form');
      if (form) {
        form.reset();
      }
    }
  }, [actionData]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.formSection}>
          <div className={styles.leftColumn}>
            <h1 className={styles.mainTitle}>
              {activeTab === "brand"
                ? "Got a Brief? Let's Build It Together"
                : "Your Journey Deserves Bigger Campaigns Let's Start Today"}
            </h1>

            <div className={styles.tabButtons}>
              <button
                type="button"
                className={classNames(styles.tabButton, { [styles.active]: activeTab === "brand" })}
                onClick={() => setActiveTab("brand")}
              >
                Brand/Organization
              </button>
              <button
                type="button"
                className={classNames(styles.tabButton, { [styles.active]: activeTab === "creator" })}
                onClick={() => setActiveTab("creator")}
              >
                Creator/Influencer
              </button>
            </div>

            <div className={styles.trustedBy}>
              <img src={_1} alt="Tira" className={styles.brandLogo} />
              <img src={_9} alt="Amazon" className={styles.brandLogo} />
              <img src={_3} alt="Peel" className={styles.brandLogo} />
              <span className={styles.trustText}>300 + Brands and Business</span>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h3>Get in Touch</h3>
                <p>connect@falconnetworks.in</p>
              </div>
              <div className={styles.contactItem}>
                <h3>Visit Us</h3>
                <p>24/1, Madhava Nagar, Gandhi Nagar,</p>
                <p>Bengaluru, Karnataka 560001</p>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <Form method="post" className={styles.form}>
              <input type="hidden" name="submission_type" value={activeTab} />

              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name*</label>
                <input type="text" name="full_name" className={styles.input} placeholder="Name" required />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email{activeTab === "brand" ? "*" : ""}</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder="yourname@mail.com"
                    required={activeTab === "brand"}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number*</label>
                  <input
                    type="tel"
                    name="phone_number"
                    className={styles.input}
                    placeholder="+XX XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              {activeTab === "brand" ? (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>What can we help you with*</label>
                    <div className={styles.serviceButtons}>
                      {["Influencer Marketing", "Social Media", "Performance Marketing"].map((service) => (
                        <button
                          key={service}
                          type="button"
                          className={classNames(styles.serviceButton, {
                            [styles.selected]: selectedServices.includes(service),
                          })}
                          onClick={() => toggleService(service)}
                        >
                          {service}
                        </button>
                      ))}
                      {selectedServices.map((service) => (
                        <input key={service} type="hidden" name="help_with" value={service} />
                      ))}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Project Budget</label>
                    <input type="text" name="project_budget" className={styles.input} placeholder="Enter Budget" />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Project Details*</label>
                    <textarea
                      name="project_details"
                      className={styles.textarea}
                      placeholder="Tell us more about your campaign"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Instagram Link</label>
                      <input
                        type="url"
                        name="instagram_link"
                        className={styles.input}
                        placeholder="Instagram Profile link"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>YouTube Link</label>
                      <input
                        type="url"
                        name="youtube_link"
                        className={styles.input}
                        placeholder="YouTube channel link"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Others</label>
                      <input type="text" name="other_links" className={styles.input} placeholder="Tik Tok / Moj" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Tell us More about you and what we can do to collaborate better
                    </label>
                    <textarea name="about_message" className={styles.textarea} placeholder="Enter Message" />
                  </div>
                </>
              )}

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              {actionData?.success && <div className={styles.successMessage}>{actionData.message}</div>}
              {actionData?.success === false && <div className={styles.errorMessage}>{actionData.message}</div>}
            </Form>
          </div>
        </div>

        {/* Clients Carousel */}
        <section className={styles.carouselSection}>
          <h2 className={styles.carouselTitle}>Clients Across Industries</h2>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack} ref={carouselRef}>
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className={styles.carouselItem}>
                  <img src={logo.src} alt={logo.alt} className={styles.carouselLogo} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expectation Cards */}
        <section className={styles.expectationSection}>
          <h2 className={styles.expectationTitle}>What to expect. Viral vibes on the first brief?</h2>
          <div className={styles.cardsGrid}>
            {expectationCards.map((card) => (
              <div key={card.number} className={styles.card}>
                <div className={styles.cardNumber}>{card.number}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Fuelling Brand Growth Across Every Channel Since 2019</h2>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Start a Campaign
            <span className={styles.ctaArrow}>
              <ArrowRight size={24} />
            </span>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
            <Link to="/" className={styles.footerNavLink}>
              Site Map
            </Link>
            <Link to="/" className={styles.footerNavLink}>
              Content Board
            </Link>
            <Link to="/#services" className={styles.footerNavLink}>
              Services
            </Link>
            <Link to="/case-studies" className={styles.footerNavLink}>
              Case Studies
            </Link>
            <Link to="/clients" className={styles.footerNavLink}>
              Clients
            </Link>
          </div>

          <div className={styles.footerContact}>
            <div className={styles.footerContactLeft}>
              <div className={styles.footerContactTitle}>Get in Touch</div>
              <a href="mailto:connect@krazyfox.in" className={styles.footerContactEmail}>
                connect@falconnetwork.in
              </a>
            </div>
            <div className={styles.footerContactRight}>
              <div className={styles.footerAddress}>
                24/1, Madhava Nagar, Gandhi Nagar,
                <br />
                Bengaluru, Karnataka 560001
              </div>
            </div>
            <div className={styles.footerSocial}>
              <a
                href="https://www.instagram.com/krazyfoxdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
              >
                <Instagram className={styles.footerSocialIcon} />
              </a>
              <a
                href="https://www.linkedin.com/company/krazyfoxdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
              >
                <Linkedin className={styles.footerSocialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerLogoText}>Falcon Network</div>
          </div>

          <div className={styles.footerCopyright}>
            <img src={FooterLogo} alt="Get Set Viral" className={styles.footerCopyrightLogo} />
            <span className={styles.footerCopyrightText}>© Falcon Network Technology Pvt. Ltd. All Rights Reserved</span>
          </div>
        </div>
      </footer >
    </div >
  );
}
