"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { GlobeIcon } from "../os/Icons";
import {
  TwoPane,
  PaneHeading,
  PaneList,
  PaneListItem,
  DisplayTitle,
  MetaLine,
  Prose,
} from "./parts";

export default function ProjectsWindow() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  return (
    <TwoPane
      sidebar={
        <>
          <PaneHeading>Projects</PaneHeading>
          <PaneList>
            {PROJECTS.map((p, i) => (
              <PaneListItem
                key={p.title}
                label={p.title}
                meta={p.category}
                isSelected={i === index}
                onSelect={() => setIndex(i)}
              />
            ))}
          </PaneList>
        </>
      }
    >
      <DisplayTitle title={project.title} subtitle={project.category} />
      <Prose>{project.description}</Prose>
      <MetaLine items={project.tech} />

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2.5 rounded-full border-3 border-ink px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-label transition-colors duration-150 hover:bg-ink hover:text-paper"
      >
        <GlobeIcon className="h-4 w-4" />
        Open site
      </a>

      {/* A window inside a window. The screenshots are 1400×757, so the frame
          is landscape to match — a portrait crop would upscale a thin strip of
          each site's header and show almost nothing. */}
      <figure className="mt-7 max-w-[440px] overflow-hidden rounded-[16px] border-3 border-ink bg-paper-sunk">
        <figcaption className="flex items-center gap-3 border-b-3 border-ink px-3 py-2">
          <span
            aria-hidden
            className="h-3.5 w-3.5 shrink-0 rounded-full border-[2.5px] border-ink"
          />
          <span aria-hidden className="titlebar-stripes h-2.5 flex-1" />
          <span className="shrink-0 font-sans text-[10px] uppercase tracking-label text-ink-muted">
            {project.title}
          </span>
        </figcaption>
        <div className="relative aspect-[1400/757] w-full">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 92vw, 700px"
            className="object-cover object-top"
            priority={index === 0}
          />
        </div>
      </figure>
    </TwoPane>
  );
}
