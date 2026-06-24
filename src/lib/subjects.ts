export type Level = "o-level" | "a-level";

export interface SubjectSummary {
  slug: string;
  name: string;
}

export interface SubjectDetail extends SubjectSummary {
  syllabusCode: string;
  overview: string;
  topics: string[];
  teacher: string;
  format: string;
}

export const levelLabels: Record<Level, string> = {
  "o-level": "O Level",
  "a-level": "A Level",
};

export const oLevelSubjects: SubjectSummary[] = [
  { slug: "physics", name: "Physics" },
  { slug: "chemistry", name: "Chemistry" },
  { slug: "biology", name: "Biology" },
  { slug: "mathematics", name: "Mathematics" },
  { slug: "additional-mathematics", name: "Additional Mathematics" },
  { slug: "business-studies", name: "Business Studies" },
  { slug: "economics", name: "Economics" },
  { slug: "english", name: "English" },
  { slug: "computer-science", name: "Computer Science" },
];

export const aLevelSubjects: SubjectSummary[] = [
  { slug: "physics", name: "Physics" },
  { slug: "chemistry", name: "Chemistry" },
  { slug: "biology", name: "Biology" },
  { slug: "mathematics", name: "Mathematics" },
  { slug: "additional-mathematics", name: "Additional Mathematics" },
  { slug: "business-studies", name: "Business Studies" },
  { slug: "economics", name: "Economics" },
  { slug: "english", name: "English" },
  { slug: "computer-science", name: "Computer Science" },
];

export const subjectsByLevel: Record<Level, SubjectSummary[]> = {
  "o-level": oLevelSubjects,
  "a-level": aLevelSubjects,
};

const subjectDetails: Record<Level, Record<string, SubjectDetail>> = {
  "o-level": {
    physics: {
      slug: "physics",
      name: "Physics",
      syllabusCode: "Placeholder Syllabus Code",
      overview:
        "Placeholder overview describing the O Level Physics syllabus, its structure, and what students will learn.",
      topics: [
        "Placeholder topic one",
        "Placeholder topic two",
        "Placeholder topic three",
        "Placeholder topic four",
      ],
      teacher: "Placeholder Teacher Name",
      format: "Placeholder format, e.g. twice weekly, 90 minute sessions",
    },
  },
  "a-level": {
    physics: {
      slug: "physics",
      name: "Physics",
      syllabusCode: "Placeholder Syllabus Code",
      overview:
        "Placeholder overview describing the A Level Physics syllabus, its structure, and what students will learn.",
      topics: [
        "Placeholder topic one",
        "Placeholder topic two",
        "Placeholder topic three",
        "Placeholder topic four",
      ],
      teacher: "Placeholder Teacher Name",
      format: "Placeholder format, e.g. twice weekly, 90 minute sessions",
    },
  },
};

export function getSubjectDetail(level: Level, slug: string): SubjectDetail {
  const existing = subjectDetails[level][slug];
  if (existing) return existing;

  const summary = subjectsByLevel[level].find((s) => s.slug === slug);
  const name = summary?.name ?? slug;

  return {
    slug,
    name,
    syllabusCode: "Coming Soon",
    overview: `Placeholder overview for ${name}. Detailed syllabus information coming soon.`,
    topics: ["Coming soon"],
    teacher: "Coming soon",
    format: "Coming soon",
  };
}
