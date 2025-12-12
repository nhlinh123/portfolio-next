"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "../../../config/site";
import { SocialLinks } from "../ui/SocialLinks";
import styles from "./HeroSection.module.css";

// Dynamic import for Three.js scene to avoid SSR issues
const Scene = dynamic(
    () => import("../three/Scene").then((mod) => ({ default: mod.Scene })),
    { ssr: false }
);

export function HeroSection() {
    return (
        <section id="hero" className={styles.hero}>
            <Scene />

            <div className={styles.content}>
                <div className={styles.greeting}>
                    <span className={styles.wave}>👋</span>
                    <span>Hello, I&apos;m</span>
                </div>

                <h1 className={styles.name}>{siteConfig.name}</h1>

                <h2 className={styles.title}>
                    <span className={styles.titleStatic}>{siteConfig.title}</span>
                </h2>

                <p className={styles.tagline}>{siteConfig.tagline}</p>

                <div className={styles.actions}>
                    <a href="#projects" className={`btn btn-primary ${styles.primaryBtn}`}>
                        View My Work
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className={`btn btn-secondary ${styles.secondaryBtn}`}>
                        Get In Touch
                    </a>
                </div>

                <div className={styles.social}>
                    <SocialLinks />
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel} />
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}
