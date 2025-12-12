"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Stars, Float } from "@react-three/drei";
import * as THREE from "three";
import { ParallaxCodeParticles } from "./ParallaxCodeParticles";
import { ParallaxTerminal } from "./ParallaxTerminal";
import { ParallaxTechOrbit } from "./ParallaxTechOrbit";
import { ParallaxGrid } from "./ParallaxGrid";

export function Experience3D() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const lightsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current || !lightsRef.current) return;

        const scrollOffset = scroll.offset;
        const time = state.clock.getElapsedTime();

        // Camera parallax based on scroll
        state.camera.position.y = -scrollOffset * 30;
        state.camera.position.z = 10 - scrollOffset * 5;
        state.camera.rotation.x = scrollOffset * 0.2;

        // Subtle mouse parallax
        const mouseX = state.pointer.x * 0.5;
        const mouseY = state.pointer.y * 0.3;
        state.camera.position.x = mouseX;
        state.camera.rotation.y = -mouseX * 0.1;

        // Animate lights based on scroll
        lightsRef.current.rotation.y = time * 0.1 + scrollOffset * Math.PI;
    });

    return (
        <>
            {/* Ambient and dynamic lights */}
            <ambientLight intensity={0.3} />
            <group ref={lightsRef}>
                <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22d3ee" />
                <pointLight position={[0, 20, 0]} intensity={0.5} color="#a855f7" />
            </group>

            {/* Stars background */}
            <Stars
                radius={100}
                depth={50}
                count={3000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            {/* Main 3D elements group */}
            <group ref={groupRef}>
                {/* Infinite grid */}
                <ParallaxGrid />

                {/* Floating code particles - throughout the scene */}
                <ParallaxCodeParticles />

                {/* Terminal at hero section */}
                <Float
                    speed={2}
                    rotationIntensity={0.2}
                    floatIntensity={0.5}
                >
                    <ParallaxTerminal position={[4, 0, 0]} />
                </Float>

                {/* Tech orbit at skills section */}
                <ParallaxTechOrbit position={[-4, -12, 0]} />

                {/* Additional floating elements */}
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                    <mesh position={[-6, -24, -5]}>
                        <icosahedronGeometry args={[1.5, 0]} />
                        <meshStandardMaterial
                            color="#6366f1"
                            emissive="#6366f1"
                            emissiveIntensity={0.3}
                            wireframe
                        />
                    </mesh>
                </Float>

                <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
                    <mesh position={[7, -36, -3]}>
                        <octahedronGeometry args={[1.2, 0]} />
                        <meshStandardMaterial
                            color="#22d3ee"
                            emissive="#22d3ee"
                            emissiveIntensity={0.3}
                            wireframe
                        />
                    </mesh>
                </Float>

                <Float speed={1} rotationIntensity={0.5} floatIntensity={0.4}>
                    <mesh position={[-5, -48, -4]}>
                        <torusGeometry args={[1, 0.3, 16, 32]} />
                        <meshStandardMaterial
                            color="#a855f7"
                            emissive="#a855f7"
                            emissiveIntensity={0.4}
                            wireframe
                        />
                    </mesh>
                </Float>
            </group>
        </>
    );
}
