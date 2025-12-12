"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import * as THREE from "three";

const technologies = [
    { name: "Angular", color: "#61dafb", angle: 0 },
    { name: "React", color: "#3178c6", angle: Math.PI * 0.4 },
    { name: "Next", color: "#ffffff", angle: Math.PI * 0.8 },
    { name: "TypeScript", color: "#000000", angle: Math.PI * 1.2 },
    { name: "Node", color: "#68a063", angle: Math.PI * 1.6 },
];

export function TechOrbit() {
    const groupRef = useRef<THREE.Group>(null);
    const orbitRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current || !orbitRef.current) return;

        const time = state.clock.getElapsedTime();

        // Slow orbit rotation
        orbitRef.current.rotation.y = time * 0.2;
        orbitRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

        // Floating effect for the whole group
        groupRef.current.position.y = Math.sin(time * 0.3) * 0.1 - 2;
    });

    const orbitRadius = 3;

    return (
        <group ref={groupRef} position={[-4, -2, 0]}>
            {/* Central sphere */}
            <Sphere args={[0.5, 32, 32]}>
                <meshStandardMaterial
                    color="#6366f1"
                    emissive="#6366f1"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Sphere>

            {/* Glow */}
            <pointLight position={[0, 0, 0]} intensity={1} color="#6366f1" distance={3} />

            {/* Orbit ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[orbitRadius, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.3}
                    emissive="#6366f1"
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* Orbiting tech balls */}
            <group ref={orbitRef}>
                {technologies.map((tech, i) => {
                    const x = Math.cos(tech.angle) * orbitRadius;
                    const z = Math.sin(tech.angle) * orbitRadius;

                    return (
                        <group key={tech.name} position={[x, 0, z]}>
                            {/* Tech ball */}
                            <Sphere args={[0.35, 32, 32]}>
                                <meshStandardMaterial
                                    color={tech.color}
                                    emissive={tech.color}
                                    emissiveIntensity={0.3}
                                    metalness={0.6}
                                    roughness={0.3}
                                />
                            </Sphere>

                            {/* Tech label */}
                            <Text
                                position={[0, 0.6, 0]}
                                fontSize={0.2}
                                color="#ffffff"
                                anchorX="center"
                                anchorY="middle"
                                font="/fonts/JetBrainsMono-Regular.woff"
                            >
                                {tech.name}
                            </Text>
                        </group>
                    );
                })}
            </group>
        </group>
    );
}
