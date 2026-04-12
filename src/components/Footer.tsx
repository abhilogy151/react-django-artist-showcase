import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-8 relative overflow-hidden z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-muted-foreground text-[15px] font-mono opacity-90">
              © {currentYear} Abhishek.dev. All Rights Reserved.
            </p>
          </div>

          {/* Right: Minimal Social Links */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-10 h-10 rounded-lg bg-secondary/30 border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-secondary/80 hover:text-primary hover:border-border/80 transition-all duration-300 shadow-sm"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
