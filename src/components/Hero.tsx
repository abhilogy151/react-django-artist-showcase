
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const dynamicTexts = [
    "Django Developer",
    "Python Expert",
    "Backend Specialist",
    "Full Stack Developer",
    "API Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop" 
              alt="Developer at work"
              className="profile-image"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="dynamic-text">{dynamicTexts[currentText]}</span>
            </h1>
            <p className="hero-description">
              Passionate Python developer with 2 years of experience building robust web applications 
              with Django. I create scalable backend solutions that power amazing user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
