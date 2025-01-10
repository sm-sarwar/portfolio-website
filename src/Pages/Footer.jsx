import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-base-200  py-12">
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <h3 className=" text-2xl font-semibold  mb-4 w-36">
              <img className="bg-teal-600" src={logo} alt="" />
            </h3>
            <p className="text-lg">
              I am a passionate web developer building dynamic and responsive
              web applications. Feel free to get in touch!
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Follow Me
            </h3>
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
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Contact
            </h3>
            <ul>
              <li className="text-lg">Email: saifsarwar404@gmail.com</li>
              <li className="text-lg">Phone: +8801843600539</li>
              <li className="text-lg">Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Saif Mohammad Sarwar. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
