"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { STAGES, type GrowthBranch, type GrowthNode, type StageNumber } from "./growthStages";

const GREEN = "#1F4D3D";
const GOLD = "#C9971F";

function Branch({ from, to, radius }: GrowthBranch) {
  const { midpoint, quaternion, length } = useMemo(() => {
    const start = new THREE.Vector3(...from);
    const end = new THREE.Vector3(...to);
    const direction = new THREE.Vector3().subVectors(end, start);
    return {
      midpoint: new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5),
      quaternion: new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize(),
      ),
      length: direction.length(),
    };
  }, [from, to]);

  return (
    <mesh position={midpoint} quaternion={quaternion} castShadow receiveShadow>
      <cylinderGeometry args={[radius * 0.55, radius, length, 6]} />
      <meshStandardMaterial color={GREEN} roughness={0.55} metalness={0.1} />
    </mesh>
  );
}

function Node({ position, radius, gold }: GrowthNode) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <icosahedronGeometry args={[radius, 0]} />
      <meshStandardMaterial
        color={gold ? GOLD : GREEN}
        roughness={0.35}
        metalness={gold ? 0.4 : 0.15}
        flatShading
      />
    </mesh>
  );
}

interface GrowingStructureProps {
  stage?: StageNumber;
}

export default function GrowingStructure({ stage = 4 }: GrowingStructureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const config = STAGES[stage];

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[config.core.radius, 0]} />
        <meshStandardMaterial
          color={config.core.gold ? GOLD : GREEN}
          roughness={0.35}
          metalness={0.15}
          flatShading
        />
      </mesh>
      {config.branches.map((branch, index) => (
        <Branch key={index} from={branch.from} to={branch.to} radius={branch.radius} />
      ))}
      {config.nodes.map((node, index) => (
        <Node key={index} position={node.position} radius={node.radius} gold={node.gold} />
      ))}
    </group>
  );
}
