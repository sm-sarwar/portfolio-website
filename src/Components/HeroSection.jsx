import React, { useEffect } from "react";
import myImage from "../assets/myImage.png";
import { easeOut, motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply animations on dynamic content
  }, []);

  return (
    <section className="hero bg-base-200 py-4 px-4 md:px-0 md:py-28 my-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {/* left - Text */}
        <div
          className="text-center md:text-left md:ml-12"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-extrabold italic">Hello , It's Me</h1>
          <h1 className="text-4xl font-bold my-4 font-montserrat">
            Saif Mohammad Sarwar
          </h1>
          <p className="text-xl font-medium mb-4 text-teal-600">
            Full-stack Web Developer
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Passionate about building dynamic and responsive web applications
            that solve real-world problems. Always learning and experimenting
            with new technologies to create impactful user experiences.
          </p>
          <h3 className="uppercase text-teal-600 font-bold">find with me </h3>
          <div className="flex items-center justify-center md:justify-normal gap-5  mb-5">
            <a
              href="https://www.facebook.com/saif.m.sarwar"
              target="_blank"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <FaFacebook className="text-center text-3xl"></FaFacebook>
            </a>
            <a
              href="https://github.com/sm-sarwar"
              target="_blank"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <FaGithub className="text-center text-3xl"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/saif-sarwar-737170264/"
              target="_blank"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <FaLinkedin className="text-center text-3xl "></FaLinkedin>
            </a>
            <a
              href="https://x.com/_SaifSarwar"
              target="_blank"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <FaTwitter className="text-center text-3xl "></FaTwitter>
            </a>
          </div>{" "}
          <br />
          <h2 className="font-bold text-teal-600 uppercase">Best skill on</h2>
          <div className="flex items-center justify-center md:justify-normal gap-5 ">
            <a
              href="#"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <RiTailwindCssFill className="text-3xl" />
            </a>
            <a
              href="#"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <IoLogoJavascript className="text-3xl " />
            </a>
            <a
              href="#"
              className="btnn m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2"
            >
              <FaReact className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:w-96 btnn pointer-events-none"  data-aos="fade-left">
          <img
            src={myImage} // Replace with your image URL
            alt=""
            className="myImage rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
