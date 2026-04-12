import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Final Custom Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* SVG 'A' Icon Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:border-primary/40 transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
              <svg viewBox="0 0 24 24" className="w-[1.1rem] h-[1.1rem] text-primary drop-shadow-md relative z-10" fill="currentColor">
                <path d="M12 2L3 22h4.5l1.5-4h6l1.5 4H21L12 2zm-1.5 11.5L12 7l1.5 6.5h-3z" />
              </svg>
            </div>
            {/* Typographic Block */}
            <div className="flex flex-col justify-center">
              <span className="text-[30px] font-black tracking-tight text-foreground transition-colors group-hover:text-primary leading-none mb-1.5 mt-0.5">
                Abhishek
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/80 leading-none">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-[14px] font-semibold relative group py-1"
              >
                {item.label}
                {/* Precise bottom-line slider rebuilt to exact constraints */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Elegant Divider */}
            <div className="w-[1px] h-5 bg-border/80 mx-2"></div>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground hover:bg-secondary transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 font-semibold text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
