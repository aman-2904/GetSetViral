import { Link, useLocation } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./header.module.css";
import GetSetViral_logo03 from "/logoGetSet.png";

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isContactPage = location.pathname === "/contact";

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.scrolled]: isScrolled || isContactPage,
          [styles.headerMenuOpen]: isMobileMenuOpen,
        })}
      >
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src={GetSetViral_logo03} alt="Get Set Viral Logo" className={styles.logoImage} />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/" className={classNames(styles.navLink, { [styles.active]: isActive("/") })}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className={classNames(styles.navLink, { [styles.active]: isActive("/services") })}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className={classNames(styles.navLink, { [styles.active]: isActive("/case-studies") })}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/clients" className={classNames(styles.navLink, { [styles.active]: isActive("/clients") })}>
                  Clients
                </Link>
              </li>
            </ul>

            <Link
              to="/contact"
              className={classNames(styles.contactButton, { [styles.contactButtonActive]: isActive("/contact") })}
            >
              Contact Us
              <ArrowUpRight className={styles.contactButtonIcon} />
            </Link>
          </nav>

          <button
            className={classNames(styles.menuButton, { [styles.menuButtonOpen]: isMobileMenuOpen })}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuButtonLine}></span>
            <span className={styles.menuButtonLine}></span>
            <span className={styles.menuButtonLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={classNames(styles.mobileDrawer, { [styles.mobileDrawerOpen]: isMobileMenuOpen })}>
        <nav className={styles.mobileNav}>
          <Link
            to="/"
            className={classNames(styles.mobileNavLink, { [styles.mobileNavLinkActive]: isActive("/") })}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/#services"
            className={classNames(styles.mobileNavLink, { [styles.mobileNavLinkActive]: isActive("/services") })}
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }
              handleLinkClick();
            }}
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className={classNames(styles.mobileNavLink, { [styles.mobileNavLinkActive]: isActive("/case-studies") })}
            onClick={handleLinkClick}
          >
            Case Studies
          </Link>
          <Link
            to="/clients"
            className={classNames(styles.mobileNavLink, { [styles.mobileNavLinkActive]: isActive("/clients") })}
            onClick={handleLinkClick}
          >
            Clients
          </Link>

          <Link
            to="/contact"
            className={classNames(styles.mobileContactButton, {
              [styles.mobileContactButtonActive]: isActive("/contact"),
            })}
            onClick={handleLinkClick}
          >
            Contact Us
            <ArrowUpRight className={styles.contactButtonIcon} />
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
}
