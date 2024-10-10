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
  emailjs.sendForm("service_pc74n1j", "template_q4h7e99", "#contact-form").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};

  return (
    <section className="my-16 p-9 bg-teal-100 rounded-3xl" id="contact">
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
          <p className="mb-3">Or send me a message right here:</p>
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                placeholder=" "
                className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
              <label className="absolute left-3 top-2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-teal-500 transition-all text-sm">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder=" "
                className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
              <label className="absolute left-3 top-2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-teal-500 transition-all text-sm">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder=" "
                className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              ></textarea>
              <label className="absolute left-3 top-2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-teal-500 transition-all text-sm">
                Message
              </label>
            </div>
            <div>
              <input
                type="submit"
                value="Send"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              />
            </div>
          </form>
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input name="user_name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="user_name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<input name="user_email" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="user_email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<textarea name="message" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="message" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
