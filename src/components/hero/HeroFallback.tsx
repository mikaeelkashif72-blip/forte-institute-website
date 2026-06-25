export default function HeroFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(52,84,209,0.14), transparent 55%), radial-gradient(circle at 80% 75%, rgba(255,107,91,0.10), transparent 60%), linear-gradient(135deg, #F7F5F1, #ECE7DE)",
      }}
    />
  );
}
