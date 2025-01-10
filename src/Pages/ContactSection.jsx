import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ContactCard from "../Components/ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
      AOS.init({ duration: 1000,  }); // Initialize AOS
      AOS.refresh(); // Refresh AOS to apply animations on dynamic content
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set up EmailJS service
    emailjs
      .sendForm(
        "service_z7w9aeg", // Replace with your service ID
        "template_ks8j1pm", // Replace with your template ID
        e.target, // The form element
        "VB7jKatXuD12MU9Rj" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          setStatus("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        //   console.log(formData);
        },
        (error) => {
          setStatus("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <div className="py-16 bg-base-200 my-10 rounded-lg">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-10">
          Contact Me
        </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <section className="contact py-20 mx-4 btnn border"
        data-aos="fade-right">
          <div className="container mx-auto text-center">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 mb-4 text-gray-900 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 mb-4 text-gray-900 rounded-lg"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 mb-4 text-gray-900 min-h-36 rounded-lg"
                required
              />
              <div className="text-start">
              <button
                type="submit"
                className="btnn hover:translate-y-2  text-teal-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-xl group py-2 px-4  hover:bg-teal-600 transition duration-300"
              >
                Send Email
              </button>
              </div>
            </form>

            {status && (
              <p className="mt-4 text-xl font-semibold text-green-500">
                {status}
              </p>
            )}
          </div>
        </section>

        <section className="mx-3" data-aos="fade-left">
            <ContactCard
            ></ContactCard>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
