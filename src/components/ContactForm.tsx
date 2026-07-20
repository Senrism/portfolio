"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { SITE } from "@/lib/site";
import { fadeUp, inView } from "@/lib/motion";

const FIELD_CLASS =
  "w-full rounded-md border border-white/[0.08] bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-dim transition-colors duration-300 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30";

const LABEL_CLASS = "label mb-2 block";

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
    <motion.form
      {...inView}
      variants={fadeUp}
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="grid gap-5 sm:grid-cols-2">
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

      <div className="mt-5">
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

      <div className="mt-5">
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${FIELD_CLASS} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="group mt-6 flex items-center gap-2.5 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-accent-dim"
      >
        <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
        Compose message
      </button>

      <p className="mt-4 text-xs leading-relaxed text-fg-dim" aria-live="polite">
        {hasHandedOff
          ? "Your email client should have opened. "
          : "This opens your email client. "}
        You can also reach me directly at{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="text-fg-muted underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent"
        >
          {SITE.email}
        </a>
        .
      </p>
    </motion.form>
  );
}
