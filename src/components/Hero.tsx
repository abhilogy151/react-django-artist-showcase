import { useState, useEffect } from "react";
import { ArrowDown, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Django Developer",
  "Python Expert",
  "Backend Engineer",
  "API Architect",
  "Problem Solver",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.slice(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(displayText.slice(0, -1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              Hi, I'm a
              <br />
              <span className="gradient-text">
                {displayText}
                <span className="animate-typing-cursor text-primary">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Passionate Python developer with 2 years of experience building robust
              web applications with Django. I create scalable backend solutions that
              power amazing user experiences.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 font-medium flex items-center justify-center gap-2"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download="Resume.pdf"
                className="border-2 border-muted-foreground/20 text-foreground px-8 py-3.5 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: YoutubeIcon, href: "#", label: "YouTube" },
                { icon: GithubIcon, href: "#", label: "GitHub" },
                { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-secondary/30 border border-border/40 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:bg-secondary/80 hover:text-primary transition-all duration-300 shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 relative z-10 bg-card">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-8 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors block"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
