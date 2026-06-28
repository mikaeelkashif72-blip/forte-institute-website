"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function DriftingIcosahedron() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { pointer, clock } = state;
    meshRef.current.rotation.x = clock.elapsedTime * 0.08 + pointer.y * 0.15;
    meshRef.current.rotation.y = clock.elapsedTime * 0.1 + pointer.x * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial color="#C8932A" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={0.8} color="#C8932A" />
      <DriftingIcosahedron />
    </Canvas>
  );
}
