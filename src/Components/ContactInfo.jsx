import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactCard = () => {
  return (
    <section className=" bg-gray-900 text-white mb-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
       .
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Card 1 - Location */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaMapMarkerAlt className="text-[#00EEFF] text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Card 2 - Email */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaEnvelope className="text-[#00EEFF] text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-lg">saifsarwar404@gmail.com</p>
          </div>
        </div>

        {/* Card 3 - Phone Number */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaPhoneAlt className="text-[#00EEFF] text-3xl" />
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
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4">
          <FaWhatsapp className="text-[#00EEFF] text-3xl" />
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
