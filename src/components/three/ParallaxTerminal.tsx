"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const codeLines = [
    "const developer = {",
    '  name: "Senior Dev",',
    '  passion: "Creating",',
    "  skills: [",
    '    "Angular",',
    '    "React",',
    '    "TypeScript",',
    '    "Three.js"',
    "  ],",
    '  status: "Available"',
    "};",
];

interface ParallaxTerminalProps {
    position?: [number, number, number];
}

export function ParallaxTerminal({ position = [4, 0, 0] }: ParallaxTerminalProps) {
    const groupRef = useRef<THREE.Group>(null);
    const scroll = useScroll();
    const cursorRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();
        const scrollOffset = scroll.offset;

        // Terminal fades out as we scroll
        const opacity = Math.max(0, 1 - scrollOffset * 3);
        groupRef.current.visible = opacity > 0.1;

        // Parallax rotation
        groupRef.current.rotation.y = scrollOffset * 0.5 + Math.sin(time * 0.3) * 0.05;
        groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.03;

        // Cursor blink
        if (cursorRef.current) {
            cursorRef.current.visible = Math.sin(time * 5) > 0;
        }
    });

    return (
        <group ref={groupRef} position={position}>
            {/* Terminal Background */}
            <RoundedBox args={[5, 4, 0.15]} radius={0.15} smoothness={4}>
                <meshStandardMaterial
                    color="#0d1117"
                    transparent
                    opacity={0.95}
                    metalness={0.3}
                    roughness={0.7}
                />
            </RoundedBox>

            {/* Glow behind terminal */}
            <mesh position={[0, 0, -0.2]}>
                <planeGeometry args={[6, 5]} />
                <meshBasicMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Terminal Header */}
            <RoundedBox
                position={[0, 1.7, 0.08]}
                args={[5, 0.5, 0.02]}
                radius={0.1}
                smoothness={4}
            >
                <meshStandardMaterial color="#161b22" />
            </RoundedBox>

            {/* Traffic lights */}
            <mesh position={[-2, 1.7, 0.12]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ff5f56" emissive="#ff5f56" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[-1.7, 1.7, 0.12]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ffbd2e" emissive="#ffbd2e" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[-1.4, 1.7, 0.12]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#27ca3f" emissive="#27ca3f" emissiveIntensity={0.8} />
            </mesh>

            {/* Title */}
            <Text
                position={[0.5, 1.7, 0.12]}
                fontSize={0.15}
                color="#8b949e"
                anchorX="center"
                anchorY="middle"
            >
                ~/portfolio — zsh
            </Text>

            {/* Code Lines */}
            {codeLines.map((line, i) => (
                <Text
                    key={i}
                    position={[-2.2, 1.2 - i * 0.28, 0.1]}
                    fontSize={0.15}
                    color={
                        line.includes("const") || line.includes("skills")
                            ? "#ff7b72"
                            : line.includes('"')
                                ? "#a5d6ff"
                                : line.includes("{") || line.includes("}") || line.includes("[") || line.includes("]") || line.includes(",")
                                    ? "#79c0ff"
                                    : "#c9d1d9"
                    }
                    anchorX="left"
                    anchorY="middle"
                >
                    {line}
                </Text>
            ))}

            {/* Cursor */}
            <mesh ref={cursorRef} position={[-2.2 + codeLines[codeLines.length - 1].length * 0.09, 1.2 - (codeLines.length - 1) * 0.28, 0.12]}>
                <boxGeometry args={[0.1, 0.18, 0.01]} />
                <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} />
            </mesh>

            {/* Terminal glow */}
            <pointLight position={[0, 0, 2]} intensity={0.5} color="#6366f1" distance={5} />
        </group>
    );
}
