export const SITE = {
  name: "Mochamad Febry Lasena Darmawan",
  shortName: "Febry Lasena",
  initials: "FLD",
  role: "AI Engineering Manager",
  tagline:
    "Engineering manager who stays hands-on. I design and analyze systems, apply AI to solve real problems, and stay in the code on every project.",
  description:
    "AI Engineering Manager leading technical teams while staying hands-on across every project — system design and analysis, AI-assisted problem solving, and enterprise platforms spanning retail, government, and healthcare.",
  email: "lasenafebry@gmail.com",
  github: "https://github.com/Senrism",
  // NOTE: the old site had two different LinkedIn URLs (hero vs contact).
  // Consolidated to the vanity URL — verify this is the live one.
  linkedin: "https://www.linkedin.com/in/febry-lasena-darmawan/",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/** Section ids, derived so scroll-spy can never drift out of sync with the nav. */
export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
