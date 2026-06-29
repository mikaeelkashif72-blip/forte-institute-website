import Header from "@/components/Header";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-void">
        {/* Section 1: immersive hero — one idea, nothing competing for attention */}
        <section className="relative min-h-[calc(100vh-73px)]">
          <div className="absolute inset-0">
            <InfiniteGrid />
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-xs uppercase tracking-widest text-mist motion-reduce:animate-none"
          >
            Scroll
          </div>
        </section>
      </main>
    </>
  );
}
