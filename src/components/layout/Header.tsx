"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../../../config/site";
import styles from "./Header.module.css";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoIcon}>&lt;/&gt;</span>
                    <span className={styles.logoText}>{siteConfig.name.split(" ")[0]}</span>
                </a>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <a href={`mailto:${siteConfig.email}`} className={styles.contactBtn}>
                        Let&apos;s Talk
                    </a>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`} />
                    </button>
                </div>
            </div>
        </header>
    );
}
