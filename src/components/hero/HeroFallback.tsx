export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(242,185,75,0.16), transparent 55%), radial-gradient(circle at 80% 75%, rgba(45,212,191,0.10), transparent 60%), linear-gradient(135deg, #0B0E14, #11151F)",
      }}
    />
  );
}
