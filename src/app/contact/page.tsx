import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 max-w-md text-ink-muted">
              Placeholder text inviting students and parents to reach out
              with any questions about subjects, programs, or enrollment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Card>
              <ContactForm />
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section surface>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Find Us</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Placeholder text describing the Forte Institute campus location.
          </p>
          <div className="mt-8 flex h-80 w-full items-center justify-center rounded-2xl border border-border bg-background text-ink-muted">
            Map embed coming soon
          </div>
        </ScrollReveal>
      </Section>

      <WhatsAppButton />
    </>
  );
}
