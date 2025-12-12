"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ScrollControls, Scroll, Preload } from "@react-three/drei";
import { Experience3D } from "./Experience3D";
import { HtmlContent } from "./HtmlContent";
import styles from "./FullPageScene.module.css";

export function FullPageScene() {
    return (
        <div className={styles.wrapper}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ScrollControls pages={8} damping={0.25}>
                        {/* 3D Experience that responds to scroll */}
                        <Experience3D />

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
