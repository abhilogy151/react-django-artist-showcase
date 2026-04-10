import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Django for Everybody Specialization",
      issuer: "University of Michigan (Coursera)",
      date: "2022",
      credentialId: "ABC123XYZ",
      description: "Comprehensive course covering Django fundamentals, database modeling, and web development best practices.",
      skills: ["Django", "Python", "Web Development", "Database Design"],
    },
    {
      title: "Python for Data Science",
      issuer: "IBM (Coursera)",
      date: "2021",
      credentialId: "DEF456ABC",
      description: "Advanced Python programming for data analysis and scientific computing.",
      skills: ["Python", "Data Analysis", "NumPy", "Pandas"],
    },
    {
      title: "REST API Development with Django",
      issuer: "Udemy",
      date: "2022",
      credentialId: "GHI789DEF",
      description: "Specialized training in building RESTful APIs using Django REST Framework.",
      skills: ["Django REST Framework", "API Development", "Authentication", "Testing"],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex items-center text-muted-foreground text-sm gap-1.5">
                  <Calendar size={14} />
                  <span className="font-medium">{cert.date}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{cert.description}</p>
              <p className="text-xs text-muted-foreground mb-3">ID: {cert.credentialId}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{skill}</span>
                ))}
              </div>
              <button className="flex items-center text-primary hover:text-accent transition-colors duration-300 text-sm font-medium gap-1">
                View Certificate <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
