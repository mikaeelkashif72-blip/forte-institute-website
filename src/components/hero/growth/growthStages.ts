export type StageNumber = 1 | 2 | 3 | 4;

export interface GrowthNode {
  position: [number, number, number];
  radius: number;
  gold?: boolean;
}

export interface GrowthBranch {
  from: [number, number, number];
  to: [number, number, number];
  radius: number;
}

export interface GrowthStageConfig {
  core: { radius: number; gold?: boolean };
  branches: GrowthBranch[];
  nodes: GrowthNode[];
}

const ORIGIN: [number, number, number] = [0, 0, 0];

export const STAGES: Record<StageNumber, GrowthStageConfig> = {
  // Foundation: a single small seed, mostly green, minimal facets.
  1: {
    core: { radius: 0.3 },
    branches: [],
    nodes: [],
  },

  // Guidance: a few short branches appear, the seed grows slightly.
  2: {
    core: { radius: 0.36 },
    branches: [
      { from: ORIGIN, to: [0.7, 0.9, 0.2], radius: 0.06 },
      { from: ORIGIN, to: [-0.6, 0.85, -0.3], radius: 0.06 },
      { from: ORIGIN, to: [0.1, 1.0, 0.7], radius: 0.05 },
    ],
    nodes: [
      { position: [0.7, 0.9, 0.2], radius: 0.16 },
      { position: [-0.6, 0.85, -0.3], radius: 0.15 },
      { position: [0.1, 1.0, 0.7], radius: 0.13 },
    ],
  },

  // Practice: more branches, gold starts appearing on a few facets.
  3: {
    core: { radius: 0.42 },
    branches: [
      { from: ORIGIN, to: [0.8, 1.1, 0.25], radius: 0.065 },
      { from: ORIGIN, to: [-0.75, 1.05, -0.35], radius: 0.065 },
      { from: ORIGIN, to: [0.15, 1.25, 0.8], radius: 0.055 },
      { from: ORIGIN, to: [-0.3, 1.3, -0.75], radius: 0.055 },
      { from: ORIGIN, to: [1.0, 0.5, -0.8], radius: 0.05 },
      { from: [0.8, 1.1, 0.25], to: [1.4, 1.6, 0.5], radius: 0.04 },
    ],
    nodes: [
      { position: [0.8, 1.1, 0.25], radius: 0.18, gold: true },
      { position: [-0.75, 1.05, -0.35], radius: 0.17 },
      { position: [0.15, 1.25, 0.8], radius: 0.15, gold: true },
      { position: [-0.3, 1.3, -0.75], radius: 0.14 },
      { position: [1.0, 0.5, -0.8], radius: 0.13 },
      { position: [1.4, 1.6, 0.5], radius: 0.11, gold: true },
    ],
  },

  // Growth: the full, complex structure with prominent gold highlights.
  4: {
    core: { radius: 0.5 },
    branches: [
      { from: ORIGIN, to: [0.9, 1.3, 0.3], radius: 0.07 },
      { from: ORIGIN, to: [-0.8, 1.2, -0.4], radius: 0.07 },
      { from: ORIGIN, to: [0.2, 1.5, 0.9], radius: 0.06 },
      { from: ORIGIN, to: [-0.3, 1.6, -0.8], radius: 0.06 },
      { from: ORIGIN, to: [1.1, 0.6, -0.9], radius: 0.06 },
      { from: ORIGIN, to: [-1.0, 0.5, 1.0], radius: 0.06 },
      { from: [0.9, 1.3, 0.3], to: [1.6, 1.9, 0.6], radius: 0.05 },
      { from: [-0.8, 1.2, -0.4], to: [-1.4, 1.7, -0.9], radius: 0.05 },
      { from: [0.2, 1.5, 0.9], to: [0.6, 2.1, 1.3], radius: 0.045 },
      { from: [-0.3, 1.6, -0.8], to: [-0.7, 2.2, -1.1], radius: 0.045 },
    ],
    nodes: [
      { position: [0.9, 1.3, 0.3], radius: 0.22, gold: true },
      { position: [-0.8, 1.2, -0.4], radius: 0.2 },
      { position: [0.2, 1.5, 0.9], radius: 0.18, gold: true },
      { position: [-0.3, 1.6, -0.8], radius: 0.17 },
      { position: [1.1, 0.6, -0.9], radius: 0.16, gold: true },
      { position: [-1.0, 0.5, 1.0], radius: 0.15 },
      { position: [1.6, 1.9, 0.6], radius: 0.14, gold: true },
      { position: [-1.4, 1.7, -0.9], radius: 0.13 },
      { position: [0.6, 2.1, 1.3], radius: 0.12, gold: true },
      { position: [-0.7, 2.2, -1.1], radius: 0.11, gold: true },
    ],
  },
};
