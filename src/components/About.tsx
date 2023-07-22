import React, { useRef } from "react";
import { useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={isInView ? "about about-anim" : "about"} ref={ref}>
      <h1>About Me</h1>
      <p>
        Hello! My name is Stephen and I enjoy coding. My interest in web
        development started in 2021 when I had to develop a website for a school
        project. Using my previous coding experience to implement design
        algorithms increased my interest in frontend development and that
        kick-started my web development career.
      </p>
      <p>
        Fast-forward to today and I am a skilled frontend web developer
        specialized in React and able to develop successful websites that
        satisfy customer goals as well as focus on working with end customers to
        collect requirements, create plans, and enhance designs for usability
        and functionality.
      </p>
    </div>
  );
}

export default About;
