export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

/**
 * Source of truth: the current CV (FEBRY LASENA - V2). Titles, employers and
 * date ranges mirror it exactly — keep the two in sync when either changes.
 * Bullets are the CV's, lightly reworded for the web; no metric appears here
 * that the CV does not support.
 */
export const EXPERIENCES: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "The One Retail",
    period: "Nov 2025 — Present",
    description:
      "Building and maintaining enterprise applications that span ERP, procurement, supplier management, inventory, finance, and product information — supporting operational workflows across multiple countries.",
    achievements: [
      "Developed and optimized inventory and financial data processing workflows covering stock history, daily inventory aggregation, and moving average cost calculations",
      "Integrated enterprise systems with external e-commerce APIs, handling authentication, token lifecycle, merchant linking, API errors, and rate limit constraints",
      "Developed and maintained enterprise applications across ERP, procurement, supplier management, inventory, finance, product information, and operational workflows in multiple countries",
    ],
  },
  {
    title: "Senior Lead Engineer",
    company: "Alturian",
    period: "Dec 2022 — Nov 2025",
    description:
      "Led work on established enterprise systems — recovering undocumented business logic, tightening authorization and security practices, and modernizing the mobile build toolchain.",
    achievements: [
      "Analyzed existing legacy code and database structures to reconstruct undocumented business processes",
      "Improved authorization design by aligning application-level permissions with centralized role management",
      "Migrated Ionic mobile applications to Capacitor 7, resolving native Android/iOS dependency, build configuration, barcode scanning, and push notification compatibility issues",
      "Strengthened application security by identifying third-party dependency risks, reducing unnecessary external CDN dependencies, and hardening the handling of production data, credentials, and third-party integrations",
    ],
  },
  {
    title: "Junior Engineer",
    company: "Alturian",
    period: "Jul 2021 — Dec 2022",
    description:
      "Worked across enterprise and supplier-facing applications, focused on access control and day-to-day application quality.",
    achievements: [
      "Implemented and reviewed role-based access control (RBAC) for enterprise and supplier-facing applications, keeping menu visibility and module access aligned with user roles and business requirements",
      "Resolved low-severity application issues including incorrect labels, duplicate entries, and UI inconsistencies",
    ],
  },
  {
    title: "Junior Engineer",
    company: "Labmedio Pratama",
    period: "Sep 2019 — Apr 2021",
    description:
      "First engineering role, building internal tooling for laboratory operations.",
    achievements: [
      "Developed and maintained an internal Lab Scheduling System for laboratory resource booking, availability management, and scheduling",
    ],
  },
];
