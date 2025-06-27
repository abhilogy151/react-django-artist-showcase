
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Django Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate Python developer with 2 years of experience building robust web applications 
            with Django. I create scalable backend solutions that power amazing user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:scale-110 transition-transform duration-300">
            PY
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
