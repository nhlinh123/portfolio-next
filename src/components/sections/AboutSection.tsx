"use client";

import { siteConfig } from "../../../config/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p>Get to know me a little better</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imagePlaceholder}>
                            <span className={styles.codeIcon}>&lt;/&gt;</span>
                        </div>
                        <div className={styles.imageDecor} />
                    </div>

                    <div className={styles.info}>
                        <p className={styles.description}>{siteConfig.about.description}</p>

                        <div className={styles.highlights}>
                            {siteConfig.about.highlights.map((highlight, i) => (
                                <div key={i} className={styles.highlightCard}>
                                    <span className={styles.highlightValue}>{highlight.value}</span>
                                    <span className={styles.highlightLabel}>{highlight.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <a
                                href={siteConfig.about.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Download Resume
                            </a>
                            <a href={`mailto:${siteConfig.email}`} className="btn btn-secondary">
                                Let&apos;s Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
