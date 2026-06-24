import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";

const trustStats = [
  { value: "3", label: "Exam Boards Covered" },
  { value: "12+", label: "Years of Experience" },
  { value: "1,500+", label: "Students Taught" },
];

const journeyStages = [
  {
    step: "01",
    title: "Foundation",
    description:
      "We start by assessing each student's strengths and gaps to build a solid academic base.",
  },
  {
    step: "02",
    title: "Guidance",
    description:
      "Expert tutors provide structured, syllabus-aligned guidance tailored to every learner.",
  },
  {
    step: "03",
    title: "Practice",
    description:
      "Regular past-paper practice and mock exams sharpen exam technique and confidence.",
  },
  {
    step: "04",
    title: "Growth",
    description:
      "Continuous feedback and progress tracking turn steady effort into top results.",
  },
];

const subjectGroups = [
  {
    title: "O Level",
    description: "Comprehensive tuition across core and elective O Level subjects.",
    href: "/subjects/o-level",
  },
  {
    title: "A Level",
    description: "In-depth A Level coaching for AS and A2 examinations.",
    href: "/subjects/a-level",
  },
];

const resultStats = [
  { value: "98%", label: "Pass Rate" },
  { value: "76%", label: "A*/A Grades" },
  { value: "500+", label: "Top Grades Achieved" },
];

const testimonials = [
  {
    quote: "Placeholder testimonial text describing a great experience at Forte Institute.",
    name: "Student Name",
    detail: "O Level, Class of 2025",
  },
  {
    quote: "Placeholder testimonial text describing a great experience at Forte Institute.",
    name: "Student Name",
    detail: "A Level, Class of 2025",
  },
  {
    quote: "Placeholder testimonial text describing a great experience at Forte Institute.",
    name: "Parent Name",
    detail: "Parent of A Level Student",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 sm:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-6xl">
            Unlock Your Academic Potential at{" "}
            <span className="text-accent">Forte Institute</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Placeholder subheadline describing personalized O Level and A Level
            tuition designed to help every student achieve their best results.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Start Your Journey
            </Button>
          </div>
        </div>
      </Section>

      {/* Trust bar */}
      <Section surface>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {trustStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Journey narrative */}
      <Section>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">The Forte Journey</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text describing the four stages every student moves
          through on the way to academic success.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStages.map((stage) => (
            <Card key={stage.step}>
              <p className="font-heading text-sm font-semibold text-accent-teal">
                {stage.step}
              </p>
              <h3 className="mt-3 font-heading text-xl font-bold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{stage.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Subjects preview */}
      <Section surface>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Explore Subjects</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text inviting students to browse our O Level and A Level
          subject offerings.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {subjectGroups.map((group) => (
            <Link key={group.href} href={group.href} className="block">
              <Card className="h-full hover:border-accent/40">
                <h3 className="font-heading text-2xl font-bold text-ink">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{group.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-teal">
                  View subjects &rarr;
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Results snapshot */}
      <Section>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Results Snapshot</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {resultStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/results" variant="secondary">
            View Full Results
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section surface>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          What Our Students Say
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name + testimonial.detail}>
              <p className="text-sm text-ink-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 font-heading text-sm font-semibold text-ink">
                {testimonial.name}
              </p>
              <p className="text-xs text-ink-muted">{testimonial.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA + contact form */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Ready to Begin?
            </h2>
            <p className="mt-4 max-w-md text-ink-muted">
              Placeholder text encouraging students and parents to get in
              touch and start their journey with Forte Institute.
            </p>
          </div>
          <Card>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-ink-muted/20 bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-teal focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-ink-muted/20 bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-teal focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-lg border border-ink-muted/20 bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-teal focus:outline-none"
                />
              </div>
              <Button type="submit" variant="primary" className="mt-2">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
