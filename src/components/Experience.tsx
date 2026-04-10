import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Django Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Developed and maintained web applications using Django framework. Built RESTful APIs, implemented authentication systems, and optimized database queries.",
      achievements: [
        "Reduced API response time by 40% through query optimization",
        "Built 5+ scalable web applications serving 10,000+ users",
        "Implemented comprehensive testing suite with 90% code coverage",
      ],
    },
    {
      title: "Junior Python Developer",
      company: "StartUp Hub",
      location: "New York, NY",
      period: "2022 - 2022",
      description: "Started career as a junior developer, focusing on backend development with Python and Django.",
      achievements: [
        "Successfully completed training program in Django development",
        "Contributed to 3+ client projects",
        "Learned best practices in code review and version control",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-muted-foreground text-sm gap-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
