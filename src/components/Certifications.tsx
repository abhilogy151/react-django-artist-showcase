import { Calendar, ExternalLink, ChevronLeft, ChevronRight, Database, Code, Terminal, Cloud, Box } from "lucide-react";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const Certifications = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Prevent scrolling if already at boundaries to stop UI shifting
      if (direction === "left" && scrollLeft <= 0) return;
      if (direction === "right" && Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 20) return;

      const scrollAmount = clientWidth > 768 
        ? clientWidth / 2 // scroll moderately on desktop
        : clientWidth; // scroll full width on mobile
      
      scrollContainerRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  const certifications = [
    {
      title: "Django for Everybody Specialization",
      issuer: "University of Michigan (Coursera)",
      period: "Jan 2022 - Aug 2022",
      credentialId: "ABC123XYZ",
      description: "Comprehensive course covering Django fundamentals, database modeling, and web development best practices.",
      skills: ["Django", "Python", "Web Development", "Database Design"],
      icon: <Database className="text-primary" size={24} />
    },
    {
      title: "Python for Data Science",
      issuer: "IBM (Coursera)",
      period: "Mar 2021 - Sep 2021",
      credentialId: "DEF456ABC",
      description: "Advanced Python programming for data analysis and scientific computing.",
      skills: ["Python", "Data Analysis", "NumPy", "Pandas"],
      icon: <Terminal className="text-primary" size={24} />
    },
    {
      title: "REST API Development with Django",
      issuer: "Udemy",
      period: "Feb 2022 - May 2022",
      credentialId: "GHI789DEF",
      description: "Specialized training in building RESTful APIs using Django REST Framework.",
      skills: ["Django REST Framework", "API Development", "Authentication", "Testing"],
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      period: "Jan 2023 - Jun 2023",
      credentialId: "AWS987XYZ",
      description: "Demonstrated proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
      skills: ["AWS", "Serverless", "Cloud Architecture", "CI/CD"],
      icon: <Cloud className="text-primary" size={24} />
    },
    {
      title: "Docker Mastery: with Kubernetes",
      issuer: "Udemy",
      period: "Jul 2023 - Dec 2023",
      credentialId: "DKR321ABC",
      description: "Comprehensive guide to building, testing, and deploying containers with Docker & Kubernetes.",
      skills: ["Docker", "Kubernetes", "Containerization", "DevOps"],
      icon: <Box className="text-primary" size={24} />
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </RevealSection>

        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div className="max-w-6xl mx-auto relative group/slider">
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-3 md:-left-6 top-[45%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] opacity-0 group-hover/slider:opacity-100 disabled:opacity-50"
            aria-label="Previous certificates"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-3 md:-right-6 top-[45%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] opacity-0 group-hover/slider:opacity-100 disabled:opacity-50"
            aria-label="Next certificates"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrolling Track */}
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-px-4 no-scrollbar pb-10 pt-6 px-4 after:content-[''] after:w-1 after:flex-none"
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex-none w-[calc(100%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] snap-start">
                <RevealItem index={index} className="h-full">
                  <div className="bg-card/30 backdrop-blur-md rounded-2xl p-6 border border-border/20 dark:border-border/10 group flex flex-col h-full shadow-[0_8px_32px_rgb(0_0_0_/_0.04)] dark:shadow-[0_8px_32px_rgb(0_0_0_/_0.2)]">
                    
                    <div className="flex items-center gap-4 mb-5">
                      {/* Unique Tech Icon mapping */}
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-inner border border-border/50">
                        {cert.icon}
                      </div>

                      {/* Start and End date mapped into precise monospace style */}
                      <div className="flex items-center text-muted-foreground text-[13px] gap-1.5 bg-secondary/50 border border-border/50 px-3 py-1.5 rounded-md font-mono">
                        <Calendar size={13} className="text-primary/70" />
                        <span>{cert.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{cert.issuer}</p>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{cert.description}</p>
                    <p className="text-xs text-muted-foreground mb-3 font-mono">ID: {cert.credentialId}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-2.5 py-1 bg-secondary border border-border/50 text-foreground text-xs rounded font-mono cursor-default">{skill}</span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5 border-t border-border/40">
                      <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-secondary/40 hover:bg-primary/10 hover:shadow-[0_4px_15px_rgba(var(--primary),0.15)] border border-border/50 hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg text-[13px] font-semibold gap-2 group/btn">
                        View Certificate 
                        <ExternalLink size={14} className="opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    </div>
                  </div>
                </RevealItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
