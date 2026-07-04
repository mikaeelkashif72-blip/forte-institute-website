import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LiveClassesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold text-paper">Live Classes</h1>
          <p className="mt-4 text-mist">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
