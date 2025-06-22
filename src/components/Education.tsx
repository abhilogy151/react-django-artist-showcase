
import { GraduationCap, Calendar, MapPin, Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "California, USA",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      description: "Focused on software engineering, database systems, and web development. Completed senior capstone project building a full-stack web application with Django.",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Winner of Annual Programming Competition 2021",
        "Teaching Assistant for Introduction to Programming"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      location: "California, USA",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      description: "Graduated with honors, focusing on mathematics and science courses. Active in computer science club and robotics team.",
      relevantCourses: [
        "AP Computer Science",
        "AP Mathematics",
        "Physics",
        "Statistics"
      ],
      achievements: [
        "Valedictorian",
        "National Honor Society Member",
        "Robotics Team Captain"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.institution}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm">
                      <div className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                        <MapPin size={14} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="flex items-center font-semibold text-gray-800 mb-3">
                    <Book size={18} className="mr-2" />
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Achievements</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
