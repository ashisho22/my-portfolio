import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    badge: "LIVE PROJECT",
    video: "/video/Mygromo_demo.mp4",
    poster: "/video/Mygromo_poster.jpg",

    title: "MyGramo Agency",

    description:
      "Marketing agency website focused on performance, premium branding and conversion.",

    tech: ["React", "CSS" , "GSAP", "Vite", "HTML", "JavaScript"],

    demo: "https://mygramo.vercel.app/",

    github: "https://github.com/ashisho22/Mygramo",
  },

];

function Projects() {

  const cardsRef = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (

    <section
      id="projects"
      className="projects"
    >

      <div className="projects-heading">

        <p className="section-tag">

          PROJECTS

        </p>

        <h2>

          Featured Projects

        </h2>

        <p className="projects-subtitle">

          A collection of websites focused on
          premium UI, clean code, performance
          and modern user experience.

        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div

            key={project.id}

            ref={(el) => (cardsRef.current[index] = el)}

            className="project-card"

          >

            <div className="project-image">

              <span className="project-badge">

                {project.badge}

              </span>

              <video

                ref={(el) => (videoRefs.current[index] = el)}

                className="project-video"

                src={project.video}

                poster={project.poster}

                width="960"

                height="528"

                muted

                loop

                playsInline

                preload="none"

                aria-label={`${project.title} demo video`}

              />

            </div>

            <div className="project-content">

              <h3>

                {project.title}

              </h3>

              <p>

                {project.description}

              </p>

              <div className="project-tech">

                {project.tech.map((item) => (

                  <span key={item}>

                    {item}

                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.demo}
                  className="demo-btn"
                  target="_blank"
                  rel="noreferrer"
                >

                  Live Demo

                </a>

                <a
                  href={project.github}
                  className="github-btn"
                  target="_blank"
                  rel="noreferrer"
                >

                  Source Code

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;