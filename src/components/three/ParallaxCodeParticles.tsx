"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text } from "@react-three/drei";
import * as THREE from "three";

const codeSymbols = [
    "{", "}", "(", ")", "[", "]", ";", "=>", "//", "/*", "*/",
    "</>", "&&", "||", "!=", "===", "++", "--", "::", "->",
    "const", "let", "fn", "if", "for", "return",
    "<", ">", "/", "=", "+", "-", "*", "&", "|", "?", ":",
];

interface Particle {
    position: THREE.Vector3;
    symbol: string;
    speed: number;
    rotationSpeed: number;
    scale: number;
    opacity: number;
    parallaxFactor: number;
    originalY: number;
}

export function ParallaxCodeParticles() {
    const groupRef = useRef<THREE.Group>(null);
    const scroll = useScroll();

    const particles: Particle[] = useMemo(() => {
        return Array.from({ length: 200 }, () => {
            const y = (Math.random() - 0.5) * 80 - 20; // Spread across scroll range
            return {
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 40,
                    y,
                    (Math.random() - 0.5) * 20 - 5
                ),
                symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
                speed: 0.2 + Math.random() * 0.5,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                scale: 0.1 + Math.random() * 0.2,
                opacity: 0.2 + Math.random() * 0.4,
                parallaxFactor: 0.5 + Math.random() * 1.5,
                originalY: y,
            };
        });
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();
        const scrollOffset = scroll.offset;

        groupRef.current.children.forEach((child, i) => {
            const particle = particles[i];
            if (!particle) return;

            // Parallax scroll effect - particles move at different speeds
            const parallaxY = scrollOffset * 30 * particle.parallaxFactor;

            // Floating animation
            child.position.y = particle.originalY + parallaxY + Math.sin(time * particle.speed + i) * 0.3;
            child.position.x = particle.position.x + Math.cos(time * particle.speed * 0.5 + i) * 0.2;

            // Subtle rotation
            child.rotation.z += particle.rotationSpeed;
            child.rotation.y = Math.sin(time * 0.5 + i) * 0.2;
        });
    });

    return (
        <group ref={groupRef}>
            {particles.map((particle, i) => (
                <Text
                    key={i}
                    position={particle.position}
                    fontSize={particle.scale}
                    color={i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#22d3ee" : "#a855f7"}
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={particle.opacity}
                >
                    {particle.symbol}
                </Text>
            ))}
        </group>
    );
}
