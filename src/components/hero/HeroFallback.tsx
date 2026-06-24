export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(45,106,79,0.16), transparent 55%), radial-gradient(circle at 80% 75%, rgba(193,105,60,0.12), transparent 60%)",
      }}
    />
  );
}
