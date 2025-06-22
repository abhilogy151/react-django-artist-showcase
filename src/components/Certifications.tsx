
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Django for Everybody Specialization",
      issuer: "University of Michigan (Coursera)",
      date: "2022",
      credentialId: "ABC123XYZ",
      description: "Comprehensive course covering Django fundamentals, database modeling, and web development best practices.",
      skills: ["Django", "Python", "Web Development", "Database Design"]
    },
    {
      title: "Python for Data Science",
      issuer: "IBM (Coursera)",
      date: "2021",
      credentialId: "DEF456ABC",
      description: "Advanced Python programming for data analysis and scientific computing applications.",
      skills: ["Python", "Data Analysis", "NumPy", "Pandas"]
    },
    {
      title: "REST API Development with Django",
      issuer: "Udemy",
      date: "2022",
      credentialId: "GHI789DEF",
      description: "Specialized training in building RESTful APIs using Django REST Framework.",
      skills: ["Django REST Framework", "API Development", "Authentication", "Testing"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{cert.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Credential ID: {cert.credentialId}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm font-medium">
                <span>View Certificate</span>
                <ExternalLink size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
