"use client";

import { siteConfig } from "../../../config/site";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
    const featuredProjects = siteConfig.projects.filter((p) => p.featured);
    const otherProjects = siteConfig.projects.filter((p) => !p.featured);
    const allProjects = [...featuredProjects, ...otherProjects];

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p>Some of my recent work that I&apos;m proud of</p>
                </div>

                <div className={styles.grid}>
                    {allProjects.map((project, i) => (
                        <article
                            key={i}
                            className={`${styles.card} ${project.featured ? styles.featured : ""}`}
                        >
                            <div className={styles.cardImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.projectIcon}>📁</span>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <div className={styles.cardLinks}>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.cardLink}
                                                aria-label="View live site"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.cardLink}
                                                aria-label="View source code"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>

                                <div className={styles.cardTech}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
