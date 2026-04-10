import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A complete RESTful API for an e-commerce platform with user auth, product management, cart, and payments.",
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description: "A collaborative task management app with real-time updates via Django Channels and WebSocket.",
      technologies: ["Django", "Channels", "WebSockets", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Analytics",
      description: "A data analysis platform aggregating social media metrics with interactive dashboards.",
      technologies: ["Django", "Pandas", "Chart.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, student tracking, and automated grading.",
      technologies: ["Django", "DRF", "MySQL", "AWS S3", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Projects that showcase my Django development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
