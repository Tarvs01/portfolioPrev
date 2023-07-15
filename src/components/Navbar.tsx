import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function setWidth() {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > breakPoint) {
      closeSidebar();
    }
  }

  useEffect(() => {
    window.addEventListener("resize", setWidth);

    return () => window.removeEventListener("resize", setWidth);
  });

  let breakPoint = 760;

  function toggleSidebar() {
    setIsOpen(!isOpen);

    let html: HTMLHtmlElement | null = document.querySelector("html");
    if (!isOpen) {
      html!.style.overflow = "hidden";
    } else {
      html!.style.overflowY = "scroll";
    }
  }

  function closeSidebar() {
    setIsOpen(false);
    let html: HTMLHtmlElement | null = document.querySelector("html");
    html!.style.overflowY = "scroll";
  }

  return (
    <nav>
      <div className="nav-sub-cont">
        <a href="/" className="nav-logo-cont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="196"
            height="196"
            viewBox="0 0 196 196"
          >
            <g
              transform="matrix(1.78 0 0 1.77 98.02 96.99)"
              id="Cf-4OKHjNJcHdP_cohRzS"
            >
              <path
                style={{
                  stroke: "rgb(171, 54, 121)",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M 0 -51.86386 C 28.62885 -51.86386 51.86386 -28.628850000000003 51.86386 0 C 51.86386 28.62885 28.628850000000003 51.86386 0 51.86386 C -28.62885 51.86386 -51.86386 28.628850000000003 -51.86386 0 C -51.86386 -28.62885 -28.628850000000003 -51.86386 0 -51.86386 z"
                strokeLinecap="round"
                fill="#64ffda"
              />
            </g>
            <g
              transform="matrix(1.42 0 0 1.41 98.02 96.99)"
              id="5pWPsLE4V-528Ctp28px4"
            >
              <path
                style={{
                  stroke: "rgb(207, 239, 80)",
                  strokeWidth: "0",
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: "0",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: "4",
                  fillRule: "nonzero",
                  opacity: "1",
                }}
                fill="#0A192F"
                id="loader-inner-circle"
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M 0 -51.86386 C 28.62885 -51.86386 51.86386 -28.628850000000003 51.86386 0 C 51.86386 28.62885 28.628850000000003 51.86386 0 51.86386 C -28.62885 51.86386 -51.86386 28.628850000000003 -51.86386 0 C -51.86386 -28.62885 -28.628850000000003 -51.86386 0 -51.86386 z"
                strokeLinecap="round"
              />
            </g>
            <g
              transform="matrix(1 0 0 1 76.24 114.09)"
              id="Q7REBxIXDwStDDxOKaA-x"
            >
              <text
                fontFamily="Pacifico"
                fontSize="94"
                fontStyle="normal"
                fontWeight="normal"
                line-height="1"
                id="loader-text"
                style={{
                  stroke: "none",
                  strokeWidth: "1",
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: "0",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: "4",
                  fillRule: "nonzero",
                  opacity: "1",
                  whiteSpace: "pre",
                }}
                fill={"#64ffda"}
              >
                <tspan x="-14" y="25.05">
                  S
                </tspan>
              </text>
            </g>
          </svg>
        </a>

        {windowWidth >= breakPoint && (
          <ul className="nav-items-cont">
            <li>
              <Link
                to="about"
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={-40}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={-30}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}

        {windowWidth < breakPoint && (
          <div
            className={`${
              isOpen
                ? "small-screen-nav-cont anim-svg"
                : "small-screen-nav-cont"
            }`}
            onClick={toggleSidebar}
          >
            <svg viewBox="0 0 100 80">
              <rect
                x="0"
                y="20"
                width="80"
                height="8"
                fill="currentColor"
                id="rect1"
                rx="3"
              ></rect>
              <rect
                x="0"
                y="40"
                width="80"
                height="8"
                fill="currentColor"
                id="rect2"
                rx="3"
              ></rect>
              <rect
                x="0"
                y="60"
                width="80"
                height="8"
                fill="currentColor"
                id="rect3"
                rx="3"
              ></rect>
            </svg>
          </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <div className="sidebar-bg">
              <motion.div
                className="sidebar"
                initial={{ right: "-100vw" }}
                animate={{ right: 0, transition: { duration: 0.3 } }}
                exit={{ right: "-100vw", transition: { duration: 0.4 } }}
                key="right-menu"
              >
                <ul className="small-nav-items-cont">
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-100}
                      onClick={closeSidebar}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-40}
                      onClick={closeSidebar}
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-70}
                      onClick={closeSidebar}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
