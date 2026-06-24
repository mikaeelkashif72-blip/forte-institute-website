import Section from "@/components/Section";
import SubjectGrid from "@/components/SubjectGrid";
import { aLevelSubjects } from "@/lib/subjects";

export default function ALevelSubjectsPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">A Level Subjects</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Placeholder text introducing the full range of A Level subjects we
        teach at Forte Institute.
      </p>
      <div className="mt-12">
        <SubjectGrid level="a-level" subjects={aLevelSubjects} />
      </div>
    </Section>
  );
}
