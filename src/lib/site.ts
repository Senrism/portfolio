export const SITE = {
  name: "Mochamad Febry Lasena Darmawan",
  shortName: "Febry Lasena",
  initials: "FLD",
  role: "Senior Software Engineer",
  tagline:
    "Seven years building internal systems and end-to-end ERP flows from POS to finance — hands-on in the code, with AI tools in the loop to move faster.",
  description:
    "Senior Software Engineer with seven years in the tech industry — internal systems such as HRIS, task management, and scheduling tools, end-to-end ERP flows from POS to finance, and AI-assisted development across enterprise platforms in retail, government, and healthcare.",
  email: "lasenafeb@gmail.com",
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
