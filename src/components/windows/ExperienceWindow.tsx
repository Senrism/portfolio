"use client";

import { useState } from "react";
import { EXPERIENCES } from "@/data/experience";
import {
  TwoPane,
  PaneHeading,
  PaneList,
  PaneListItem,
  DisplayTitle,
  MetaLine,
  Prose,
  RuleList,
} from "./parts";

export default function ExperienceWindow() {
  const [index, setIndex] = useState(0);
  const role = EXPERIENCES[index];

  return (
    <TwoPane
      sidebar={
        <>
          <PaneHeading>Work history</PaneHeading>
          <PaneList>
            {EXPERIENCES.map((exp, i) => (
              <PaneListItem
                key={`${exp.company}-${exp.period}`}
                label={exp.company}
                meta={exp.period}
                isSelected={i === index}
                onSelect={() => setIndex(i)}
              />
            ))}
          </PaneList>
        </>
      }
    >
      <DisplayTitle title={role.title} subtitle={role.company} />
      <MetaLine items={[role.period]} />
      <Prose>{role.description}</Prose>
      <RuleList items={role.achievements} />
    </TwoPane>
  );
}
