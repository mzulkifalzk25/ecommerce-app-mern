import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <div className="footer">
    //   <h1 className="text-center">
    //     ECOMMERCE WEBSITE BUILD USING NODE AND REACT
    //   </h1>
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    // </div>

    // new footer by zk
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>
            <Link to="/about">About</Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at scelerisque quam.
          </p>
        </div>
        <div className="footer-column">
          <h4>
            <Link to="/contact">Contact</Link>
          </h4>
          <p>123 Main Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h4>
            <Link to="/policy">Privacy Policy</Link>
          </h4>
          <p>
            We carefully analyze what types of information we need to provide
            our services.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Your Company. All rights reserved.</p>
        <p>Website designed by Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
