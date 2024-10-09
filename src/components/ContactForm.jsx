import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <section className="w-full my-16" id="contact">
      <h2 className="text-2xl font-bold">Contact me.</h2>
      <p className="text-lg mb-4">Let's create something together 🪴</p>
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
  <form className="mt-8 space-y-6" action="#" method="POST">
    <div className="rounded-md shadow-sm -space-y-px">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Message"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  </form>
</div>
    </section>
  );
};

export default ContactForm;
