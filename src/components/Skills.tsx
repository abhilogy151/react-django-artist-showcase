
const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "bg-yellow-500" },
    { name: "Django", level: 85, color: "bg-green-600" },
    { name: "Django REST Framework", level: 80, color: "bg-blue-600" },
    { name: "PostgreSQL", level: 75, color: "bg-blue-500" },
    { name: "HTML/CSS", level: 70, color: "bg-orange-500" },
    { name: "JavaScript", level: 65, color: "bg-yellow-400" },
    { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
    { name: "Docker", level: 60, color: "bg-blue-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
