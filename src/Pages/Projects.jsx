import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    name: "BookHaven",
    image: "https://i.ibb.co.com/5YB4vWR/book-Haven1.png", // Replace with your image
    techStack: "React, Node.js, MongoDB",
    shortDes: "BookHaven is designed to enhance the library experience by providing an easy-to-use platform for users to explore and manage books while maintaining a smooth backend for administrators.",
    description: "BookHaven is a comprehensive library management application designed to streamline the process of managing books for both users and administrators. The app allows users to browse, borrow, and return books seamlessly, while administrators can easily manage the library’s collection and monitor user activity.",
    liveLink: "https://book-haven-95434.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-sm-sarwar",
    details: " It was built using React and Node.js. During development, I faced challenges with state management and API integrations. There are also some improvements I'm planning to implement, such as a better user interface and additional features like authentication."
  },
  {
    name: "LingoBingo",
    image: "https://i.ibb.co.com/zRG9wdz/Screenshot-192.png", // Replace with your image
    techStack: "React, tailwind, Firebase",
    shortDes:"The project focuses on delivering a simple, effective, and enjoyable way to enhance language learning, with future plans to add new features such as multiplayer modes and personalized word recommendations.",
    description: "LingoBingo is an engaging language-learning game designed to help users improve their vocabulary and language skills through a fun and interactive bingo-style gameplay. The app offers a unique approach to learning by turning traditional vocabulary exercises into an entertaining challenge, where users match words to their correct meanings or translations.",
    liveLink: "https://lingo-bingo-a33fb.web.app/",
    githubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-sm-sarwar",
    details: "Interactive Gameplay: Users play a classic bingo game, but with words and their corresponding meanings, improving both vocabulary retention and comprehension. Users can choose categories of words based on their learning needs or level, such as beginner, intermediate, or advanced."
  },
  {
    name: "VisaMate",
    image: "https://i.ibb.co.com/qpRQBqC/Screenshot-193.png", // Replace with your image
    techStack: "React, Node.js, MongoDB",
    shortDes:"VisaMate simplifies the visa application journey, eliminating the complexity of managing multiple forms and requirements for international travel.",
    description: "VisaMate is a comprehensive platform designed to streamline the visa application process for travelers. The application offers users an intuitive interface to manage their visa applications, track progress, and access necessary information related to travel documents and visa requirements for various countries..",
    liveLink: "https://visamate-f5bd6.web.app/",
    githubLink: "https://github.com/programming-hero-web-course2/b10-a10-server-side-sm-sarwar",
    details: "Users can easily track the status of their visa application, from submission to approval, and receive real-time updates. Provides country-specific visa information, including document requirements, processing times, and application guidelines.Integrated with Firebase for secure user login and personalized account management."
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    AOS.refresh(); // Refresh AOS to apply animations on dynamic content
  }, []);

  return (
    <section className="projects py-20 px-4 bg-base-200 rounded-lg">
      <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="btnn group m-2 group bg-white/10 rounded-lg  relative after:absolute after:h-full after:bg-teal-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all hover:scale-110 hover:-translate-y-2 hover:text-white"
            data-aos="fade-up" // Add AOS animation
            data-aos-delay={`${index * 200}`} // Delay the animation based on the index (optional)
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg transition transform duration-500 group-hover:scale-110"
            />
            <div className="">
              <h3 className="text-2xl font-semibold text-teal-600 group-hover:text-white translate-y-2 mb-4">{project.name}</h3>
              <p className="text-lg  mb-4">{project.shortDes}</p>
              <a
                href="#"
                onClick={() => setSelectedProject(project)}
                className=" btnn shadow-md group-hover:text-black hover:scale-110 hover:translate-y-2"
              >
                 Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0  flex justify-center items-center z-50">
          <div
            className="bg-base-300 btnn p-8 rounded-lg w-full md:w-1/2"
            data-aos="fade-in" // Add AOS animation for modal
          >
            <button
              onClick={() => setSelectedProject(null)}
              className=" absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">{selectedProject.name}</h3>
            <p className="text-lg mb-4">
              <span className="font-bold">Tech Stack:</span> {selectedProject.techStack}
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Description:</span> {selectedProject.description}
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Details:</span> {selectedProject.details}
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                className="btnn hover:translate-y-2"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                className="btnn hover:translate-y-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
