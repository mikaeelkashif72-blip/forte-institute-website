export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(201,151,31,0.14), transparent 55%), radial-gradient(circle at 80% 75%, rgba(201,151,31,0.08), transparent 60%), linear-gradient(135deg, #FAF8F3, #F2EFE7)",
      }}
    />
  );
}
