export type Level = "o-level" | "a-level";

export interface SubjectSummary {
  slug: string;
  name: string;
  code?: string;
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
  { slug: "physics", name: "Physics", code: "5054" },
  { slug: "chemistry", name: "Chemistry", code: "5070" },
  { slug: "biology", name: "Biology", code: "5090" },
  { slug: "mathematics", name: "Mathematics", code: "4024" },
  { slug: "additional-mathematics", name: "Additional Mathematics", code: "4037" },
  { slug: "business-studies", name: "Business Studies", code: "7115" },
  { slug: "economics", name: "Economics", code: "2281" },
  { slug: "english", name: "English", code: "1123" },
  { slug: "computer-science", name: "Computer Science", code: "2210" },
  { slug: "islamiyat", name: "Islamiyat", code: "2058" },
  { slug: "pakistan-studies", name: "Pakistan Studies", code: "2059" },
  { slug: "urdu", name: "Urdu (Syllabus A & B)", code: "3247 / 3248" },
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
