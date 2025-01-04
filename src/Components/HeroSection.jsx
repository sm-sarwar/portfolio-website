import React, { useEffect } from "react";
import myImage from "../assets/myImage.png";
import { easeOut, motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply animations on dynamic content
  }, []);

  return (
    <section className="hero bg-gray-900 text-white py-4 px-4 md:px-0 md:py-28">
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
          <p className="text-xl font-medium mb-4 text-[#00EEFF]">
            Full-stack Web Developer
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Passionate about building dynamic and responsive web applications
            that solve real-world problems. Always learning and experimenting
            with new technologies to create impactful user experiences.
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-5  mb-5">
            <a
              href="https://www.facebook.com/saif.m.sarwar"
              target="_blank"
              className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"
            >
              <FaFacebook className="text-center text-3xl text-[#00EEFF]"></FaFacebook>
            </a>
            <a
              href="https://github.com/sm-sarwar"
              target="_blank"
              className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"
            >
              <FaGithub className="text-center text-3xl text-[#00EEFF]"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/saif-sarwar-737170264/"
              target="_blank"
              className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"
            >
              <FaLinkedin className="text-center text-3xl text-[#00EEFF]"></FaLinkedin>
            </a>
            <a
              href="https://x.com/_SaifSarwar"
              target="_blank"
              className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"
            >
              <FaTwitter className="text-center text-3xl text-[#00EEFF]"></FaTwitter>
            </a>
          </div>{" "}
          <br />
          <a
            href="https://drive.google.com/file/d/1vvnM4zc6D5i36-odQVDUEXXIgn2plNzV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00EEFF] text-gray-900 px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#00ccff] "
          >
            Download Resume
          </a>
        </div>

        {/* Right - Image */}
        <div className="md:w-96" data-aos="fade-left">
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={myImage} // Replace with your image URL
            alt=""
            className="myImage rounded-lg "
          />
          {/* <img
            src={myImage} // Replace with your image URL
            alt=""
            className="myImage rounded-lg "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
