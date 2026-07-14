"use client";

const ITEMS: { stat: string; label: string }[] = [
  { stat: "500+",  label: "Students Taught" },
  { stat: "200+",  label: "A* Grades Achieved" },
  { stat: "98%",   label: "Pass Rate" },
  { stat: "25+",   label: "Subjects Covered" },
  { stat: "#1",    label: "Cambridge Tutors in Pakistan" },
  { stat: "150+",  label: "World-Class Results" },
  { stat: "5★",    label: "Rated by Students" },
  { stat: "3+",    label: "Years of Excellence" },
];

export function TrustStrip() {
  return (
    <>
      <style>{`
        @keyframes trust-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .trust-track {
          animation: trust-scroll 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-track { animation: none; }
        }
      `}</style>

      <div
        aria-label="What we offer"
        className="border-y border-glass-border overflow-hidden py-3"
      >
        <div className="trust-track flex whitespace-nowrap">
          {[0, 1].map((setIdx) => (
            <div key={setIdx} className="flex items-center shrink-0" aria-hidden={setIdx === 1 ? "true" : undefined}>
              {ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center shrink-0">
                  <span className="px-8 flex items-baseline gap-2">
                    <span className="text-base font-bold text-paper">{item.stat}</span>
                    <span className="text-sm font-medium text-mist">{item.label}</span>
                  </span>
                  <span className="text-yellow text-[10px] leading-none" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
