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
    <section className="about-me bg-base-200 rounded-lg py-24 px-8">
      <h1
        className="text-4xl font-extrabold text-center text-teal-600 mb-10"
        data-aos="fade-down"
      >
        About Me
      </h1>

        {/* Right Side - Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Hobbies */}
          <div
            className=" btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl text-center font-semibold  text-teal-600 group-hover:text-white">
              Hobbies
            </h3>
            <div className="divider"></div>
            <p className="text-lg leading-relaxed">
              I enjoy reading books, solving puzzles, and exploring new
              technologies. I love watching cricket and am a die-hard fan of
              Shakib Al Hasan. I also enjoy experimenting with Rubik's cubes and
              playing strategy games.
            </p>
          </div>

          {/* Card 2: How I Got Into Programming */}
          <div
            className=" btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl text-center font-semibold  text-teal-600 group-hover:text-white">
              How I Got Into Programming
            </h3>
            <div className="divider"></div>
            <p className="text-lg leading-relaxed">
              My journey began during college, where I was fascinated by
              websites. Starting with HTML and CSS, I quickly moved to
              JavaScript and full-stack development, enjoying the process of
              building applications and solving problems.
            </p>
          </div>

          {/* Card 3: Goals */}
          <div
            className=" btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-center font-semibold  text-teal-600 group-hover:text-white">Goals</h3>
            <div className="divider"></div>
            <p className="text-lg leading-relaxed">
              My ultimate goal is to become a skilled software developer,
              mastering advanced technologies, contributing to impactful
              projects, and creating applications that solve real-world
              problems.
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutMeSection;
