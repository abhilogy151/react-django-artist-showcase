import { Code2, Database, Shield, TestTube } from "lucide-react";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Experience", value: "2+ Years" },
    { icon: Database, label: "Projects", value: "15+ Done" },
  ];

  const services = [
    { icon: Code2, text: "Backend API Development with Django REST Framework" },
    { icon: Database, text: "Database Design & Optimization (PostgreSQL, MySQL)" },
    { icon: Shield, text: "Authentication & Authorization Systems" },
    { icon: TestTube, text: "Testing & Code Quality Assurance" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </RevealSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <RevealItem index={0}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Django developer with 2 years of hands-on experience in building
                web applications. My journey started with Python, and I quickly fell in love with
                Django's "batteries included" philosophy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating RESTful APIs, implementing authentication systems,
                optimizing database queries, and ensuring code quality through testing.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((h, i) => (
                  <div key={h.label} className="glass-card card-glow p-5 rounded-xl text-center hover:-translate-y-1 transition-all duration-300 group">
                    <h.icon className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                    <h4 className="font-semibold text-foreground">{h.label}</h4>
                    <p className="text-primary font-bold text-lg">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>

          <RevealItem index={1}>
            <div className="glass-card card-glow p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Do</h3>
              <ul className="space-y-5">
                {services.map((s, i) => (
                  <li key={s.text} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <s.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{s.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
};

export default About;
