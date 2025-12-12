"use client";

import { siteConfig } from "../../../config/site";
import styles from "./SkillsSection.module.css";

const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    styling: "Styling",
    tools: "Tools & Workflow",
    other: "Other Technologies",
};

const categoryIcons: Record<string, string> = {
    frontend: "⚛️",
    styling: "🎨",
    tools: "🛠️",
    other: "🔧",
};

export function SkillsSection() {
    const skillCategories = Object.entries(siteConfig.skills);

    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                    <p>Technologies I work with and love</p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map(([category, skills]) => (
                        <div key={category} className={styles.category}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>
                                    {categoryIcons[category] || "💡"}
                                </span>
                                <h3 className={styles.categoryTitle}>
                                    {categoryLabels[category] || category}
                                </h3>
                            </div>

                            <div className={styles.skillsList}>
                                {skills.map((skill) => (
                                    <span key={skill} className={styles.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
