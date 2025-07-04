import React from "react";
import aboutme from "../photos/aboutme.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am <span className="text-purple-400 font-semibold">Farook Basha</span>, and I have recently completed my B.Tech degree in Computer Science and Engineering at <span className="text-purple-400 font-semibold">RGUKT RK Valley</span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate developer, currently honing my skills in the{" "}
              <span className="text-green-400 font-semibold">MERN Stack</span> by building various projects.
              I also have hands-on experience working with both{" "}
              <span className="text-yellow-400 font-semibold">MySQL</span> and{" "}
              <span className="text-yellow-400 font-semibold">MongoDB</span> databases.
              I am eager to apply my skills in real-world projects and contribute to the tech community.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am also proficient in programming languages such as{" "}
              <span className="text-blue-400 font-semibold">Java</span>,{" "}
              <span className="text-yellow-400 font-semibold">Python</span>,{" "}
              <span className="text-green-400 font-semibold">SQL</span>, and have working knowledge of
              other technologies and tools that support efficient software development.
            </p>

            {/* Experience/Projects Cards */}
            
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutme}
              alt="My Profile"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
