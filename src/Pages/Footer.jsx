import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4 w-36"><img src={logo} alt="" /></h3>
            <p className="text-lg">
              I am a passionate web developer building dynamic and responsive web applications. Feel free to get in touch!
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">Follow Me</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/saif.m.sarwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFF] hover:text-[#00ccff] text-3xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/sm-sarwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFF] hover:text-[#00ccff] text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saif-sarwar-737170264/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFF] hover:text-[#00ccff] text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/_SaifSarwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFF] hover:text-[#00ccff] text-3xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">Contact</h3>
            <ul>
              <li className="text-lg">Email: saifsarwar404@gmail.com</li>
              <li className="text-lg">Phone: +8801843600539</li>
              <li className="text-lg">Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Saif Mohammad Sarwar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
