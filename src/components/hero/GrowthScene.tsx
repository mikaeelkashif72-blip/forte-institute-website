"use client";

import { Canvas } from "@react-three/fiber";
import GrowingStructure from "./growth/GrowingStructure";

export default function GrowthScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 1.6, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} color="#C9971F" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <shadowMaterial opacity={0.12} />
      </mesh>
      <GrowingStructure stage={4} />
    </Canvas>
  );
}
