import Section from "@/components/Section";
import SubjectGrid from "@/components/SubjectGrid";
import { oLevelSubjects } from "@/lib/subjects";

export default function OLevelSubjectsPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">O Level Subjects</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Placeholder text introducing the full range of O Level subjects we
        teach at Forte Institute.
      </p>
      <div className="mt-12">
        <SubjectGrid level="o-level" subjects={oLevelSubjects} />
      </div>
    </Section>
  );
}
