import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import arrow_up from "../../assets/arrow-up.png";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <div className={`scrollToTop ${sticky ? "arrow-display" : ""}`}>
          <img src={arrow_up} alt="" />
        </div>
      </Link>
    </>
  );
};

export default ScrollToTop;
