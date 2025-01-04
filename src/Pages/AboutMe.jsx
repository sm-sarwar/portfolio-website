import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutPic from "../assets/profile-pic (5).png";

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,  }); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply animations on dynamic content
  }, []);

  return (
    <section className="about-me bg-gray-900 text-white py-24 px-8">
      <h1
        className="text-4xl font-extrabold text-center text-[#00EEFF] mb-10"
        data-aos="fade-down"
      >
        About Me
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Picture Section */}
        <div
          className="w-full md:w-1/3 flex justify-center"
          data-aos="fade-right"
        >
          <div className=" ">
          
            <img
              src={aboutPic}
              alt="Your Name"
              className="w-60 h-60 object-cover md:w-80 md:h-80"
            />
          </div>
        </div>

        {/* Right Side - Cards Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1: Hobbies */}
          <div
            className="card border-2 border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl text-center font-semibold mb-4 text-[#00EEFF]">
              Hobbies
            </h3>
            <p className="text-lg leading-relaxed">
              I enjoy reading books, solving puzzles, and exploring new
              technologies. I love watching cricket and am a die-hard fan of
              Shakib Al Hasan. I also enjoy experimenting with Rubik's cubes and
              playing strategy games.
            </p>
          </div>

          {/* Card 2: How I Got Into Programming */}
          <div
            className="card border-2 border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl text-center font-semibold mb-4 text-[#00EEFF]">
              How I Got Into Programming
            </h3>
            <p className="text-lg leading-relaxed">
              My journey began during college, where I was fascinated by
              websites. Starting with HTML and CSS, I quickly moved to
              JavaScript and full-stack development, enjoying the process of
              building applications and solving problems.
            </p>
          </div>

          {/* Card 3: Goals */}
          <div
            className="card col-span-1 sm:col-span-2 border-2 border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-center font-semibold mb-4 text-[#00EEFF]">Goals</h3>
            <p className="text-lg leading-relaxed">
              My ultimate goal is to become a skilled software developer,
              mastering advanced technologies, contributing to impactful
              projects, and creating applications that solve real-world
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
