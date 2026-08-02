import "../styles/Footer.css";

import { FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <footer className="footer">

      {/* Top Divider */}

      <div className="footer-divider"></div>

      <div className="footer-container">

        {/* Name */}

        <h2 className="footer-title">

          Ashish Ojha

        </h2>

        {/* Role */}

        <p className="footer-role">

          Front-End Developer

        </p>

        {/* Description */}

        <p className="footer-description">

          Building modern, responsive and
          high-performance web experiences
          with clean code and premium user
          interfaces.

        </p>

        {/* Back To Top */}

        <button

          className="back-top"

          onClick={scrollToTop}

          aria-label="Back to top"

        >

          <FaArrowUp />

        </button>

        {/* Copyright */}

        <p className="footer-copy">

          © 2026 Ashish Ojha. All Rights Reserved.

        </p>

        <p className="footer-credit">

          Designed & Developed by Ashish Ojha

        </p>

      </div>

    </footer>

  );

}

export default Footer;