"use client";

import { siteConfig } from "../../../config/site";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <div className="section-title">
                    <h2>Work Experience</h2>
                    <p>My professional journey so far</p>
                </div>

                <div className={styles.timeline}>
                    {siteConfig.experience.map((exp, i) => (
                        <div key={i} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot} />
                                {i < siteConfig.experience.length - 1 && (
                                    <div className={styles.markerLine} />
                                )}
                            </div>

                            <div className={styles.timelineContent}>
                                <div className={styles.timelineHeader}>
                                    <div>
                                        <h3 className={styles.position}>{exp.position}</h3>
                                        <p className={styles.company}>{exp.company}</p>
                                    </div>
                                    <span className={styles.duration}>{exp.duration}</span>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
