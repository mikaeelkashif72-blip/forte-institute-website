"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import type { Group } from "three";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const shapes = [
  { geometry: "icosahedron", position: [0, 0.4, 0] as const, scale: 1.4, color: "#8B5CF6" },
  { geometry: "torus", position: [-2.1, -0.6, -1] as const, scale: 0.9, color: "#22D3EE" },
  { geometry: "octahedron", position: [2, -0.2, -0.5] as const, scale: 1, color: "#A78BFA" },
];

function GlassShape({
  geometry,
  position,
  scale,
  color,
}: {
  geometry: string;
  position: readonly [number, number, number];
  scale: number;
  color: string;
}) {
  const reducedMotion = prefersReducedMotion();

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.6}
      floatIntensity={reducedMotion ? 0 : 1.2}
    >
      <mesh position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.9, 0.32, 32, 100]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        <MeshTransmissionMaterial
          color={color}
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.06}
          samples={6}
          resolution={512}
          backside
        />
      </mesh>
    </Float>
  );
}

function Cluster() {
  const groupRef = useRef<Group>(null);
  const reducedMotion = prefersReducedMotion();

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    const { pointer } = state;
    groupRef.current.rotation.y += (pointer.x * 0.4 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (pointer.y * 0.2 - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape) => (
        <GlassShape key={shape.geometry} {...shape} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={4} color="#22D3EE" />
      <pointLight position={[-4, -2, 2]} intensity={4} color="#8B5CF6" />
      <Environment preset="night" />
      <Cluster />
    </Canvas>
  );
}
