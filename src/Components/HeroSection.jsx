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
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply animations on dynamic content
  }, []);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section className="hero bg-base-200 py-4 px-4 md:px-0 md:py-28 my-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        {/* left - Text */}
        <div
          className="text-center md:text-left md:ml-12"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-extrabold italic">Hello , It's Me</h1>
          <h1 className="text-4xl font-bold my-4 font-montserrat">
            Saif Mohammad Sarwar
          </h1>
          <span className="text-3xl font-bold text-teal-600">
            {" "}
            a {""}
            <Typewriter
              words={["MERN stack Developer","Frontend Developer", "React Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span>
          <p className="text-lg leading-relaxed mt-5 mb-8">
            Passionate about building dynamic and responsive web applications
            that solve real-world problems. Always learning and experimenting
            with new technologies to create impactful user experiences.
          </p>
          <h3 className="uppercase text-teal-600 font-bold">find with me </h3>
          <div className="grid grid-cols-3 md:grid-cols-4  gap-5  mb-5">
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
              href="https://www.linkedin.com/in/saif-sarwar404/"
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
        <div className="btnn ">
          {/* From Uiverse.io by Darlley  */}
          <div className="relative h-full w-full flex items-center justify-center border">
            <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
              <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <FaReact className="text-3xl text-cyan-500"></FaReact>
                </span>
              </button>

              <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <svg
                    viewBox="0 0 48 48"
                    y="0px"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                      fill="#00acc1"
                    ></path>
                  </svg>
                </span>
              </button>

              <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <IoLogoJavascript className="text-3xl bg-yellow-300 rounded-full p-1"></IoLogoJavascript>
                </span>
              </button>

              <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff8f00"
                      d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
                    ></path>
                    <path
                      fill="#ffa000"
                      d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
                    ></path>
                    <path
                      fill="#ff6f00"
                      d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
                    ></path>
                    <path
                      fill="#ffc400"
                      d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                    ></path>
                  </svg>
                </span>
              </button>

              <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#21a366"
                      d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                    ></path>
                    <path
                      fill="#21a366"
                      d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                    ></path>
                  </svg>
                </span>
              </button>

              <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#212121"
                      d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
                    ></path>
                    <path
                      fill="#212121"
                      d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
                    ></path>
                  </svg>
                </span>
              </button>

              <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#5d4037"
                      d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                    ></path>
                    <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                    <path
                      fill="#4caf50"
                      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                    ></path>
                    <path
                      fill="#81c784"
                      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                    ></path>
                  </svg>
                </span>
              </button>

              <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                  <span className=" inline-block">
                    <img className="w-36 rounded-full" src={myImage} alt="" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
