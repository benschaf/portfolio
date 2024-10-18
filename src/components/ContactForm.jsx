import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import React from "react";
import {
  faCheckCircle,
  faCircleExclamation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import useForm from "../hooks/useForm";
import { useTranslation } from "react-i18next";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const ContactForm = () => {
  const { t } = useTranslation();
  const {
    formData,
    submitStatus,
    resetForm,
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
        message: t("Please fill in all fields correctly."),
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
            message: t(
              "Message sent successfully! Give me a call if you want to - my phone number will be in your inbox in a few moments."
            ),
            type: "success",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setSubmitStatus({
            message: t("Message failed to send Please try again later"),
            type: "error",
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="md:w-fit">
      <form
        id="contact-form"
        className={`${
          submitStatus.type === "success" ? "hidden " : ""
        }py-8 text-base w-full md:w-96 leading-6 space-y-8 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7`}
        onSubmit={handleSubmit}
      >
        <InputField
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Name"
          handleBlur={() => handleInputBlur("name")}
          handleChange={(e) => handleFormChange("name", e.target.value)}
          error={formData.name.error}
          edited={formData.name.edited}
        />
        <InputField
          id="user_email"
          name="user_email"
          type="email"
          placeholder="Email Address"
          handleBlur={() => handleInputBlur("email")}
          handleChange={(e) => handleFormChange("email", e.target.value)}
          error={formData.email.error}
          edited={formData.email.edited}
        />
        <TextAreaField
          id="message"
          name="message"
          placeholder="Message"
          handleBlur={() => handleInputBlur("message")}
          handleChange={(e) => handleFormChange("message", e.target.value)}
          error={formData.message.error}
          edited={formData.message.edited}
        />
        <div className="relative">
          <button
            type="submit"
            className="group cursor-pointer mt-10 md:mt-5 mx-auto text-xl w-fit h-fit p-1 transition-all duration-300 bg-teal-600 hover:bg-teal-900 hover:shadow-xl flex items-center whitespace-nowrap text-white rounded-full py-2 px-4"
          >
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            {t("Send Message")}
          </button>
        </div>
      </form>
      <div className="w-2/3 mx-auto mt-9">
        {submitStatus.type === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
            <span>{submitStatus.message}</span>
          </p>
        )}
        {submitStatus.type === "success" && (
          <div className="text-green-600 dark:text-green-400 bg-card-background rounded-3xl p-8">
            <FontAwesomeIcon icon={faCheckCircle} className="text-5xl" />
            <p className="mt-5">{submitStatus.message}</p>
            <p
              onClick={resetForm}
              className="text-secondary mt-3 cursor-pointer hover:text-text"
            >
              {t("Send another message")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
