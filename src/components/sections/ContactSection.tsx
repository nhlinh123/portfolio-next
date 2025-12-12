"use client";

import { siteConfig } from "../../../config/site";
import { SocialLinks } from "../ui/SocialLinks";
import styles from "./ContactSection.module.css";

export function ContactSection() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span className={styles.badge}>Get In Touch</span>
                        <h2 className={styles.title}>
                            Let&apos;s Work <span className="gradient-text">Together</span>
                        </h2>
                        <p className={styles.description}>
                            I&apos;m always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className={styles.contactDetails}>
                            <a href={`mailto:${siteConfig.email}`} className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Email</span>
                                    <span className={styles.contactValue}>{siteConfig.email}</span>
                                </div>
                            </a>

                            {siteConfig.location && (
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.contactLabel}>Location</span>
                                        <span className={styles.contactValue}>{siteConfig.location}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={styles.social}>
                            <p className={styles.socialLabel}>Find me on</p>
                            <SocialLinks />
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <div className={styles.formCard}>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={styles.input}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.input}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                    Send Message
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
