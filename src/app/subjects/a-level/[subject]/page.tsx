import { notFound } from "next/navigation";
import { aLevelSubjects } from "@/lib/subjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return aLevelSubjects.map((subject) => ({ subject: subject.slug }));
}

export default function ALevelSubjectDetailPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = aLevelSubjects.find((s) => s.slug === params.subject);
  if (!subject) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold text-paper">{subject.name}</h1>
          <p className="mt-4 text-mist">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
