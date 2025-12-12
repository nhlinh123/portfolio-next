"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { ScrollControls, Scroll, Preload } from "@react-three/drei";
import { Experience3D } from "./Experience3D";
import { HtmlContent } from "./HtmlContent";
import styles from "./FullPageScene.module.css";

export function FullPageScene() {
    // Responsive pages count to ensure content fits
    const [pages, setPages] = useState(9); // Default to desktop count
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const updatePages = () => {
            const isMobile = window.innerWidth < 768;
            setPages(isMobile ? 16 : 10);
        };

        updatePages();
        window.addEventListener('resize', updatePages);
        return () => window.removeEventListener('resize', updatePages);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={styles.wrapper}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ScrollControls pages={pages} damping={0.25}>
                        {/* 3D Experience that responds to scroll - synchronized with 4 units per page */}
                        <Experience3D pages={pages} />

                        {/* HTML content overlay */}
                        <Scroll html>
                            <HtmlContent />
                        </Scroll>
                    </ScrollControls>
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
