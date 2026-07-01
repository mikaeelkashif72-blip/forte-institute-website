export type Level = "o-level" | "a-level";

export interface SubjectSummary {
  slug: string;
  name: string;
  code?: string;
  igcseCode?: string;
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
  { slug: "physics",                name: "Physics",                code: "5054", igcseCode: "0625" },
  { slug: "chemistry",              name: "Chemistry",              code: "5070", igcseCode: "0620" },
  { slug: "biology",                name: "Biology",                code: "5090", igcseCode: "0610" },
  { slug: "mathematics",            name: "Mathematics",            code: "4024", igcseCode: "0580" },
  { slug: "additional-mathematics", name: "Additional Mathematics", code: "4037", igcseCode: "0606" },
  { slug: "business-studies",       name: "Business Studies",       code: "7115", igcseCode: "0450" },
  { slug: "economics",              name: "Economics",              code: "2281", igcseCode: "0455" },
  { slug: "english",                name: "English",                code: "1123", igcseCode: "0500" },
  { slug: "computer-science",       name: "Computer Science",       code: "2210", igcseCode: "0478" },
  { slug: "islamiyat",              name: "Islamiyat",              code: "2058", igcseCode: "0493" },
  { slug: "pakistan-studies",       name: "Pakistan Studies",       code: "2059", igcseCode: "0448" },
  { slug: "urdu",                   name: "Urdu (Syllabus A & B)",  code: "3247 / 3248", igcseCode: "0539 / 0540" },
];

export const aLevelSubjects: SubjectSummary[] = [
  { slug: "physics", name: "Physics", code: "9702" },
  { slug: "chemistry", name: "Chemistry", code: "9701" },
  { slug: "biology", name: "Biology", code: "9700" },
  { slug: "mathematics", name: "Mathematics", code: "9709" },
  { slug: "further-mathematics", name: "Further Mathematics", code: "9231" },
  { slug: "business-studies", name: "Business", code: "9609" },
  { slug: "economics", name: "Economics", code: "9708" },
  { slug: "english", name: "English Language", code: "9093" },
  { slug: "computer-science", name: "Computer Science", code: "9618" },
  { slug: "accounting", name: "Accounting", code: "9706" },
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
