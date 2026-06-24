export interface Program {
  slug: string;
  title: string;
  description: string;
  format: string;
  pricing: string;
}

export const programs: Program[] = [
  {
    slug: "group-classes",
    title: "Group Classes",
    description:
      "Placeholder description of small-group classes that combine focused teaching with peer learning and discussion.",
    format: "4-6 students, twice weekly, in-person",
    pricing: "Contact for pricing",
  },
  {
    slug: "one-on-one-tutoring",
    title: "1-on-1 Tutoring",
    description:
      "Placeholder description of fully personalized tutoring sessions tailored to each student's pace and goals.",
    format: "1 student, flexible scheduling, in-person or online",
    pricing: "Contact for pricing",
  },
  {
    slug: "online-classes",
    title: "Online Classes",
    description:
      "Placeholder description of live online classes that bring the same structured curriculum to students anywhere.",
    format: "Small group, twice weekly, live online",
    pricing: "Contact for pricing",
  },
  {
    slug: "mock-exam-bootcamps",
    title: "Mock Exam & Revision Bootcamps",
    description:
      "Placeholder description of intensive revision bootcamps with timed mock exams and detailed feedback before the real thing.",
    format: "Intensive sessions, weekends, in-person",
    pricing: "Contact for pricing",
  },
];
