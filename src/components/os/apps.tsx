import type { ComponentType } from "react";
import {
  FolderIcon,
  BriefcaseFolderIcon,
  ToolboxFolderIcon,
  ComputerIcon,
  MailFolderIcon,
} from "./Icons";
import ProjectsWindow from "../windows/ProjectsWindow";
import ExperienceWindow from "../windows/ExperienceWindow";
import SkillsWindow from "../windows/SkillsWindow";
import AboutWindow from "../windows/AboutWindow";
import ContactWindow from "../windows/ContactWindow";

export interface App {
  id: string;
  /** Icon caption on the desk. */
  label: string;
  /** Title-bar text. */
  title: string;
  icon: ComponentType<{ className?: string }>;
  /** Preferred size. Clamped to the desk at render time. */
  width: number;
  height: number;
  Component: ComponentType;
}

/**
 * The desk's contents, in the order they appear. Order matters twice: it sets
 * the icon layout and the initial cascade, so the window a visitor is meant to
 * read first comes first.
 */
export const APPS: readonly App[] = [
  {
    id: "projects",
    label: "Projects",
    title: "Projects",
    icon: FolderIcon,
    width: 980,
    height: 720,
    Component: ProjectsWindow,
  },
  {
    id: "experience",
    label: "Experience",
    title: "Work History",
    icon: BriefcaseFolderIcon,
    width: 900,
    height: 580,
    Component: ExperienceWindow,
  },
  {
    id: "skills",
    label: "Toolkit",
    title: "Toolkit",
    icon: ToolboxFolderIcon,
    width: 800,
    height: 580,
    Component: SkillsWindow,
  },
  {
    id: "about",
    label: "About Me",
    title: "About This Engineer",
    icon: ComputerIcon,
    width: 920,
    height: 640,
    Component: AboutWindow,
  },
  {
    id: "contact",
    label: "Contact",
    title: "Contact",
    icon: MailFolderIcon,
    width: 880,
    height: 580,
    Component: ContactWindow,
  },
];

export const getApp = (id: string) => APPS.find((a) => a.id === id);
