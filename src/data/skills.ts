import type { IconType } from "react-icons";
import { FaPython, FaLaravel, FaReact, FaVuejs, FaDocker } from "react-icons/fa";
import {
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGithub,
  SiGitlab,
  SiClaude,
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
 * Mirrors the SKILLS block of the current CV (FEBRY LASENA - V2), category for
 * category, so the site never advertises a stack the CV does not back.
 * Brand colors are deliberately omitted: several (GitHub black, Next.js black)
 * are invisible on a dark canvas, and a multi-color grid fights the
 * single-accent system.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: FaPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Laravel", icon: FaLaravel },
      { name: "React", icon: FaReact },
      { name: "Vue", icon: FaVuejs },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "Docker", icon: FaDocker },
    ],
  },
  {
    category: "AI-Assisted Development",
    skills: [{ name: "Claude Code", icon: SiClaude }],
  },
];
