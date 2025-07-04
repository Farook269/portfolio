
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import githubprofile from '../photos/githubprofile.JPG';

const Index = () => {
  const handleResumeDownload = () => {
    // Replace with your actual resume URL
    window.open("https://drive.google.com/file/d/1mqb8kd3zo_6bfqqKHNg1YyA272YTsnfJ/view?usp=drive_link", "_blank");
  };

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
               I'm  a
              {" "}
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
    Passionate about creating impactful digital experiences with modern technologies.
    familiar with both{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
      Frontend
    </span>{" "}
    and{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-bold">
      Backend
    </span>{" "}
    development.
  </p>

  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
    Skilled in building dynamic and scalable web applications using{" "}
    <span className="text-purple-400 font-semibold">React.js</span>,{" "}
    <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
    <span className="text-purple-400 font-semibold">Express.js</span>, and{" "}
    <span className="text-purple-400 font-semibold">MongoDB</span>. I enjoy developing smooth, user-friendly interfaces and efficient backend systems that deliver seamless, high-performing web solutions.
  </p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            {/* Social Links */}
<div className="flex gap-6 justify-center md:justify-start">
  <a
    href="https://github.com/Farook269"
    target="https://github.com/Farook269"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
  >
    <Github size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/farook-basha/"
    target="https://www.linkedin.com/in/farook-basha/"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
  >
    <Linkedin size={24} />
  </a>
  <a
    href="mailto:farookbashamulla269@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
  >
    <Mail size={24} />
  </a>
</div>

          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-black p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                      src={githubprofile}

                    alt="Profile"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext}>
            <ArrowDown className="text-purple-400" size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
