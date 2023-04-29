import React, { useState, useEffect, useRef } from "react";
import { LinkedInLogo, GitHubLogo, HamburgerMenu, logo } from "../../assets";
import { useNavigate, useLocation } from "react-router-dom";
import { navlinks } from "../../constants/navlinks";
import styles from "./SideBar.module.scss";
import Overlay from "../Overlay/Overlay";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerRef = useRef();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutsideDrawer, true)

  //   return () => {
  //     document.removeEventListener('click', handleClickOutsideDrawer, true)
  //   }
  // }, [toggleDrawer])

  // const handleClickOutsideDrawer = (e) => {
  //   if (toggleDrawer && !drawerRef.current.contains(e.target)) {
  //     setToggleDrawer(false)
  //   }
  // }

  return (
    <menu>
      {/* mobile nav */}
      <div className={`${styles["mobile-nav"]}`}>
        <div className={`${styles["hamburger-container"]}`}>
          <a onClick={() => setToggleDrawer((prev) => !prev)}>
            <HamburgerMenu width="32px" height="32px" />
          </a>
        </div>
      </div>

      {/* desktop nav */}
      <div
        className={`${styles["side-nav"]} ${toggleDrawer && styles["toggled"]}`}
        ref={drawerRef}
      >
        <div className={`${styles["logo"]}`}>
          <div>
            <a onClick={() => navigate("/")}>
              <img src={logo} alt="logo" />
            </a>
          </div>
          <span>Web Developer</span>
        </div>
        <nav className={`${styles["nav-links"]}`}>
          {navlinks.map(({ name, link }) => (
            <a
              key={name}
              onClick={() => {
                navigate(link);
                setToggleDrawer(false);
              }}
              className={`${link === location.pathname && styles["selected"]}`}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className={`${styles["social-media"]}`}>
          <a
            href="https://linkedin.com/in/luciano-scaminaci-605132220/"
            target="_blank"
          >
            <LinkedInLogo width="20px" height="20px" />
          </a>
          <a href="https://github.com/Lucianosc" target="_blank">
            <GitHubLogo width="20px" height="20px" />
          </a>
        </div>
      </div>
      {/* Overlay*/}
      {toggleDrawer && <Overlay handleClick={() => setToggleDrawer(false)} />}
    </menu>
  );
}
