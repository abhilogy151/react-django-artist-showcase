import { GraduationCap, Calendar, MapPin, Book } from "lucide-react";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "California, USA",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      description: "Focused on software engineering, database systems, and web development.",
      relevantCourses: ["Data Structures & Algorithms", "Database Management", "Web Development", "Software Engineering", "OOP", "Computer Networks"],
      achievements: ["Dean's List for 3 consecutive semesters", "Winner of Annual Programming Competition 2021", "TA for Intro to Programming"],
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      location: "California, USA",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      description: "Graduated with honors, focusing on mathematics and science courses.",
      relevantCourses: ["AP Computer Science", "AP Mathematics", "Physics", "Statistics"],
      achievements: ["Valedictorian", "National Honor Society Member", "Robotics Team Captain"],
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <RevealSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Education</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </RevealSection>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <RevealItem key={index} index={index}>
              <div className="bg-card/70 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 border border-border/40 transition-colors duration-500 relative overflow-hidden shadow-sm">
                {/* Static enhanced left-accent border */}
                <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-primary via-accent to-primary shadow-[2px_0_8px_rgba(var(--primary),0.15)]" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 md:mb-6 relative z-10 gap-3 lg:gap-0">
                  <div className="flex items-start gap-3 md:gap-4 lg:mb-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 lg:mt-0">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[17px] md:text-xl font-bold text-foreground transition-colors leading-snug">{edu.degree}</h3>
                      <h4 className="text-[14px] md:text-lg text-primary font-semibold mt-0.5 md:mt-0">{edu.institution}</h4>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 text-muted-foreground text-[12px] md:text-sm mt-1.5 md:mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />{edu.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex self-start px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[12px] md:text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">
                    GPA: {edu.gpa}
                  </span>
                </div>
                <p className="text-muted-foreground text-[13px] md:text-base leading-relaxed mb-5 md:mb-6">{edu.description}</p>
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <h5 className="flex items-center text-[14px] md:text-base font-semibold text-foreground mb-2.5 md:mb-3 gap-1.5 md:gap-2">
                      <Book className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" /> Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {edu.relevantCourses.map((c, i) => (
                        <span key={i} className="px-2.5 py-0.5 md:px-3 md:py-1 bg-primary/10 text-primary text-[11px] md:text-sm rounded-full cursor-default border border-transparent">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-1 md:mt-0">
                    <h5 className="text-[14px] md:text-base font-semibold text-foreground mb-2.5 md:mb-3">Achievements</h5>
                    <ul className="space-y-1.5 md:space-y-2">
                      {edu.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-[12px] md:text-sm leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;
