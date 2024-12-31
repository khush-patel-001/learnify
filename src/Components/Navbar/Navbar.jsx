import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import close_icon from "../../assets/close-icon.svg";
import theme_icon from "../../assets/theme-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const closeIcon = useRef(null);
  const openIcon = useRef(null);
  const toggleOpenMenu = () => {
    setMobileMenu(true);
    closeIcon.current.style.display = "block";
    openIcon.current.style.display = "none";
  };

  const toggleCloseMenu = () => {
    setMobileMenu(false);
    closeIcon.current.style.display = "none";
    openIcon.current.style.display = "block";
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light-mode");
  const toggleTheme = () => {
    if (theme === "dark-mode") {
      setTheme("light-mode");
      localStorage.setItem("theme", "light-mode")
    } else {
      setTheme("dark-mode");
      localStorage.setItem("theme", "dark-mode")
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul
        className={`nav-menu ${
          mobileMenu ? "display-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-250} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="contact-link padbtn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="icons">
        <img
          src={theme_icon}
          alt=""
          className="theme-icon"
          onClick={toggleTheme}
        />
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleOpenMenu}
          ref={openIcon}
        />
        <img
          src={close_icon}
          alt=""
          className="close-icon"
          onClick={toggleCloseMenu}
          ref={closeIcon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
