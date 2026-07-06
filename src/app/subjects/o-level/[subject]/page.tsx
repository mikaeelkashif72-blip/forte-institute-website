import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { oLevelSubjects, getSubjectDetail } from "@/lib/subjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SubjectDetailPage } from "@/components/SubjectDetailPage";

export function generateStaticParams() {
  return oLevelSubjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { subject: string };
}): Promise<Metadata> {
  const detail = getSubjectDetail("o-level", params.subject);
  const summary = oLevelSubjects.find((s) => s.slug === params.subject);
  if (!summary) return {};

  const name = detail?.name ?? summary.name;
  const code = summary.code ?? "";
  const title = `O Level ${name} Tuition in Pakistan (${code}) | Forte Institute`;
  const description = `Expert Cambridge O Level ${name} tuition in Pakistan — in class and online. Small batches, past paper intensive, consistent A* results. Cambridge syllabus ${code}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default function OLevelSubjectDetailPage({
  params,
}: {
  params: { subject: string };
}) {
  const summary = oLevelSubjects.find((s) => s.slug === params.subject);
  if (!summary) notFound();

  const detail = getSubjectDetail("o-level", params.subject);
  if (!detail) notFound();

  return (
    <>
      <Header />
      <SubjectDetailPage subject={detail} level="o-level" />
      <Footer />
    </>
  );
}
