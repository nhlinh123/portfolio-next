"use client";

import { siteConfig } from "../../../config/site";
import { SocialLinks } from "../ui/SocialLinks";
import styles from "./Footer.module.css";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <a href="#" className={styles.logo}>
                            <span className={styles.logoIcon}>&lt;/&gt;</span>
                            <span className={styles.logoText}>{siteConfig.name}</span>
                        </a>
                        <p className={styles.tagline}>{siteConfig.tagline}</p>
                    </div>

                    <div className={styles.social}>
                        <SocialLinks />
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <p className={styles.madeWith}>
                        Made with <span className={styles.heart}>♥</span> and lots of coffee
                    </p>
                </div>
            </div>
        </footer>
    );
}
