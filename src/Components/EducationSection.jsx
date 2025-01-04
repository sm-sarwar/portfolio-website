import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa"; // Icon for graduation
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS Styles

const EducationSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration
        });
      }, []);
  return (
    
    <section className="education bg-gray-900 text-white py-28 px-8" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center text-[#00EEFF] mb-12">Education</h1>
      
      <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center">
        
        {/* First Education Card */}
        <div className="education-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/3" data-aos="zoom-in" data-aos-delay="100">
          <FaGraduationCap className="text-4xl text-[#00EEFF] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Bachelor of Computer Science And Engineering</h3>
          <p className="text-lg text-gray-300 mb-2">4th Semester</p>
          <p className="text-lg text-gray-300 mb-2">National University</p>
          <p className="text-md text-gray-500">2021 - Present</p>
        </div>

        {/* Second Education Card */}
        <div className="education-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/3" data-aos="zoom-in" data-aos-delay="200">
          <FaGraduationCap className="text-4xl text-[#00EEFF] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Higher Secondary Certificate (HSC)</h3>
          <p className="text-lg text-gray-300 mb-2">principal kazi faruky school and college </p>
          <p className="text-md text-gray-500">2018 - 2020</p>
        </div>

        {/* Third Education Card */}
        <div className="education-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/3" data-aos="zoom-in" data-aos-delay="300">
          <FaGraduationCap className="text-4xl text-[#00EEFF] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Secondary School Certificate (SSC)</h3>
          <p className="text-lg text-gray-300 mb-2">Charbongshi Joynalia High School</p>
          <p className="text-md text-gray-500">2017 - 2018</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
