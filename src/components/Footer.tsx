import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Django Developer</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-md">
              Passionate Python developer specializing in Django web applications.
              Building scalable backend solutions with clean, maintainable code.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((name) => (
                <li key={name}>
                  <a href={`#${name.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {["Python & Django", "REST APIs", "PostgreSQL", "Docker", "Git & GitHub"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Django Developer Portfolio. All rights reserved.
            </p>
            <div className="flex items-center text-muted-foreground text-sm">
              Made with <Heart size={14} className="mx-1.5 text-destructive animate-pulse" /> using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
