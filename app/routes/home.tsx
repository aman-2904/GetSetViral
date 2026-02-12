import type { Route } from "./+types/home";
import type { MouseEvent } from "react";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

import { Header } from "~/components/header/header";
import { ProjectCard } from "~/components/project-card/project-card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "~/components/ui/carousel/carousel";
import { projects } from "~/data/projects";
import styles from "./home.module.css";
import FooterLogo from "/get-set-viral-logo-02.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Falcon Network - Wherever the internet scrolls, our collabs show up" },
    {
      name: "description",
      content: "Showcasing innovative collaborations and projects that make an impact across the digital landscape.",
    },
  ];
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay on mount
    video.play().catch(() => { });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Pause when scrolled past hero
      if (scrollY > heroHeight && !video.paused) {
        video.pause();
      }

      // Resume when back in view
      if (scrollY <= heroHeight && video.paused) {
        video.play().catch(() => { });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <video ref={videoRef} className={styles.heroVideo} muted loop playsInline>
          {/* Current: External hosted video */}
          <source src="https://krazyfox.in/media/website_promo.mp4" type="video/mp4" />

          {/* Future: Uncomment below and comment above when you upload your video to /public folder */}
          {/* <source src="/website_promo.mp4" type="video/mp4" /> */}
        </video>
      </section>

      <section className={styles.showcase}>
        <div className={styles.showcaseHeader}>
          <h2 className={styles.showcaseTitle}>Wherever the internet scrolls, our collabs show up.</h2>
          <div className={styles.carouselControlsContainer}>
            <button className={styles.prevButton} onClick={() => carouselApi?.scrollPrev()} aria-label="Previous slide">
              <img src="/arrow-left-button.png" alt="Previous" />
            </button>
            <button className={styles.nextButton} onClick={() => carouselApi?.scrollNext()} aria-label="Next slide">
              <img src="/arrow-right-button.png" alt="Next" />
            </button>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setCarouselApi}
            className={styles.carousel}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} style={{ flexBasis: "auto" }}>
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <p className={styles.servicesLabel}>Our Services</p>
            <h2 className={styles.servicesTitle}>Built for Growth in Every Channel</h2>
          </div>

          <div className={styles.serviceCardsWrapper}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Influencer Marketing</h3>
                <p className={styles.serviceCardDescription}>
                  We partner with the right creators to transform simple posts into cultural conversations, building
                  trust and long-term loyalty for your brand.
                </p>
                <button className={styles.serviceCardButton}>
                  Let's Talk
                  <ArrowUpRight className={styles.serviceCardButtonIcon} />
                </button>
              </div>
              <div className={styles.serviceCardList}>
                <div className={styles.serviceCardListItem}>1. Campaign Strategy</div>
                <div className={styles.serviceCardListItem}>2. UGC & PUGC Content</div>
                <div className={styles.serviceCardListItem}>3. Offline Events</div>
                <div className={styles.serviceCardListItem}>4. Influencer Identification & Outreach</div>
              </div>
            </div>

            <div className={`${styles.serviceCard} ${styles.serviceCardPurple}`}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Performance Marketing</h3>
                <p className={styles.serviceCardDescription}>
                  Not just ads, but precision-engineered funnels designed to reach the right audience, at the right
                  time, with the right story.
                </p>
                <button className={styles.serviceCardButton}>
                  Let's Talk
                  <ArrowUpRight className={styles.serviceCardButtonIcon} />
                </button>
              </div>
              <div className={styles.serviceCardList}>
                <div className={styles.serviceCardListItem}>1. Analytics & Reporting</div>
                <div className={styles.serviceCardListItem}>2. Telegram Sales & Community Marketing</div>
                <div className={styles.serviceCardListItem}>3. Paid Advertising (Meta & Google Ads)</div>
                <div className={styles.serviceCardListItem}>4. Reviews & Ratings</div>
              </div>
            </div>

            <div className={`${styles.serviceCard} ${styles.serviceCardYellow}`}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Social Media Marketing</h3>
                <p className={styles.serviceCardDescription}>
                  We design social-first campaigns that spark real engagement, and keep your brand part of the daily
                  feed.
                </p>
                <button className={styles.serviceCardButton}>
                  Let's Talk
                  <ArrowUpRight className={styles.serviceCardButtonIcon} />
                </button>
              </div>
              <div className={styles.serviceCardList}>
                <div className={styles.serviceCardListItem}>1. Campaign Design</div>
                <div className={styles.serviceCardListItem}>2. Meme Marketing</div>
                <div className={styles.serviceCardListItem}>3. Content Creation</div>
                <div className={styles.serviceCardListItem}>4. IRL (In Real Life) Activations</div>
                <div className={styles.serviceCardListItem}>5. Brand Communication Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.creativeStories}>
        <div className={styles.creativeStoriesContainer}>
          <h2 className={styles.creativeStoriesTitle}>Creative stories built to engage and grow brands</h2>
          <button className={styles.startCampaignButton}>
            Start a new Campaign
            <ArrowUpRight className={styles.startCampaignIcon} />
          </button>

          <div className={styles.caseStudiesGrid}>
            <div
              className={styles.caseStudyCard}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.caseStudyImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
                  alt="Clay Co Campaign"
                  className={styles.caseStudyImage}
                />
                {hoveredCard === 0 && (
                  <div
                    className={styles.readMoreCursor}
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                    }}
                  >
                    Read More
                  </div>
                )}
                <div className={`${styles.statsCard} ${hoveredCard === 0 ? styles.statsCardVisible : ""}`}>
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>6.2 Mn+</div>
                      <div className={styles.statLabel}>Total Views</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>4.3 Mn+</div>
                      <div className={styles.statLabel}>Total Reach</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>800k+</div>
                      <div className={styles.statLabel}>Total Engagements</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className={styles.caseStudyTitle}>Clay Co Sunglazed Launch</h3>
              <p className={styles.caseStudyDescription}>
                Turning Sunglaze into the summer flex—fun, fuss-free, and built to beat the heat in style, every damn day.
              </p>
            </div>

            <div
              className={styles.caseStudyCard}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.caseStudyImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Tira Campaign"
                  className={styles.caseStudyImage}
                />
                {hoveredCard === 1 && (
                  <div
                    className={styles.readMoreCursor}
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                    }}
                  >
                    Read More
                  </div>
                )}
                <div className={`${styles.statsCard} ${hoveredCard === 1 ? styles.statsCardVisible : ""}`}>
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>8.5 Mn+</div>
                      <div className={styles.statLabel}>Total Views</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>5.2 Mn+</div>
                      <div className={styles.statLabel}>Total Reach</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>1.2M+</div>
                      <div className={styles.statLabel}>Total Engagements</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className={styles.caseStudyTitle}>Tira Reliance Retail</h3>
              <p className={styles.caseStudyDescription}>
                Boosting Tira's visibility through influencer partnerships, social storytelling, and on-ground activations, Falcon Network drove stronger brand recall, deeper community ties, and measurable...
              </p>
            </div>
          </div>

          <div className={styles.caseStudiesGrid}>
            <div
              className={styles.caseStudyCard}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.caseStudyImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                  alt="Revlon Campaign"
                  className={styles.caseStudyImage}
                />
                {hoveredCard === 2 && (
                  <div
                    className={styles.readMoreCursor}
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                    }}
                  >
                    Read More
                  </div>
                )}
                <div className={`${styles.statsCard} ${hoveredCard === 2 ? styles.statsCardVisible : ""}`}>
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>25 Mn+</div>
                      <div className={styles.statLabel}>Total campaign views</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>100k+</div>
                      <div className={styles.statLabel}>Traffic to Revlon's Amazon page and India website</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className={styles.caseStudyTitle}>Revlon Colorstay Diwali Launch</h3>
              <p className={styles.caseStudyDescription}>
                Revlon's ColourStay Range launches this festive season with long-lasting Diwali glam. Falcon Network drove the celebration with creator storytelling and viral meme marketing.
              </p>
            </div>

            <div
              className={styles.caseStudyCard}
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.caseStudyImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
                  alt="Fenty Beauty Campaign"
                  className={styles.caseStudyImage}
                />
                {hoveredCard === 3 && (
                  <div
                    className={styles.readMoreCursor}
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                    }}
                  >
                    Read More
                  </div>
                )}
                <div className={`${styles.statsCard} ${hoveredCard === 3 ? styles.statsCardVisible : ""}`}>
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>15 Mn+</div>
                      <div className={styles.statValue}>10 Mn+</div>
                      <div className={styles.statLabel}>Total Reach</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>2M+</div>
                      <div className={styles.statLabel}>Total Engagements</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className={styles.caseStudyTitle}>Fenty Beauty India Launch</h3>
              <p className={styles.caseStudyDescription}>
                Fenty Beauty, launched by Rihanna in 2017 under LVMH, redefined the beauty industry with its inclusive 'Beauty for All' philosophy. Falcon Network amplified its India launch through Tira...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Got a Campaign in Mind?</h2>
            <p className={styles.ctaSubtitle}>Let's turn your ideas into clicks, conversions, and impact.</p>
          </div>
          <Link to="/contact" className={styles.ctaButton}>
            Let's Talk
            <ArrowUpRight className={styles.ctaButtonIcon} />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
            <Link to="/" className={styles.footerNavLink}>
              Site Map
            </Link>
            <Link to="/" className={styles.footerNavLink}>
              Content Board
            </Link>
            <Link to="/services" className={styles.footerNavLink}>
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
      </footer>
    </div>
  );
}
