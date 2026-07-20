export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "AI Engineering Manager",
    company: "The One Retail",
    period: "2025 — Present",
    description:
      "Lead engineering while staying hands-on across every project — designing merchandising, ERP, and POS systems, and applying AI to system analysis and problem solving.",
    achievements: [
      "Developed robust ERP and inventory management systems for enterprise-level operations",
      "Integrated leading platforms such as Grab and Shopee for seamless omnichannel capabilities",
      "Designed and maintained scalable architecture for ERP, loyalty, and voucher systems to ensure long-term adaptability and high performance",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Alturian Indonesia",
    period: "2022 — 2025",
    description:
      "Led a team of 20+ engineers, architecting scalable systems and driving technical decisions for high-traffic applications.",
    achievements: [
      "Architected microservices infrastructure handling 10M+ requests/day",
      "Reduced system latency by 40% through optimization",
      "Developed a customized internal social media application for the company",
      "Developed loyalty and POS (point of sale) systems tailored to business needs",
      "Mentored over 20 engineers, promoting 4 of them to tech lead roles",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Alturian Indonesia",
    period: "2021 — 2022",
    description:
      "Built end-to-end features, optimized performance, and contributed to architectural decisions.",
    achievements: [
      "Developed real-time features using WebSockets",
      "Improved application performance by 50%",
    ],
  },
];
