import { GraduationCap, Calendar, MapPin, Book } from "lucide-react";

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
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <h4 className="text-lg text-primary font-semibold">{edu.institution}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm mt-1">
                      <span className="flex items-center gap-1"><MapPin size={14} />{edu.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} />{edu.period}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex self-start px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                  GPA: {edu.gpa}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{edu.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="flex items-center font-semibold text-foreground mb-3 gap-2">
                    <Book size={16} /> Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((c, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Achievements</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
