"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CodeParticles } from "./CodeParticles";
import { FloatingCode } from "./FloatingCode";
import { TechOrbit } from "./TechOrbit";
import styles from "./Scene.module.css";

export function Scene() {
    return (
        <div className={styles.canvasWrapper}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />

                    <CodeParticles count={150} />
                    <FloatingCode />
                    <TechOrbit />
                </Suspense>
            </Canvas>
        </div>
    );
}
