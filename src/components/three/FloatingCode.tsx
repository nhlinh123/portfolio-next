"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const codeLines = [
    "const developer = {",
    '  name: "Senior Dev",',
    '  passion: "Building",',
    "  skills: [",
    '    "React",',
    '    "TypeScript",',
    '    "Three.js"',
    "  ]",
    "};",
];

export function FloatingCode() {
    const groupRef = useRef<THREE.Group>(null);
    const terminalRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current || !terminalRef.current) return;

        const time = state.clock.getElapsedTime();

        // Floating animation
        groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
        groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
        groupRef.current.rotation.x = Math.cos(time * 0.4) * 0.05;
    });

    return (
        <group ref={groupRef} position={[4, 0, 0]}>
            <group ref={terminalRef}>
                {/* Terminal Background */}
                <RoundedBox
                    args={[4, 3, 0.1]}
                    radius={0.1}
                    smoothness={4}
                >
                    <meshStandardMaterial
                        color="#1a1a2e"
                        transparent
                        opacity={0.9}
                        metalness={0.5}
                        roughness={0.5}
                    />
                </RoundedBox>

                {/* Terminal Header */}
                <RoundedBox
                    position={[0, 1.3, 0.06]}
                    args={[4, 0.4, 0.02]}
                    radius={0.05}
                    smoothness={4}
                >
                    <meshStandardMaterial color="#2d2d44" />
                </RoundedBox>

                {/* Traffic lights */}
                <mesh position={[-1.6, 1.3, 0.1]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#ff5f56" emissive="#ff5f56" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[-1.35, 1.3, 0.1]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#ffbd2e" emissive="#ffbd2e" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[-1.1, 1.3, 0.1]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#27ca3f" emissive="#27ca3f" emissiveIntensity={0.5} />
                </mesh>

                {/* Code Lines */}
                {codeLines.map((line, i) => (
                    <Text
                        key={i}
                        position={[-1.8, 0.9 - i * 0.25, 0.1]}
                        fontSize={0.13}
                        color={
                            line.includes("const") || line.includes("skills")
                                ? "#c792ea"
                                : line.includes('"')
                                    ? "#c3e88d"
                                    : line.includes("{") || line.includes("}") || line.includes("[") || line.includes("]")
                                        ? "#89ddff"
                                        : "#eeffff"
                        }
                        anchorX="left"
                        anchorY="middle"
                        font="/fonts/JetBrainsMono-Regular.woff"
                    >
                        {line}
                    </Text>
                ))}

                {/* Cursor */}
                <mesh position={[-1.8 + codeLines[codeLines.length - 1].length * 0.078, 0.9 - (codeLines.length - 1) * 0.25, 0.1]}>
                    <boxGeometry args={[0.08, 0.15, 0.01]} />
                    <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} />
                </mesh>

                {/* Glow effect */}
                <pointLight position={[0, 0, 1]} intensity={0.5} color="#6366f1" distance={5} />
            </group>
        </group>
    );
}
