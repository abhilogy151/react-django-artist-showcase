
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A complete RESTful API for an e-commerce platform built with Django REST Framework. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates. Built with Django channels for WebSocket communication and React frontend.",
      technologies: ["Django", "Channels", "WebSockets", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A data analysis platform that aggregates social media metrics and provides insights through interactive dashboards. Implements complex data processing and visualization.",
      technologies: ["Django", "Pandas", "Chart.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Learning Management System",
      description: "A comprehensive LMS with course management, student progress tracking, and automated grading system. Features role-based access control and content delivery.",
      technologies: ["Django", "DRF", "MySQL", "AWS S3", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my Django development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    Live Demo →
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
