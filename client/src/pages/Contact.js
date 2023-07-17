import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us | Ecomerce App"}>
      <div className="contact-container">
        <div className="contact-image">
          <img src="/contactus.avif" alt="Contact Us Image" />
        </div>
        <div className="contact-content">
          <h1 className="text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            In case you have any queries about the product
          </p>
          <p className="mt-3 contact-item">
            <BiMailSend className="contact-icon" />: gethelp@example.com
          </p>
          <p className="mt-3 contact-item">
            <BiPhoneCall className="contact-icon" />: (+92)-(555)-1234567
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
