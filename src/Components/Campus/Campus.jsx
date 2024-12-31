import React, { useRef, useState } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.jpg";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import gallery_7 from "../../assets/gallery-7.jpg";
import gallery_8 from "../../assets/gallery-8.jpg";
import gallery_9 from "../../assets/gallery-9.jpg";
import gallery_10 from "../../assets/gallery-10.jpg";
import gallery_11 from "../../assets/gallery-11.jpg";
import gallery_12 from "../../assets/gallery-12.jpg";
import white_arrow from "../../assets/white-arrow.png";
import Loader from "./Loading/Loader";

const Campus = () => {
  const [enableRow1, setEnableRow1] = useState(false);
  const [enableRow2, setEnableRow2] = useState(false);
  const [enableRow3, setEnableRow3] = useState(false);
  const [loading, setLoading] = useState(false);

  const row_1 = useRef(null);
  const row_2 = useRef(null);
  const row_3 = useRef(null);
  const galleryBtn = useRef(null);

  const seeMore = () => {
    setLoading(true);
    setTimeout(() => {
      if (!enableRow1) {
        setEnableRow1(true);
      } else if (!enableRow2) {
        setEnableRow2(true);
      } else if (!enableRow3) {
        setEnableRow3(true);
      }
      setLoading(false);
    }, 1000);
  };

  if (enableRow3 && galleryBtn.current) {
    galleryBtn.current.style.display = "none";
  }

  return (
    <div className="campus">
      <div className="gallery">
        <div className="gallery-row gallery-0">
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
        </div>
        <div
          className="gallery-row gallery-1"
          ref={row_1}
          style={{ display: enableRow1 ? "flex" : "none" }}
        >
          <img src={gallery_4} alt="" />
          <img src={gallery_5} alt="" />
          <img src={gallery_6} alt="" />
        </div>
        <div
          className="gallery-row gallery-2"
          ref={row_2}
          style={{ display: enableRow2 ? "flex" : "none" }}
        >
          <img src={gallery_7} alt="" />
          <img src={gallery_8} alt="" />
          <img src={gallery_9} alt="" />
        </div>
        <div
          className="gallery-row gallery-3"
          ref={row_3}
          style={{ display: enableRow3 ? "flex" : "none" }}
        >
          <img src={gallery_10} alt="" />
          <img src={gallery_11} alt="" />
          <img src={gallery_12} alt="" />
        </div>
      </div>
      <center>
        {loading && <Loader />}
        <button
          className="btn dark-btn galleryBtn"
          onClick={seeMore}
          ref={galleryBtn}
        >
          See more here <img src={white_arrow} alt="" />
        </button>
      </center>
    </div>
  );
};

export default Campus;
