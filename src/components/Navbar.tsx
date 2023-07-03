import React from "react";

function Navbar() {
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

        <ul className="nav-items-cont">
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
