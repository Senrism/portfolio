import type { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGo,
  SiN8N,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

/**
 * Grouped by layer rather than listed flat — reads as an architecture summary
 * instead of a logo wall. Brand colors are deliberately omitted: several
 * (Next.js black, Django dark green) are invisible on a dark canvas, and a
 * 15-color grid fights the single-accent system.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Go", icon: SiGo },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Laravel", icon: FaLaravel },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Platform",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "n8n", icon: SiN8N },
    ],
  },
];
