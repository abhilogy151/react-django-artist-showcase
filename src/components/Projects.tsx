import { Github, ExternalLink, Terminal } from "lucide-react";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A complete RESTful API for an e-commerce platform with user auth, product management, cart, and payments.",
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description: "A collaborative task management app with real-time updates via Django Channels and WebSocket.",
      technologies: ["Django", "Channels", "WebSockets", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Analytics",
      description: "A data analysis platform aggregating social media metrics with interactive dashboards.",
      technologies: ["Django", "Pandas", "Chart.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, student tracking, and automated grading.",
      technologies: ["Django", "DRF", "MySQL", "AWS S3", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">

      {/* IDE Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-mono tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
            ## Core builds and experiments
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <RevealItem key={project.title} index={index}>
              <div className="bg-card/30 backdrop-blur-md rounded-2xl overflow-hidden border border-border/20 dark:border-border/10 flex flex-col h-full shadow-[0_8px_32px_rgb(0_0_0_/_0.04)] dark:shadow-[0_8px_32px_rgb(0_0_0_/_0.2)]">

                {/* Image block completely static positioned */}
                <div className="overflow-hidden relative border-b border-border/20 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-56 object-cover filter brightness-90 contrast-[1.1] saturate-[0.6] group-hover/img:saturate-100 group-hover/img:brightness-100 transition-all duration-700"
                  />
                  {/* Subtle MacOS/IDE dots over images */}
                  <div className="absolute top-4 left-4 flex gap-1.5 opacity-80">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/90"></div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal size={16} className="text-primary" />
                    <h3 className="text-xl font-bold text-foreground tracking-tight">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-[15px] flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-secondary/80 border border-border/50 text-foreground text-[12px] rounded font-mono cursor-default">{tech}</span>
                    ))}
                  </div>

                  {/* Footbar Buttons built like Certification UI */}
                  <div className="mt-auto pt-6 border-t border-border/40 grid grid-cols-2 gap-4">
                    <a href={project.github} className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-secondary/40 hover:bg-primary/10 border border-border/50 hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg text-[13px] font-semibold gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgba(var(--primary),0.15)] group/btn">
                      <Github size={14} className="opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300" /> Source
                    </a>
                    <a href={project.demo} className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/30 text-primary transition-all duration-300 rounded-lg text-[13px] font-semibold gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgba(var(--primary),0.3)] group/btn2">
                      <ExternalLink size={14} className="opacity-80 group-hover/btn2:opacity-100 transition-opacity duration-300" /> Live Demo
                    </a>
                  </div>

                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
