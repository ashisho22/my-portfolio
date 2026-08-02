import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import profileImageWebp from "../assets/images/profile_image.webp";
import profileImageJpg from "../assets/images/profile_image.jpg";

import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {

  const dotRef = useRef(null);

  useEffect(() => {

    gsap.to(dotRef.current, {

      top: "95%",

      ease: "none",

      scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        end: "bottom 30%",

        scrub: true,

      },

    });

  }, []);

  return (

    <section id="about" className="about">

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <p className="section-tag">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Building Modern & Creative
            <span> Digital Experiences.</span>
          </h2>

          <p className="about-text">
            I'm <strong>Ashish Ojha</strong>, a Front-End Developer passionate
            about creating modern, responsive and high-performance websites.
            I enjoy transforming ideas into beautiful user experiences.
          </p>

          <p className="about-text">
            My focus is writing clean code, building responsive interfaces,
            optimizing performance and creating websites that not only look
            beautiful but also provide an excellent user experience.
          </p>

        </div>

        {/* CENTER */}

        <div className="about-divider">

          <div className="divider-line"></div>

          <div
            ref={dotRef}
            className="divider-dot"
          ></div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="about-image">

            <picture>
              <source srcSet={profileImageWebp} type="image/webp" />
              <img
                src={profileImageJpg}
                alt="Ashish Ojha"
                width="360"
                height="430"
                loading="lazy"
                decoding="async"
              />
            </picture>

          </div>

        </div>

      </div>

      {/* CARDS */}

      <div className="about-cards">

        <div className="about-card">

          <h3>10+</h3>

          <p>Projects Completed</p>

        </div>

        <div className="about-card">

          <h3>8+</h3>

          <p>Technologies</p>

        </div>

        <div className="about-card">

          <h3>100%</h3>

          <p>Responsive Design</p>

        </div>

      </div>

    </section>

  );

}

export default About;