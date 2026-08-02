import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: "Semantic and accessible structure for modern websites.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    description: "Responsive layouts, animations and glassmorphism UI.",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    description: "Interactive and dynamic web experiences.",
  },
  {
    icon: <FaReact />,
    title: "React",
    description: "Component-based frontend development using React.",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description: "Version control and collaborative development.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Repository hosting and project management.",
  },
  {
    icon: <SiMysql />,
    title: "SQL",
    description: "Managing and querying relational databases.",
  },
  {
    icon: <FaPython />,
    title: "Python",
    description: "Programming, automation and problem solving.",
  },
];

function Skills() {

  const trackRef = useRef(null);

  useEffect(() => {

    const track = trackRef.current;

    const animation = gsap.to(track, {

      xPercent: -50,

      duration: 30,

      ease: "none",

      repeat: -1,

    });

    return () => animation.kill();

  }, []);

  return (
    <section id="skills" className="skills">

      <div className="skills-heading">

        <p className="section-tag">
          SKILLS
        </p>

        <h2>
          Technologies I Use
        </h2>

      </div>

      <div className="skills-slider">

        <div
          ref={trackRef}
          className="skills-track"
        >

          {[...skills, ...skills].map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;