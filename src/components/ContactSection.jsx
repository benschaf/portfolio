import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import ContactForm from "./ContactForm";
import React from "react";
import ContactLink from "./ContactLink";

const ContactSection = () => {
  return (
    <section
      className="my-16 md:p-9 bg-orange-50 dark:bg-card-background rounded-3xl text-center"
      id="contact"
    >
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 inline-block text-transparent bg-clip-text">
        Contact me.
      </h2>
      <p className="text-lg mb-16 text-center">
        Let's create something together 🪴
      </p>
      <div className="flex flex-col gap-16 md:gap-4 justify-around items-center lg:items-start lg:flex-row">
        <div className="flex flex-col gap-6">
          <p className="font-bold w-full lg:text-center">
            Reach me via the following platforms.
          </p>
          <ContactLink
            href="mailto:benibschafer@gmail.com"
            icon={SiGmail}
            label="Mail me at:"
            subLabel="benibschafer@gmail.com"
          />
          <ContactLink
            href="https://linkedin.com/in/benjamin-schafer"
            icon={SiLinkedin}
            label="Connect with me on LinkedIn:"
            subLabel="linkedin.com/in/benjamin-schafer"
          />
          <ContactLink
            href="https://github.com/benibschafer"
            icon={SiGithub}
            label="Check out my GitHub:"
            subLabel="github.com/benibschafer"
          />
        </div>
        <div className="mt-9 lg:mt-0 mx-auto w-9/12 md:w-fit">
          <p className="font-bold lg:text-center">
            Or send me a message right here:
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;