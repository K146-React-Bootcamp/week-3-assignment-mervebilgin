import { useContext, useState } from "react";
import { DarkModeContext } from "../context";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  /**
   * not used the context here in the header section we will use it here as well 
   * because we need the link search will  to be changed when dark mode is toggled
   */
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  console.log("dark mode", darkMode);
  return (
    <header>
      <nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="102.14"
          viewBox="0 0 241 102.14"
        >
          <g id="logo" transform="translate(-632 -392)">
            <text
              id="Moham"
              transform="translate(632 459)"
              fill="#3378f9"
              font-size="64"
              font-family="Poppins-SemiBold, Poppins"
              font-weight="600"
              letter-spacing="-0.041em"
            >
              <tspan x="0" y="0" fill={darkMode ? "#fff" : "#000"}>
                M
              </tspan>
              <tspan y="0" fill="#3378f9">
                e
              </tspan>
              <tspan y="0" fill={darkMode ? "#fff" : "#000"}>
                rv
              </tspan>
              <tspan y="0" fill="#3378f9">
                e
              </tspan>
              <tspan y="0" fill={darkMode ? "#fff" : "#000"}>
                ee
              </tspan>
            </text>
            <path
              id="Path_1"
              data-name="Path 1"
              d="M839,484.3s-99.25,60.755-132.333,0"
              transform="translate(0 -19.297)"
              fill="none"
              stroke="#3378f9"
              stroke-width="4"
            />
          </g>
        </svg>
        <div class="nav-items">
          <ul>
            {/* we will use here as well as we did in the hero section */}
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                About
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Blog
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                More
              </a>
            </li>
          </ul>
          <div class="contact">
            <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
              Login
            </a>
            <button class="btn" style={{ color: darkMode ? "#fff" : "#000" }}>
              Contact Us
            </button>
          </div>
        </div>

        <svg
          version="1.1"
          id="menu_bar"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="menu_bar"
          fill={darkMode ? "#fff" : "#000"}
          width="24.75px"
          height="24.75px"
          viewBox="0 0 24.75 24.75"
          onClick={() => setToggle(!toggle)}
        >
        </svg>
      </nav>

      {/* for small devices*/}
      {toggle && (
        <div class="mobile-nav" id="mobile_nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
          <div class="contact">
            <a href="/">Login</a>
            <button class="btn">Contact Us</button>
          </div>
        </div>
      )}
    </header>
  );
}