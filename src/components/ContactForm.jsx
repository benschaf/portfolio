import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import React from "react";
import {
  faCheckCircle,
  faCircleExclamation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import useForm from "../hooks/useForm";

const ContactForm = () => {
  const {
    formData,
    submitStatus,
    setSubmitStatus,
    handleInputBlur,
    handleFormChange,
    validateForm,
  } = useForm();

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
      blockList: { list: ["foo@emailjs.com", "bar@emailjs.com"] },
      limitRate: { id: "app", throttle: 10000 },
    });

    emailjs
      .sendForm("service_pc74n1j", "template_q4h7e99", "#contact-form")
      .then(
        (response) => {
          setSubmitStatus({
            message:
              "Message sent successfully! Give me a call if you want to - my phone number will be in your inbox in a few moments.",
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
    <form
      id="contact-form"
      className="py-8 text-base w-full md:w-96 leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7"
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
          onBlur={() => handleInputBlur("name")}
          onChange={(e) => handleFormChange("name", e.target.value)}
        />
        <label
          htmlFor="user_name"
          className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
        >
          Name
        </label>
        {formData.name.error && formData.name.edited ? (
          <p className="text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
            {formData.name.error}
          </p>
        ) : (
          <p className="invisible text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
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
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleFormChange("email", e.target.value)}
        />
        <label
          htmlFor="user_email"
          className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
        >
          Email Address
        </label>
        {formData.email.error && formData.email.edited ? (
          <p className="text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
            {formData.email.error}
          </p>
        ) : (
          <p className="invisible text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
            a
          </p>
        )}
      </div>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          type="email"
          className="bg-transparent peer placeholder-transparent h-32 w-full border-b-2 border-l-0 border-r-2 border-t-0 border-gray-300 text-gray-900 focus:ring-0 focus:border-blue-200 pl-2"
          placeholder="Email address"
          onBlur={() => handleInputBlur("message")}
          onChange={(e) => handleFormChange("message", e.target.value)}
        />
        <label
          htmlFor="message"
          className="cursor-text absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm pl-2"
        >
          Message
        </label>
        {formData.message.error && formData.message.edited ? (
          <p className="text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
            {formData.message.error}
          </p>
        ) : (
          <p className="invisible text-red-600 bg-red-200 rounded mt-1 w-fit px-2 text-sm">
            a
          </p>
        )}
      </div>
      <div className="relative">
        <button
          type="submit"
          className="whitespace-nowrap border border-secondary-btn-background rounded-lg w-fit py-2 px-4 bg-teal-900 text-white hover:bg-teal-700 transform hover:scale-105 transition-all duration-500"
        >
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
          Send Message
        </button>
      </div>
      <div>
        {submitStatus.message && (
          <p
            className={`text-sm  ${
              submitStatus.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitStatus.type === "success" ? (
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            ) : (
              <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
            )}
            <span>{submitStatus.message}</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
