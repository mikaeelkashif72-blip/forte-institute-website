"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";

const inputClasses =
  "mt-2 w-full rounded-lg border border-ink-muted/20 bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-terracotta focus:outline-none";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  level: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  level: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.level) errors.level = "Select a level.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="text-4xl">✅</span>
        <h3 className="mt-4 font-heading text-xl font-bold text-ink">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClasses}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClasses}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="03XX XXXXXXX"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={inputClasses}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="level" className="text-sm font-medium text-ink">
            Level
          </label>
          <select
            id="level"
            value={values.level}
            onChange={(e) => handleChange("level", e.target.value)}
            className={inputClasses}
          >
            <option value="">Select level</option>
            <option value="o-level">O Level</option>
            <option value="a-level">A Level</option>
          </select>
          {errors.level && <p className="mt-1 text-xs text-red-400">{errors.level}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium text-ink">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Physics"
            value={values.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={inputClasses}
          />
          {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can we help?"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={inputClasses}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" className="mt-2">
        Send Message
      </Button>
    </form>
  );
}
