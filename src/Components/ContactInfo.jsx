import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactCard = () => {
  return (
    <section className=" btnn mb-10">
      <h2 className="text-4xl font-extrabold text-center  mb-10">
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Card 1 - Location */}
        <div className="btnn rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaMapMarkerAlt className=" text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Card 2 - Email */}
        <div className="btnn rounded-lg p-6 md:p-4 shadow-lg flex items-center space-x-4">
          <SiGmail className=" text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-lg">saifsarwar404@gmail.com</p>
          </div>
        </div>

        {/* Card 3 - Phone Number */}
        <div className="btnn rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaPhoneAlt className=" text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <a
              href="tel:+8801843600539"
              className="text-lg hover:underline"
            >
              +8801843600539
            </a>
          </div>
        </div>

        {/* Card 4 - WhatsApp */}
        <div className="btnn rounded-lg p-6 md:p-4 shadow-lg flex items-center space-x-4">
          <FaWhatsapp className=" text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              +8801843600539
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
