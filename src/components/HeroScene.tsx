"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import type { Group } from "three";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function useLowPower() {
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const update = () => setLowPower(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return lowPower;
}

const shapes = [
  { geometry: "icosahedron", position: [-3.6, 1.6, -2] as const, scale: 1.5, color: "#8B5CF6" },
  { geometry: "torus", position: [3.8, -1.4, -2.5] as const, scale: 1.2, color: "#22D3EE" },
  { geometry: "octahedron", position: [4, 2, -3] as const, scale: 1.1, color: "#A78BFA" },
];

function GlassShape({
  geometry,
  position,
  scale,
  color,
  lowPower,
}: {
  geometry: string;
  position: readonly [number, number, number];
  scale: number;
  color: string;
  lowPower: boolean;
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
        {lowPower ? (
          // Single-pass material: far cheaper than MeshTransmissionMaterial's
          // multi-pass refraction render, needed on phones where this scene
          // runs most often.
          <meshPhysicalMaterial
            color={color}
            roughness={0.15}
            transmission={0.9}
            thickness={0.6}
            ior={1.3}
          />
        ) : (
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
        )}
      </mesh>
    </Float>
  );
}

function Cluster({ lowPower }: { lowPower: boolean }) {
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
        <GlassShape key={shape.geometry} {...shape} lowPower={lowPower} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  const lowPower = useLowPower();
  const [ready, setReady] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={lowPower ? 1 : [1, 1.5]}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 600ms ease-out" }}
      onCreated={() => setReady(true)}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={4} color="#22D3EE" />
      <pointLight position={[-4, -2, 2]} intensity={4} color="#8B5CF6" />
      {!lowPower && <Environment preset="night" />}
      <Cluster lowPower={lowPower} />
    </Canvas>
  );
}
