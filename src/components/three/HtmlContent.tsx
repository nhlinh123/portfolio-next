"use client";

import React, { useCallback } from "react";
import { siteConfig } from "../../../config/site";
import styles from "./HtmlContent.module.css";

import { useScroll } from "@react-three/drei";

export function HtmlContent() {
    const scroll = useScroll();

    const scrollToTop = useCallback(() => {
        scroll.el.scrollTo({ top: 0, behavior: 'smooth' });
    }, [scroll]);

    const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top - scroll.el.getBoundingClientRect().top + scroll.el.scrollTop - 100;
            scroll.el.scrollTo({ top, behavior: 'smooth' });
        }
    }, [scroll]);

    return (
        <div className={styles.wrapper}>
            {/* Hero Section - Page 1 */}
            <section className={styles.section} style={{ height: '100vh' }}>
                <div className={styles.heroContent}>
                    <div className={styles.greeting}>
                        <span className={styles.wave}>👋</span>
                        <span>Hello, I&apos;m</span>
                    </div>
                    <h1 className={styles.heroName}>{siteConfig.name}</h1>
                    <h2 className={styles.heroTitle}>{siteConfig.title}</h2>
                    <p className={styles.heroTagline}>{siteConfig.tagline}</p>

                    <div className={styles.heroActions}>
                        <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className={styles.btnPrimary}>
                            View My Work
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>

                    </div>

                    <div className={styles.socialLinks}>
                        {Object.entries(siteConfig.socials).map(([platform, url]) => {
                            if (!url) return null;
                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={platform}
                                >
                                    <SocialIcon platform={platform} />
                                </a>
                            );
                        })}
                    </div>

                    <div className={styles.scrollIndicator}>
                        <div className={styles.mouse}>
                            <div className={styles.wheel} />
                        </div>
                        <span>Scroll to explore</span>
                    </div>
                </div>
            </section>

            {/* About Section - Page 2 */}
            <section className={`${styles.section} ${styles.sectionPadded}`} id="about" style={{ height: '100vh' }}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>01 / About</span>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p className={styles.aboutText}>{siteConfig.about.description}</p>

                    <div className={styles.highlights}>
                        {siteConfig.about.highlights.map((h, i) => (
                            <div key={i} className={styles.highlightCard}>
                                <span className={styles.highlightValue}>{h.value}</span>
                                <span className={styles.highlightLabel}>{h.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section - Page 3 */}
            <section className={`${styles.section} ${styles.sectionPadded}`} id="skills" style={{ height: '100vh' }}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>02 / Skills</span>
                    <h2 className={styles.sectionTitle}>What I Do</h2>

                    <div className={styles.skillsGrid}>
                        {Object.entries(siteConfig.skills).map(([category, skills]) => (
                            <div key={category} className={styles.skillCategory}>
                                <h3 className={styles.skillCategoryTitle}>
                                    {getCategoryIcon(category)} {formatCategory(category)}
                                </h3>
                                <div className={styles.skillTags}>
                                    {skills.map((skill) => (
                                        <span key={skill} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section - Page 4 */}
            <section className={`${styles.section} ${styles.sectionPadded}`} id="projects" style={{ minHeight: '100vh', height: 'auto' }}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>03 / Work</span>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>

                    <div className={styles.projectsGrid}>
                        {siteConfig.projects.filter(p => p.featured).map((project, i) => (
                            <div key={i} className={styles.projectCard}>
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectNumber}>{String(i + 1).padStart(2, '0')}</span>
                                    <div className={styles.projectLinks}>
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">↗</a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">⌘</a>
                                        )}
                                    </div>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.tech.map(t => (
                                        <span key={t} className={styles.techBadge}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Experience Section - Page 5 */}
            <section className={`${styles.section} ${styles.sectionPadded}`} id="experience" style={{ height: '100vh' }}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>04 / Experience</span>
                    <h2 className={styles.sectionTitle}>Where I&apos;ve Worked</h2>

                    <div className={styles.timeline}>
                        {siteConfig.experience.map((exp, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineDot} />
                                <div className={styles.timelineContent}>
                                    <span className={styles.timelineDuration}>{exp.duration}</span>
                                    <h3 className={styles.timelinePosition}>{exp.position}</h3>
                                    <p className={styles.timelineCompany}>{exp.company}</p>
                                    <p className={styles.timelineDesc}>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - Page 6 */}
            <section className={`${styles.section} ${styles.sectionPadded}`} id="contact" style={{ height: '100vh' }}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>05 / Contact</span>
                    <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
                    <p className={styles.contactText}>
                        I&apos;m always interested in hearing about new projects and opportunities.
                        Let&apos;s create something amazing together!
                    </p>

                    <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>
                        {siteConfig.email}
                    </a>

                    <div className={styles.contactSocials}>
                        {Object.entries(siteConfig.socials).map(([platform, url]) => {
                            if (!url) return null;
                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactSocialLink}
                                >
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                            );
                        })}
                    </div>

                    <p className={styles.footer}>
                        © {new Date().getFullYear()} {siteConfig.name}. Made with ♥ and Three.js
                    </p>
                </div>
            </section>

            {/* Fun Easter Egg Section */}
            <section className={`${styles.section} ${styles.easterEgg}`} style={{ minHeight: '100vh', height: 'auto' }}>
                <div className={styles.easterEggContent}>
                    <div className={styles.consoleWindow}>
                        <div className={styles.consoleHeader}>
                            <div className={styles.consoleDots}>
                                <span className={styles.dotRed}></span>
                                <span className={styles.dotYellow}></span>
                                <span className={styles.dotGreen}></span>
                            </div>
                            <span className={styles.consoleTitle}>developer@portfolio:~</span>
                        </div>
                        <div className={styles.consoleBody}>
                            <p className={styles.consoleLine}>
                                <span className={styles.prompt}>$</span> git status
                            </p>
                            <p className={styles.consoleOutput}>
                                On branch <span className={styles.branchName}>main</span>
                            </p>
                            <p className={styles.consoleOutput}>
                                Your portfolio is up to date with &apos;origin/awesome&apos;.
                            </p>
                            <p className={styles.consoleLine}>
                                <span className={styles.prompt}>$</span> echo &quot;Thanks for scrolling!&quot;
                            </p>
                            <p className={styles.consoleOutput}>Thanks for scrolling! 🎉</p>
                            <p className={styles.consoleLine}>
                                <span className={styles.prompt}>$</span> cat fun_facts.txt
                            </p>
                            <p className={styles.consoleOutput}>☕ Cups of coffee consumed: 9999+</p>
                            <p className={styles.consoleOutput}>🐛 Bugs fixed at 3AM: Too many</p>
                            <p className={styles.consoleOutput}>📚 Stack Overflow visits: ∞</p>
                            <p className={styles.consoleOutput}>🎮 &quot;It works on my machine&quot; count: 42</p>
                            <p className={styles.consoleLine}>
                                <span className={styles.prompt}>$</span> npm run hire-me
                            </p>
                            <p className={styles.consoleSuccess}>✓ Application sent successfully!</p>
                            <p className={styles.consoleSuccess}>✓ Interview scheduled for: Anytime you want!</p>
                            <p className={styles.consoleLine}>
                                <span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.easterEggText}>
                        You found the secret ending! 🥚
                    </p>
                    <button onClick={scrollToTop} className={styles.backToTop}>
                        ↑ Back to top
                    </button>
                </div>
            </section>
        </div>
    );
}

function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
        frontend: "⚛️",
        styling: "🎨",
        tools: "🛠️",
        other: "🔧",
    };
    return icons[category] || "💡";
}

function formatCategory(category: string): string {
    const labels: Record<string, string> = {
        frontend: "Frontend",
        styling: "Styling",
        tools: "Tools",
        other: "Other",
    };
    return labels[category] || category;
}

function SocialIcon({ platform }: { platform: string }) {
    switch (platform) {
        case 'github':
            return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>;
        case 'linkedin':
            return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
        case 'twitter':
            return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
        case 'facebook':
            return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
        case 'instagram':
            return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" /></svg>;
        default:
            return <span>{platform[0].toUpperCase()}</span>;
    }
}
