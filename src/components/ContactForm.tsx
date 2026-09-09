"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const FIELD_CLASS =
  "w-full rounded-lg border-3 border-ink bg-paper px-3.5 py-2.5 font-sans text-[14px] text-ink placeholder:text-ink-dim focus:outline-none focus:ring-0";

const LABEL_CLASS =
  "mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-label text-ink-muted";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [hasHandedOff, setHasHandedOff] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Contact from portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

    // This form hands off to the visitor's mail client; it never sends anything
    // itself. We can't observe whether that succeeded, so we don't claim it did
    // — we just surface the fallback address.
    setHasHandedOff(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASS}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={FIELD_CLASS}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL_CLASS}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={FIELD_CLASS}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className={LABEL_CLASS}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="What's this about?"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${FIELD_CLASS} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full border-3 border-ink bg-ink px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-label text-paper transition-colors duration-150 hover:bg-paper hover:text-ink"
      >
        Compose message
      </button>

      <p
        className="mt-4 font-sans text-xs leading-relaxed text-ink-dim"
        aria-live="polite"
      >
        {hasHandedOff
          ? "Your email client should have opened. "
          : "This opens your email client. "}
        You can also reach me directly at{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-ink underline underline-offset-2"
        >
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
