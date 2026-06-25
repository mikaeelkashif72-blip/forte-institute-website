export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(124,92,255,0.22), transparent 55%), radial-gradient(circle at 80% 75%, rgba(198,241,53,0.10), transparent 60%), linear-gradient(135deg, #0D0E12, #15171D)",
      }}
    />
  );
}
