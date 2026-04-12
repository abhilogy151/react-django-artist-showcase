import { Calendar, MapPin, Briefcase, Code, Database, Server, GitCommit } from "lucide-react";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Django Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing and maintaining enterprise web applications using the Django framework. Architecting RESTful APIs and optimizing high-throughput database queries.",
      achievements: [
        "Reduced API response time by 40% through query optimization and Redis caching",
        "Built 5+ scalable microservices serving 10,000+ active users",
        "Implemented comprehensive CI/CD testing suite achieving 90% code coverage",
      ],
      techStack: ["Django", "Python", "PostgreSQL", "Redis", "Docker"],
      icon: <Server size={18} />
    },
    {
      title: "Backend Developer",
      company: "Innovate Web",
      location: "San Francisco, CA",
      period: "2022 - 2023",
      description: "Focused on building robust backend features, integrating third-party APIs, and enhancing application security and performance.",
      achievements: [
        "Integrated secure payment gateways processing over $100k monthly",
        "Refactored legacy codebase, improving load times by 25%",
      ],
      techStack: ["React", "Python", "Django REST Framework", "AWS"],
      icon: <Code size={18} />
    },
    {
      title: "Junior Python Developer",
      company: "StartUp Hub",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Started career as a junior developer, focusing on backend development and learning modern software engineering practices.",
      achievements: [
        "Successfully completed intensive training in Django development",
        "Contributed to 3+ major client projects from conception to deployment",
        "Established best practices in code review and team version control",
      ],
      techStack: ["Python", "JavaScript", "SQL", "Git"],
      icon: <Briefcase size={18} />
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background relative overflow-hidden">

      {/* Tech-inspired background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <RevealSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 font-mono tracking-tight">Experience</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-3 md:mb-4" />
          <p className="text-muted-foreground font-mono text-[13px] md:text-sm">## Career timeline & history</p>
        </RevealSection>

        <div className="max-w-6xl mx-auto relative">

          {/* Enhanced Branch Line */}
          <div className="absolute left-[20px] md:left-[34px] top-8 bottom-0 w-[4px] bg-gradient-to-b from-border/50 to-transparent rounded-full" />
          <div className="absolute left-[20px] md:left-[34px] top-8 h-[80%] w-[4px] bg-gradient-to-b from-primary via-accent to-transparent rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <RevealItem key={index} index={index} delayOffset={0.1}>
                <div className="relative pl-12 md:pl-20 group">

                  {/* Git Commit Node / Company Initial */}
                  <div className="absolute left-[10px] md:left-[20px] top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-2 border-primary z-10 
                                  shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:bg-primary transition-colors duration-500 overflow-hidden flex items-center justify-center">
                    <span className="text-[10px] md:text-sm font-bold text-primary group-hover:text-primary-foreground font-mono transition-colors duration-500">
                      {exp.company.charAt(0)}
                    </span>
                  </div>

                  {/* Experience Card (Sleek IDE style) */}
                  <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4 sm:p-5 md:p-8 
                                  hover:border-primary/40 hover:bg-card/80 transition-all duration-500 shadow-sm relative overflow-hidden">

                    {/* Subtle top syntax highlight glow */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-5 gap-3 md:gap-4">

                      {/* Title & Company */}
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-secondary/80 border border-border text-foreground [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-[17px] md:text-xl font-bold text-foreground tracking-tight leading-snug">{exp.title}</h3>
                          <h4 className="text-[13px] md:text-base text-muted-foreground font-medium mt-0.5 md:mt-1">@ {exp.company}</h4>
                        </div>
                      </div>

                      {/* Date & Location Modules */}
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-2 mt-1 md:mt-0 flex-wrap shrink-0">
                        <div className="flex items-center gap-1.5 bg-secondary/50 border border-border/50 px-2.5 py-1 md:px-3 rounded-md font-mono text-[11px] md:text-[13px] text-foreground/80">
                          <Calendar className="w-3 h-3 md:w-[13px] md:h-[13px] text-primary/70" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin className="w-3 h-3 md:w-[13px] md:h-[13px]" />
                          <span className="font-mono text-[11px] md:text-[13px]">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/20 border border-border/20 rounded-lg p-3 md:p-4 mb-4 md:mb-5">
                      <p className="text-foreground/80 leading-relaxed text-[13px] md:text-[15px]">{exp.description}</p>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4 md:mb-6 ml-0.5 md:ml-1">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 md:gap-3">
                          <div className="text-primary mt-[2px] md:mt-0.5 font-mono text-[13px] md:text-sm leading-relaxed">{'>'}</div>
                          <span className="text-muted-foreground/90 text-[12.5px] md:text-[14.5px] leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags (Monospace Developer Style) */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 md:pt-5 border-t border-border/40">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10.5px] md:text-[12px] font-mono rounded bg-secondary/60 text-secondary-foreground border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
