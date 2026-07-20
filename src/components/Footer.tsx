import { SITE } from "@/lib/site";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-fg-dim">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-mono text-xs text-fg-dim">
            Built with Next.js &amp; Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}
