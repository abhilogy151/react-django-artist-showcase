import { Code2, Database, Shield, TestTube } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
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
              {highlights.map((h) => (
                <div key={h.label} className="glass-card p-5 rounded-xl text-center">
                  <h.icon className="mx-auto mb-2 text-primary" size={24} />
                  <h4 className="font-semibold text-foreground">{h.label}</h4>
                  <p className="text-primary font-bold text-lg">{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">What I Do</h3>
            <ul className="space-y-5">
              {services.map((s) => (
                <li key={s.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
