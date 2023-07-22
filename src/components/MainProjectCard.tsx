import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MainProjectData } from "../types/types";

function MainProjectCard({
  title,
  description,
  img,
  tools,
  gitLink,
  externalLink,
}: MainProjectData) {
  let containerRef = useRef<HTMLDivElement>(null);

  let aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  let aboutInView = useInView(aboutRef, { once: true });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function setSize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  });

  useEffect(() => {
    if (containerRef.current && aboutRef.current) {
      containerRef.current.style.minHeight = `${aboutRef.current.offsetHeight}px`;
    }
  }, [windowWidth]);

  return (
    <div className="main-projects-cont" ref={containerRef}>
      <a
        href={`${externalLink}`}
        className={isInView ? "img-cont about-anim" : "img-cont"}
      >
        <img src={`../pictures/${img}`} alt="" />
        <div className="img-cont-overlay"></div>
      </a>

      <div
        className={
          aboutInView ? "about-project-cont opaque" : "about-project-cont"
        }
        ref={aboutRef}
      >
        <div className="project-title">{title}</div>

        <div className="about-project">{description}</div>

        <ul className="project-tools">
          {tools.map((tool, index) => {
            return <li key={index}>{tool}</li>;
          })}
        </ul>

        <ul className="project-links">
          <li>
            {gitLink && (
              <a href={gitLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
          </li>
          <li>
            <a href={externalLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainProjectCard;
