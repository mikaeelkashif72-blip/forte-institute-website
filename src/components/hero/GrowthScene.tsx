"use client";

import { Canvas } from "@react-three/fiber";
import GrowingStructure from "./growth/GrowingStructure";

export default function GrowthScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2.1, 8.4], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={3.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 3, -4]} intensity={1.2} color="#2DD4BF" />
      <directionalLight position={[0, -2, 6]} intensity={0.4} color="#FFFFFF" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <shadowMaterial opacity={0.12} />
      </mesh>
      <GrowingStructure stage={4} />
    </Canvas>
  );
}
