export interface StatItem {
  value: string;
  label: string;
}

export const resultStats: StatItem[] = [
  { value: "98%", label: "Overall Pass Rate" },
  { value: "76%", label: "A*/A Grades" },
  { value: "1,500+", label: "Students Taught" },
];

export interface GradeDistributionItem {
  grade: string;
  percentage: number;
}

export const gradeDistribution: GradeDistributionItem[] = [
  { grade: "A*", percentage: 38 },
  { grade: "A", percentage: 38 },
  { grade: "B", percentage: 16 },
  { grade: "C", percentage: 6 },
  { grade: "D or below", percentage: 2 },
];

export interface SuccessStory {
  name: string;
  subject: string;
  before: string;
  after: string;
  quote: string;
}

export const successStories: SuccessStory[] = [
  {
    name: "Hira S.",
    subject: "O Level Physics",
    before: "C",
    after: "A*",
    quote:
      "Placeholder quote describing how structured tutoring helped Hira turn around her Physics grade.",
  },
  {
    name: "Omar T.",
    subject: "A Level Mathematics",
    before: "B",
    after: "A",
    quote:
      "Placeholder quote describing how regular practice sessions boosted Omar's confidence and grade.",
  },
  {
    name: "Ayesha N.",
    subject: "O Level Chemistry",
    before: "D",
    after: "B",
    quote:
      "Placeholder quote describing how personalized attention helped Ayesha close her knowledge gaps.",
  },
  {
    name: "Zain K.",
    subject: "A Level Economics",
    before: "C",
    after: "A*",
    quote:
      "Placeholder quote describing how exam technique coaching helped Zain achieve a top grade.",
  },
];
