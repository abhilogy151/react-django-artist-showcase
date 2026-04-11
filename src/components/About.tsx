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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <RevealItem index={0} className="h-full">
            <div className="space-y-6 h-full flex flex-col">
              <div className="space-y-6 flex-grow">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated Django developer with 2 years of hands-on experience in building
                  web applications. My journey started with Python, and I quickly fell in love with
                  Django's "batteries included" philosophy.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in creating RESTful APIs, implementing authentication systems,
                  optimizing database queries, and ensuring code quality through testing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 mt-auto">
                {highlights.map((h, i) => (
                  <div key={h.label} className="glass-card p-5 rounded-xl text-center border border-primary/5 shadow-[0_4px_20px_rgb(0_0_0_/_0.02)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
                    <h.icon className="mx-auto mb-3 text-primary relative z-10" size={26} />
                    <h4 className="font-semibold text-foreground relative z-10">{h.label}</h4>
                    <p className="text-primary font-bold text-lg relative z-10">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>

          <RevealItem index={1} className="h-full">
            <div className="glass-card p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden shadow-[0_4px_20px_rgb(0_0_0_/_0.03)] border-primary/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">What I Do</h3>
              <ul className="space-y-4 relative z-10">
                {services.map((s, i) => (
                  <li key={s.text} className="flex items-center gap-5 p-3 -mx-3 rounded-xl cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 border border-transparent bg-background/50 backdrop-blur-sm shadow-sm">
                      <s.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">{s.text}</span>
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
