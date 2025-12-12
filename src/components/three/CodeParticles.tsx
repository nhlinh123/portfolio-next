"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface CodeParticlesProps {
    count?: number;
}

const codeSymbols = [
    "{", "}", "(", ")", "[", "]", ";", "=>", "//", "/*", "*/",
    "</>", "&&", "||", "!=", "===", "++", "--", "::", "->",
    "const", "let", "fn", "if", "else", "for", "return",
    "<", ">", "/", "=", "+", "-", "*", "&", "|", "?", ":",
];

interface Particle {
    position: [number, number, number];
    symbol: string;
    speed: number;
    rotationSpeed: number;
    scale: number;
    opacity: number;
}

export function CodeParticles({ count = 100 }: CodeParticlesProps) {
    const groupRef = useRef<THREE.Group>(null);

    const particles: Particle[] = useMemo(() => {
        return Array.from({ length: count }, () => ({
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15 - 5,
            ] as [number, number, number],
            symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
            speed: 0.2 + Math.random() * 0.5,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
            scale: 0.1 + Math.random() * 0.15,
            opacity: 0.15 + Math.random() * 0.35,
        }));
    }, [count]);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();

        groupRef.current.children.forEach((child, i) => {
            const particle = particles[i];
            if (!particle) return;

            // Floating animation
            child.position.y += Math.sin(time * particle.speed + i) * 0.002;
            child.position.x += Math.cos(time * particle.speed * 0.5 + i) * 0.001;

            // Subtle rotation
            child.rotation.z += particle.rotationSpeed;
        });
    });

    return (
        <group ref={groupRef}>
            {particles.map((particle, i) => (
                <Text
                    key={i}
                    position={particle.position}
                    fontSize={particle.scale}
                    color="#6366f1"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/JetBrainsMono-Regular.woff"
                    fillOpacity={particle.opacity}
                >
                    {particle.symbol}
                </Text>
            ))}
        </group>
    );
}
