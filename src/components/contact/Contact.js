import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { email, messenger } from "../../assets/icons";
import ContactsCard from "./ContactsCard";
import ContactsForm from "./ContactsForm";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-3xl py-1 text-center dark:text-gray-400">
        Get in touch
      </h2>
      <h3 className="text-xl text-center mb-2 dark:text-gray-100">
        Contact Me
      </h3>
      <div className="md:grid grid-cols-2">
        <div className="grid grid-cols-1 md:grid-row xl: grid- cols-3">
          <ContactsCard
            src={email}
            method="Email"
            des="Send me an email"
            email="Click Here!"
          />
          <ContactsCard
            src={messenger}
            method="Messenger"
            des="Facebook direct message"
            cta="Send a message"
          />
        </div>
        <div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
