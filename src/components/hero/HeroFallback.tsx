export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(242,185,75,0.18), transparent 60%), radial-gradient(circle at 80% 70%, rgba(45,212,191,0.14), transparent 55%)",
      }}
    />
  );
}
