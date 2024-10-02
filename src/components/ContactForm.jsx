import { SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import React from "react";



const ContactForm = () => {

  return (
    <section className="p-5 w-full mx-auto text-center" id="contact">
      <div className="mx-auto mt-10 bg-gradient-to-r via-pink-500 from-orange-500 to-teal-500 w-fit h-fit p-1 rounded-3xl self-center shadow-xl">
        <div className="bg-white mx-auto rounded-3xl p-4">
          <h2 className="text-2xl font-bold mb-4">Reach out</h2>
          <p className="text-lg mb-4">
            Send me a message
          </p>
          <div className="flex justify-center gap-5">
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 hover:text-blue-700 flex flex-col items-center"
            >
              <SiGmail className="text-2xl" />
              <p>Email</p>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 flex flex-col items-center"
            >
              <SiLinkedin className="text-2xl" />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
