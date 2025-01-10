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
    
    <section className="education bg-base-200 py-28 px-8 mb-10 rounded-lg" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-12">Education</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* First Education Card */}
        <div className="btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg  justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white flex flex-col items-center " data-aos="zoom-in" data-aos-delay="100">
          <FaGraduationCap className="text-4xl  mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Bachelor of Computer Science And Engineering</h3>
          <p className="text-lg text-gray-600 group-hover:text-white mb-2">4th Semester</p>
          <p className="text-lg text-gray-600 group-hover:text-white mb-2">National University</p>
          <p className="text-md text-gray-600 group-hover:text-white">2021 - Present</p>
        </div>

        {/* Second Education Card */}
        <div className="btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg  justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white flex flex-col items-center " data-aos="zoom-in" data-aos-delay="200">
          <FaGraduationCap className="text-4xl  mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Higher Secondary Certificate (HSC)</h3>
          <p className="text-lg text-gray-600 group-hover:text-white mb-2">principal kazi faruky school and college </p>
          <p className="text-md text-gray-600 group-hover:text-white">2018 - 2020</p>
        </div>

        {/* Third Education Card */}
        <div className="btnn group m-2 group px-10 py-5 bg-white/10 rounded-lg  justify-center gap-2 relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white flex flex-col items-center " data-aos="zoom-in" data-aos-delay="300">
          <FaGraduationCap className="text-4xl  mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Secondary School Certificate (SSC)</h3>
          <p className="text-lg text-gray-600 group-hover:text-white mb-2">Charbongshi Joynalia High School</p>
          <p className="text-md text-gray-600 group-hover:text-white">2017 - 2018</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
