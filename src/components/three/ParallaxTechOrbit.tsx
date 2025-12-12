"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

const technologies = [
    { name: "React", color: "#61dafb", angle: 0 },
    { name: "TypeScript", color: "#3178c6", angle: Math.PI * 0.4 },
    { name: "Next.js", color: "#ffffff", angle: Math.PI * 0.8 },
    { name: "Three.js", color: "#000000", angle: Math.PI * 1.2 },
    { name: "Node.js", color: "#68a063", angle: Math.PI * 1.6 },
];

interface ParallaxTechOrbitProps {
    position?: [number, number, number];
}

export function ParallaxTechOrbit({ position = [-4, -12, 0] }: ParallaxTechOrbitProps) {
    const groupRef = useRef<THREE.Group>(null);
    const orbitRef = useRef<THREE.Group>(null);
    const scroll = useScroll();

    useFrame((state) => {
        if (!groupRef.current || !orbitRef.current) return;

        const time = state.clock.getElapsedTime();
        const scrollOffset = scroll.offset;

        // Visibility based on scroll position (visible in skills section)
        const sectionStart = 0.2;
        const sectionEnd = 0.5;
        const visibility = scrollOffset > sectionStart && scrollOffset < sectionEnd;
        groupRef.current.visible = visibility || scrollOffset < 0.1;

        // Orbit rotation speeds up as you scroll near it
        const scrollFactor = Math.max(0, 1 - Math.abs(scrollOffset - 0.35) * 3);
        orbitRef.current.rotation.y = time * (0.3 + scrollFactor * 0.5);
        orbitRef.current.rotation.x = Math.sin(time * 0.1) * 0.15;

        // Parallax scale effect
        const scale = 0.8 + scrollFactor * 0.4;
        groupRef.current.scale.setScalar(scale);
    });

    const orbitRadius = 3.5;

    return (
        <group ref={groupRef} position={position}>
            {/* Central glowing sphere */}
            <Sphere args={[0.6, 32, 32]}>
                <meshStandardMaterial
                    color="#6366f1"
                    emissive="#6366f1"
                    emissiveIntensity={0.8}
                    metalness={0.9}
                    roughness={0.1}
                />
            </Sphere>

            {/* Inner glow */}
            <pointLight position={[0, 0, 0]} intensity={2} color="#6366f1" distance={4} />

            {/* Orbit rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[orbitRadius, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.4}
                    emissive="#6366f1"
                    emissiveIntensity={0.5}
                />
            </mesh>

            <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
                <torusGeometry args={[orbitRadius * 0.7, 0.015, 16, 100]} />
                <meshStandardMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.3}
                    emissive="#22d3ee"
                    emissiveIntensity={0.4}
                />
            </mesh>

            {/* Orbiting tech spheres */}
            <group ref={orbitRef}>
                {technologies.map((tech, i) => {
                    const x = Math.cos(tech.angle) * orbitRadius;
                    const z = Math.sin(tech.angle) * orbitRadius;

                    return (
                        <group key={tech.name} position={[x, 0, z]}>
                            {/* Tech sphere */}
                            <Sphere args={[0.4, 32, 32]}>
                                <meshStandardMaterial
                                    color={tech.color}
                                    emissive={tech.color}
                                    emissiveIntensity={0.4}
                                    metalness={0.7}
                                    roughness={0.2}
                                />
                            </Sphere>

                            {/* Tech label */}
                            <Text
                                position={[0, 0.7, 0]}
                                fontSize={0.25}
                                color="#ffffff"
                                anchorX="center"
                                anchorY="middle"
                                outlineWidth={0.02}
                                outlineColor="#000000"
                            >
                                {tech.name}
                            </Text>

                            {/* Small glow */}
                            <pointLight position={[0, 0, 0]} intensity={0.3} color={tech.color} distance={2} />
                        </group>
                    );
                })}
            </group>
        </group>
    );
}
