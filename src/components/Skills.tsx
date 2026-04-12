import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Server, Database, Layout, BrainCircuit, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Python" },
        { name: "Django & DRF" },
        { name: "FastAPI" },
        { name: "API Architecture" },
        { name: "Git & GitHub" },
        { name: "Docker" }
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "SQLite3" },
        { name: "Database Design" },
        { name: "Query Optimization" }
      ],
    },
    {
      title: "Frontend Tools",
      icon: Layout,
      skills: [
        { name: "HTML5 & CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "React.js" },
        { name: "Tailwind CSS" }
      ],
    },
    {
      title: "Data & AI",
      icon: BrainCircuit,
      skills: [
        { name: "Python (pandas, numpy)" },
        { name: "LLM APIs / RAG" },
        { name: "SQL / analytics" },
        { name: "TensorFlow basics" }
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Ambient Background Decorators */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealSection className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-[15px] md:text-lg pt-2 md:pt-4">
            A comprehensive overview of my technical arsenal and the tools I use to architect robust, scalable digital solutions.
          </p>
        </RevealSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <RevealItem key={category.title} index={index} className="h-full">
              <div className="bg-card/70 backdrop-blur-xl border border-border/40 p-5 md:p-8 rounded-xl md:rounded-2xl h-full flex flex-col group shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm border border-transparent bg-background/50 backdrop-blur-sm">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2.5 md:gap-3">
                      <CheckCircle2 className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] text-primary/70 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium text-[13.5px] md:text-sm lg:text-base leading-tight">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
