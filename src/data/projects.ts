export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    title: "LPPD System",
    description:
      "A high-level government application for mapping annual reports from regional heads to the central government.",
    tech: ["Golang", "Next.js", "React", "PostgreSQL", "Redis"],
    image: "/lppd.webp",
    link: "https://lppd.kemendagri.go.id/",
    category: "Enterprise",
  },
  {
    title: "Erajaya Website",
    description:
      "High-performance e-commerce platform with advanced search and a recommendation engine.",
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "AWS"],
    image: "/erajaya.webp",
    link: "https://erajaya.com/",
    category: "E-commerce",
  },
  {
    title: "Absenkeun",
    description:
      "A smart attendance system with geolocation and selfie verification plus integrated leave management — shipped on web, Android, and iOS, live on the Play Store and App Store.",
    tech: ["Laravel", "Vue.js", "MySQL", "Capacitor", "NativePHP", "Ionic"],
    image: "/absenkeun.webp",
    link: "https://absenkeun.id/",
    category: "Attendance System",
  },
  {
    title: "Razo Atelier Tooth Clinic",
    description:
      "A web application for clinics to manage reservations, patients, and employee payroll.",
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/razo.webp",
    link: "https://razootoothatelier.clinicrazo.cloud/",
    category: "Clinic Platform",
  },
  {
    title: "Simple HRIS",
    description:
      "Human Resources Information System with employee management and payroll features.",
    tech: ["React", "Laravel", "PostgreSQL", "Redis"],
    image: "/simple-hris.webp",
    link: "https://github.com/Senrism/sample-hris",
    category: "HRIS",
  },
  {
    title: "Alqodiri Platform",
    description:
      "Professional website built with WordPress and Elementor for seamless content management and elegant layouts.",
    tech: ["WordPress", "Elementor"],
    image: "/alqodiri.webp",
    link: "https://airalqodiri.com/",
    category: "Web Platform",
  },
];
