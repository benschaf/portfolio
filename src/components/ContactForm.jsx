import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import React, { useEffect } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  emailjs.init({
    publicKey: "tdqAJRnjr7QEYczq-",
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ["foo@emailjs.com", "bar@emailjs.com"],
      // The variable contains the email address
      watchVariable: "userEmail",
    },
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_pc74n1j", "template_q4h7e99", "#contact-form")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section
      className="my-16 p-9 bg-[#e3eefc] dark:bg-card-background rounded-3xl"
      id="contact"
    >
      <h2 className="text-5xl text-center font-bold">Contact me.</h2>
      <p className="text-lg mb-9 text-center">
        Let's create something together 🪴
      </p>
      <div className="flex gap-4 justify-around">
        <div>
          <div className="flex items-center">
            <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
              <SiGmail className="text-2xl" />
            </div>
            <div className="text-left">
              <p>Mail me at:</p>
              <p>
                <a
                  href="mailto:benibschafer@gmail.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  benibschafer@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
              <SiLinkedin className="text-2xl" />
            </div>
            <div className="text-left">
              <p>Connect with me on LinkedIn:</p>
              <p>
                <a
                  href="https://linkedin.com/in/benjamin-schafer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  linkedin.com/in/benjamin-schafer
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
              <SiGithub className="text-2xl" />
            </div>
            <div className="text-left">
              <p>Check out my GitHub:</p>
              <p>
                <a
                  href="https://github.com/benibschafer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  github.com/benibschafer
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Or send me a message right here:</p>
          <form
            id="contact-form"
            class="py-8 text-base w-full md:w-96 leading-6 space-y-9 text-gray-700 sm:text-lg sm:leading-7"
          >
            <div class="relative">
              <input
                id="user_name"
                name="user_name"
                type="text"
                autofill="off"
                className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-x-0 border-t-0 border-b-gray-300 text-gray-900 focus:ring-0 focus:border-teal-600 pl-2"
                placeholder="name"
              />
              <label
                for="user_name"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                id="user_email"
                name="user_email"
                type="email"
                className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-x-0 border-t-0 border-b-gray-300 text-gray-900 focus:ring-0 focus:border-teal-600 pl-2"
                placeholder="Email address"
              />
              <label
                for="user_email"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Email Address
              </label>
            </div>
            <div class="relative">
              <textarea
                id="message"
                name="message"
                type="email"
                className="bg-transparent peer placeholder-transparent h-32 w-full border-b-2 border-l-0 border-r-2 border-t-0 border-gray-300 text-gray-900 focus:ring-0 focus:border-teal-600 pl-2"
                placeholder="Email address"
              />
              <label
                for="message"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Message
              </label>
            </div>
            <div class="relative">
              <button class="bg-blue-500 text-white rounded-md px-2 py-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
