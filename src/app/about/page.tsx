import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold text-ink">About</h1>
          <p className="mt-4 text-ink-60">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
