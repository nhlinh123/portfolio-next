"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Line } from "@react-three/drei";
import * as THREE from "three";

export function ParallaxGrid() {
    const gridRef = useRef<THREE.Group>(null);
    const scroll = useScroll();

    // Create grid lines
    const gridLines = useMemo(() => {
        const lines: { points: [number, number, number][]; type: 'h' | 'v' }[] = [];
        const size = 60;
        const divisions = 30;
        const step = size / divisions;

        // Horizontal lines
        for (let i = -divisions / 2; i <= divisions / 2; i++) {
            lines.push({
                points: [
                    [-size / 2, -5, i * step - 40],
                    [size / 2, -5, i * step - 40],
                ],
                type: 'h',
            });
        }

        // Vertical lines
        for (let i = -divisions / 2; i <= divisions / 2; i++) {
            lines.push({
                points: [
                    [i * step, -5, -size - 40],
                    [i * step, -5, -40],
                ],
                type: 'v',
            });
        }

        return lines;
    }, []);

    useFrame((state) => {
        if (!gridRef.current) return;

        const scrollOffset = scroll.offset;

        // Grid moves with scroll
        gridRef.current.position.z = scrollOffset * 50;
    });

    return (
        <group ref={gridRef}>
            {gridLines.map((line, i) => (
                <Line
                    key={i}
                    points={line.points}
                    color={line.type === 'h' ? "#6366f1" : "#22d3ee"}
                    opacity={0.15}
                    transparent
                    lineWidth={1}
                />
            ))}

            {/* Horizon fog effect */}
            <mesh position={[0, -5, -60]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 40]} />
                <meshBasicMaterial
                    color="#0a0a0f"
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    );
}
