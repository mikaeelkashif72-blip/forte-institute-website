import { notFound } from "next/navigation";
import { oLevelSubjects } from "@/lib/subjects";

export function generateStaticParams() {
  return oLevelSubjects.map((subject) => ({ subject: subject.slug }));
}

export default function OLevelSubjectDetailPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = oLevelSubjects.find((s) => s.slug === params.subject);
  if (!subject) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold">{subject.name}</h1>
      <p className="mt-4">Coming soon.</p>
    </div>
  );
}
