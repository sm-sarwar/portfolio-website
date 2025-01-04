import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaFire } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS Styles
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000,  }); // Initialize AOS
        AOS.refresh(); // Refresh AOS to apply animations on dynamic content
      }, []);
  return (
    <section className="skills bg-gray-900 text-white py-28 px-8" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center text-[#00EEFF] mb-12">My Skills</h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Skill - HTML */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="100">
          <FaHtml5 className="text-4xl text-[#F16529] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">HTML</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Building the structure of web pages with HTML. Skilled in creating semantic and accessible markup.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#F16529] h-2.5 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>

        {/* Skill - CSS */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
          <FaCss3Alt className="text-4xl text-[#2965F1] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">CSS</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Styling web pages using CSS. Expert in responsive design with Flexbox, Grid, and animations.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#2965F1] h-2.5 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>

        {/* Skill - tailwind */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="200">
          <RiTailwindCssFill className="text-4xl text-[#2965F1] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">Tailwind</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
          Tailwind CSS offers a modern, flexibility, and maintainability, making it popular among front-end developers.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#2965F1] h-2.5 rounded-full" style={{ width: "92%" }}></div>
          </div>
        </div>

        {/* Skill - JavaScript */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="300">
          <IoLogoJavascript className="text-4xl text-[#FFFF00] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">JavaScript</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Mastering JavaScript for building interactive and dynamic web applications.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#F7DF1E] h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        {/* Skill - React */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="400">
          <FaReact className="text-4xl text-[#61DBFB] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">React</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Building modern single-page applications (SPAs) using React.js, Hooks, and Context API.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#61DBFB] h-2.5 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>

        {/* Skill - NodeJS */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="500">
          <FaNodeJs className="text-4xl text-[#339933] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">Node.js</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Backend development using Node.js and building RESTful APIs with Express.js.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#339933] h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>

        {/* Skill - MongoDB */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="600">
          <FaDatabase className="text-4xl text-[#47A248] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">MongoDB</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Using MongoDB for handling NoSQL databases, creating efficient data models for web applications.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#47A248] h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>

        {/* Skill - Firebase */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="700">
          <FaFire className="text-4xl text-[#FFCB2F] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">Firebase</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Integrating Firebase for real-time database and authentication in web applications.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#FFCB2F] h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        {/* Skill - ExpressJS */}
        <div className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="800">
          <FaNodeJs className="text-4xl text-[#000000] mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#00EEFF]">Express.js</h3>
          <p className="text-center text-lg mb-4 text-gray-300">
            Building server-side applications using Express.js for creating REST APIs.
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-[#000000] h-2.5 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
