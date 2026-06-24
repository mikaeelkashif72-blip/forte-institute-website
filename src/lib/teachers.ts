export interface Teacher {
  slug: string;
  name: string;
  qualification: string;
  subjects: string[];
  bio: string;
}

export const teachers: Teacher[] = [
  {
    slug: "sarah-khan",
    name: "Sarah Khan",
    qualification: "MSc Physics, 8 years teaching A Level",
    subjects: ["Physics", "Additional Mathematics"],
    bio: "Placeholder bio describing Sarah's teaching philosophy, her experience guiding A Level students through challenging Physics concepts, and her track record of helping students achieve top grades.",
  },
  {
    slug: "ahmed-raza",
    name: "Ahmed Raza",
    qualification: "BSc Chemistry, 6 years teaching O & A Level",
    subjects: ["Chemistry", "Biology"],
    bio: "Placeholder bio describing Ahmed's approach to making Chemistry and Biology accessible, his use of practical examples, and his dedication to building strong exam technique in his students.",
  },
  {
    slug: "fatima-ali",
    name: "Fatima Ali",
    qualification: "MSc Mathematics, 10 years teaching O & A Level",
    subjects: ["Mathematics", "Economics"],
    bio: "Placeholder bio describing Fatima's decade of experience teaching Mathematics and Economics, her structured approach to problem-solving, and her passion for mentoring students toward confidence in quantitative subjects.",
  },
  {
    slug: "bilal-hussain",
    name: "Bilal Hussain",
    qualification: "BSc Computer Science, 5 years teaching O & A Level",
    subjects: ["Computer Science", "Business Studies"],
    bio: "Placeholder bio describing Bilal's background in Computer Science, his hands-on teaching style, and his focus on helping students apply theory to real-world business and technology scenarios.",
  },
];
