import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ElectronixHUb from "../photos/ELECTRONIXHUB.png";
import WeatherHub from "../photos/weatherHub.png";
import HotelDreamResort from "../photos/HotelDreamResort.png";
import cureconnect from "../photos/cureconnect.png";

const Projects = () => {
  const projects = [
    {
      title: "CureConnect",
      description:
        "A full-stack Online Doctor Appointment Booking System developed using React.js, Node.js, Express.js, and MongoDB. The platform allows patients to book appointments with doctors, with role-based modules for Users, Doctors, and Admin. Includes secure authentication, appointment management, online payment integration via RazorPay, and a user-friendly interface for seamless health consultations.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: cureconnect,
      github: "https://github.com/Farook269/CureConnect.git"
    },
    {
      title: "WeatherHub",
      description:
        "A responsive weather forecasting application built with Html, Css, JavaScript, Bootstrap and Rapid API. WeatherHub provides real-time weather updates, including temperature, humidity, wind speed, and 5-day forecasts for any city worldwide. The app features a clean UI with search functionality and dynamic background changes based on weather conditions.",
      technologies: ["Html", "Css", "JavaScript", "Bootstrap", "RapidAPI"],
      image: WeatherHub,
      github: "https://github.com/Farook269/WeatherHub.git"
    },
    {
      title: "Hotel Dream Resort",
      description:
        "A hotel booking and management system designed to streamline room reservations, guest check-ins, and service requests. Built using HTML, CSS, JavaScript, and Bootstrap for the frontend, with a MySQL database for managing booking data and customer records. Features include room availability tracking, booking confirmation, and an intuitive admin panel for hotel staff.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      image: HotelDreamResort,
      github: "https://github.com/Farook269/Hotel_Dream-resort.git"
    },
    {
      title: "ElectronicsHub",
      description:
        "An E-commerce project for all types of electronics gadgets where users can browse, search, and buy products online. Built using HTML, CSS, JavaScript, and Bootstrap for a clean and responsive user interface, with a MySQL database to store user bookings and manage product listings.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      image: ElectronixHUb,
      github: "https://github.com/Farook269/ElelctronisHub.git"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden group animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold tracking-wide px-4 py-2 rounded shadow-md transition-all duration-300"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub repo
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
