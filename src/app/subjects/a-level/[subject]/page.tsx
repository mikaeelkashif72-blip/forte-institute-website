import { notFound } from "next/navigation";
import { aLevelSubjects } from "@/lib/subjects";

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
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold">{subject.name}</h1>
      <p className="mt-4">Coming soon.</p>
    </div>
  );
}
