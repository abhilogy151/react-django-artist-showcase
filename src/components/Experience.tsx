
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Django Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Developed and maintained web applications using Django framework. Built RESTful APIs, implemented authentication systems, and optimized database queries for improved performance.",
      achievements: [
        "Reduced API response time by 40% through query optimization",
        "Built 5+ scalable web applications serving 10,000+ users",
        "Implemented comprehensive testing suite with 90% code coverage"
      ]
    },
    {
      title: "Junior Python Developer",
      company: "StartUp Hub",
      location: "New York, NY",
      period: "2022 - 2022",
      description: "Started career as a junior developer, focusing on backend development with Python and Django. Collaborated with senior developers on various projects.",
      achievements: [
        "Successfully completed training program in Django development",
        "Contributed to 3+ client projects",
        "Learned best practices in code review and version control"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end text-gray-600">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
