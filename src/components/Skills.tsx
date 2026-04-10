const Skills = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "Django REST Framework", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "HTML/CSS", level: 70 },
    { name: "JavaScript", level: 65 },
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 60 },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</h3>
                <span className="text-sm text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
