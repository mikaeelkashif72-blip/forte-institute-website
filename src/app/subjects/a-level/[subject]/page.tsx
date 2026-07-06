import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { aLevelSubjects, getSubjectDetail } from "@/lib/subjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SubjectDetailPage } from "@/components/SubjectDetailPage";

export function generateStaticParams() {
  return aLevelSubjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { subject: string };
}): Promise<Metadata> {
  const detail = getSubjectDetail("a-level", params.subject);
  const summary = aLevelSubjects.find((s) => s.slug === params.subject);
  if (!summary) return {};

  const name = detail?.name ?? summary.name;
  const code = summary.code ?? "";
  const title = `A Level ${name} Tuition in Pakistan (${code}) | Forte Institute`;
  const description = `Expert Cambridge A Level ${name} tuition in Pakistan — in class and online. Small batches, past paper intensive, consistent A* results. Cambridge syllabus ${code}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default function ALevelSubjectDetailPage({
  params,
}: {
  params: { subject: string };
}) {
  const summary = aLevelSubjects.find((s) => s.slug === params.subject);
  if (!summary) notFound();

  const detail = getSubjectDetail("a-level", params.subject);
  if (!detail) notFound();

  return (
    <>
      <Header />
      <SubjectDetailPage subject={detail} level="a-level" />
      <Footer />
    </>
  );
}
