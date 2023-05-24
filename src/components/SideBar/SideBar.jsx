import React, { useState, useEffect, useRef } from "react";
import { LinkedInLogo, GitHubLogo, HamburgerMenu, logo } from "../../assets";
import { useLocation, NavLink, Link } from "react-router-dom";
import { navlinks } from "../../constants/navlinks";
import styles from "./SideBar.module.scss";
import Overlay from "../Overlay/Overlay";

export default function SideBar() {
  const location = useLocation();
  const drawerRef = useRef();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <nav>
      {/* hamburger menu */}
      <div className={`${styles["mobile-nav"]}`}>
        <div className={`${styles["hamburger-container"]}`}>
          <button
            onClick={() => setToggleDrawer((prev) => !prev)}
            aria-label="mobile menu"
          >
            <HamburgerMenu width="32px" height="32px" />
          </button>
        </div>
      </div>

      {/* nav bar */}
      <div
        className={`${styles["side-nav"]} ${toggleDrawer && styles["toggled"]}`}
        ref={drawerRef}
      >
        <div className={`${styles["logo"]}`}>
          <div>
            <NavLink to="/" aria-label="About">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <span>Web Developer</span>
        </div>
        <nav className={`${styles["nav-links"]}`}>
          {navlinks.map(({ name, link }) => (
            <NavLink
              key={name}
              onClick={() => {
                setToggleDrawer(false);
              }}
              to={link}
              className={`${link === location.pathname && styles["selected"]}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className={`${styles["social-media"]}`}>
          <Link
            to="https://linkedin.com/in/luciano-scaminaci-605132220/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInLogo width="20px" height="20px" />
          </Link>
          <Link
            to="https://github.com/Lucianosc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubLogo width="20px" height="20px" />
          </Link>
        </div>
      </div>
      {/* Overlay*/}
      {toggleDrawer && <Overlay handleClick={() => setToggleDrawer(false)} />}
    </nav>
  );
}
