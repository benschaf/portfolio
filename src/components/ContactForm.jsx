import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      isValid: false,
      error: "",
      edited: false,
    },
    email: {
      value: "",
      isValid: false,
      error: "",
      edited: false,
    },
    message: {
      value: "",
      isValid: false,
      error: "",
      edited: false,
    },
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    type: "",
  });

  const validateName = (name) => {
    if (name.trim() === "") {
      return "Name is required.";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (email.trim() === "") {
      return "Email is required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid.";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (message.trim() === "") {
      return "Message is required.";
    }
    return "";
  };

  const validateForm = () => {
    setFormData((prevState) => ({
      ...prevState,
      name: {
        ...prevState.name,
        isValid: validateName(prevState.name.value) === "",
        error: validateName(prevState.name.value),
      },
      email: {
        ...prevState.email,
        isValid: validateEmail(prevState.email.value) === "",
        error: validateEmail(prevState.email.value),
      },
      message: {
        ...prevState.message,
        isValid: validateMessage(prevState.message.value) === "",
        error: validateMessage(prevState.message.value),
      },
    }));
  };

  const handleFormChange = (identifier, value) => {
    setFormData((prevState) => {
      const newState = {
        ...prevState,
        [identifier]: {
          ...prevState[identifier],
          value: value,
          edited: true,
        },
      };
      validateForm(identifier);
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (
      !formData.name.isValid ||
      !formData.email.isValid ||
      !formData.message.isValid
    ) {
      setSubmitStatus({
        message: "Please fill in all fields correctly.",
        type: "error",
      });
      return;
    }

    emailjs.init({
      publicKey: "tdqAJRnjr7QEYczq-",
      blockHeadless: true,
      blockList: {
        list: ["foo@emailjs.com", "bar@emailjs.com"],
      },
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });

    emailjs
      .sendForm("service_pc74n1j", "template_q4h7e99", "#contact-form")
      .then(
        (response) => {
          setSubmitStatus({
            message: "Message sent successfully!",
            type: "success",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setSubmitStatus({
            message: "Message failed to send. Please try again later.",
            type: "error",
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section
      className="my-16 p-9 bg-[#e3eefc] dark:bg-card-background rounded-3xl text-center"
      id="contact"
    >
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 inline-block text-transparent bg-clip-text">
        Contact me.
      </h2>
      <p className="text-lg mb-16 text-center">
        Let's create something together 🪴
      </p>
      <div className="flex flex-col gap-16 md:gap-4 justify-around md:flex-row">
        <div className="flex flex-col gap-6">
          <p className="font-bold">Reach me via the following platforms.</p>
          <a
            href="mailto:benibschafer@gmail.com"
            className="group rounded-3xl hover:bg-card-background transition-colors"
          >
            <div className="flex items-center m-auto">
              <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
                <SiGmail className="text-2xl" />
              </div>
              <div className="text-left">
                <p>Mail me at:</p>
                <p className="text-blue-500 hover:text-blue-700">
                  benibschafer@gmail.com
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/benjamin-schafer"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl hover:bg-card-background transition-colors pr-3"
          >
            <div className="flex items-center m-auto">
              <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
                <SiLinkedin className="text-2xl" />
              </div>
              <div className="text-left">
                <p>Connect with me on LinkedIn:</p>
                <p className="text-blue-500 hover:text-blue-700">
                  linkedin.com/in/benjamin-schafer
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/benibschafer"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl hover:bg-card-background transition-colors"
          >
            <div className="flex items-center m-auto">
              <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
                <SiGithub className="text-2xl" />
              </div>
              <div className="text-left">
                <p>Check out my GitHub:</p>
                <p className="text-blue-500 group-hover:text-blue-700">
                  github.com/benibschafer
                </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <p className="font-bold">Or send me a message right here:</p>
          <form
            id="contact-form"
            className="py-8 text-base w-full md:w-96 leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                id="user_name"
                name="user_name"
                type="text"
                autofill="off"
                className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-x-0 border-t-0 border-b-gray-300 text-gray-900 focus:ring-0 focus:border-blue-200 pl-2"
                placeholder="name"
                onChange={(e) => handleFormChange("name", e.target.value)}
              />
              <label
                htmlFor="user_name"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Name
              </label>
              {formData.name.error && formData.name.edited ? (
                <p className="text-red-600 bg-red-200 rounded mt-1 w-fit px-4 text-sm">
                  {formData.name.error}
                </p>
              ) : (
                <p className="invisible text-red-600 bg-red-200 rounded mt-1 w-fit px-4 text-sm">
                   a
                </p>
              )}
            </div>
            <div className="relative">
              <input
                id="user_email"
                name="user_email"
                type="email"
                className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-x-0 border-t-0 border-b-gray-300 text-gray-900 focus:ring-0 focus:border-blue-200 pl-2"
                placeholder="Email address"
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
              <label
                htmlFor="user_email"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Email Address
              </label>
              {/* TODO: STYLE the next two error messages and then the form is done */}
              {formData.email.error && formData.email.edited && (
                <p className="text-red-500 text-sm">{formData.email.error}</p>
              )}
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                type="email"
                className="bg-transparent peer placeholder-transparent h-32 w-full border-b-2 border-l-0 border-r-2 border-t-0 border-gray-300 text-gray-900 focus:ring-0 focus:border-blue-200 pl-2"
                placeholder="Email address"
                onChange={(e) => handleFormChange("message", e.target.value)}
              />
              <label
                htmlFor="message"
                className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
              >
                Message
              </label>
              {formData.message.error && formData.message.edited && (
                <p className="text-red-500 text-sm">{formData.message.error}</p>
              )}
            </div>
            <div className="relative">
              <button
                type="submit"
                className="whitespace-nowrap border border-secondary-btn-background rounded-full w-fit py-2 px-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                Submit
              </button>
            </div>
            <div>
              {submitStatus.message && (
                <p
                  className={`text-sm ${
                    submitStatus.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
