"use client";

// Ambient background: real Cambridge O/A Level equations drifting as faint
// watermarks. Each row moves at a unique speed for a parallax depth effect.
// Fully disabled under prefers-reduced-motion (rows render static instead).

const EQUATIONS = [
  "x = (−b ± √(b² − 4ac)) / 2a",
  "∫ u dv = uv − ∫ v du",
  "d/dx [f(g(x))] = f′(g(x)) · g′(x)",
  "eⁱᵖ + 1 = 0",
  "sin²θ + cos²θ = 1",
  "(a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ",
  "lim(h→0) [f(x+h) − f(x)] / h = f′(x)",
  "P(A|B) = P(B|A) · P(A) / P(B)",
  "∇²ψ + (2m/ℏ²)(E − V)ψ = 0",
  "F = G(m₁m₂ / r²)",
  "E = mc²",
  "∮ E · dA = Q / ε₀",
  "Σ P(xᵢ) = 1",
  "log_b(xy) = log_b x + log_b y",
  "det(A) = a(ei−fh) − b(di−fg) + c(dh−eg)",
];

// Each row: [topPercent, durationSeconds, direction, equationIndices, opacity]
const ROWS: [number, number, 1 | -1, number[], number][] = [
  [6,   260, 1,  [0, 4, 8,  12], 0.09],
  [16,  340, -1, [1, 5, 9,  13], 0.07],
  [26,  300, 1,  [2, 6, 10, 14], 0.08],
  [38,  380, -1, [3, 7, 11,  0], 0.06],
  [50,  240, 1,  [4, 8, 12,  1], 0.09],
  [62,  320, -1, [5, 9, 13,  2], 0.07],
  [74,  360, 1,  [6, 10, 14, 3], 0.07],
  [86,  280, -1, [7, 11, 0,  4], 0.08],
];

export function MathBg() {
  return (
    <>
      <style>{`
        @keyframes drift-right {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes drift-left {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .math-row { animation: none !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {ROWS.map(([top, duration, dir, indices, opacity], rowIdx) => {
          const text = indices
            .map((i) => EQUATIONS[i % EQUATIONS.length])
            .join("     ·     ");
          // 3 copies is enough to fill any viewport; double for seamless loop
          const fill = Array(3).fill(text).join("     ·     ");
          const repeated = `${fill}     ·     ${fill}`;
          const animName = dir === 1 ? "drift-right" : "drift-left";

          return (
            <div
              key={rowIdx}
              className="math-row absolute left-0 whitespace-nowrap"
              style={{
                top: `${top}%`,
                opacity,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                color: "#ffffff",
                animation: `${animName} ${duration}s linear infinite`,
              }}
            >
              {repeated}
            </div>
          );
        })}
      </div>
    </>
  );
}
