"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";

/**
 * Replaces the centered gradient-underline block that was copy-pasted into
 * four sections. Left-aligned with a mono index — reads editorial rather than
 * marketing-page.
 */
export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...inView} variants={fadeUp} className="mb-14 md:mb-20">
      <div className="mb-5 flex items-center gap-4">
        <span className="label text-accent">{index}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-fg md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
