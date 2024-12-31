import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForword = () => {
    if (tx > -50) {
      const newTx = tx - 25;
      setTx(newTx);
      if (slider.current) {
        slider.current.style.transform = `translateX(${newTx}%)`;
      }
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      if (slider.current) {
        slider.current.style.transform = `translateX(${newTx}%)`;
      }
    }
  };

  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForword} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophia Johnson</h3>
                  <span>Learnify, INDIA</span>
                </div>
              </div>
              <p>
                Learnify transformed my academic journey. The personalized
                attention and expert guidance I received helped me excel in my
                studies. The engaging courses and supportive community made
                learning enjoyable and effective. I highly recommend Learnify to
                anyone seeking a quality education.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Sigh</h3>
                  <span>Learnify, INDIA</span>
                </div>
              </div>
              <p>
                As a working professional, balancing my career and education was
                challenging. Learnify's flexible learning options and
                experienced instructors made it possible for me to pursue my
                degree without sacrificing my job. The practical knowledge and
                skills I gained have significantly enhanced my professional
                capabilities.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Louis Patterson</h3>
                  <span>Learnify, INDIA</span>
                </div>
              </div>
              <p>
                The supportive environment at Learnify fostered my growth and
                confidence. The faculty and staff were always available to
                answer my questions and provide encouragement. The diverse
                student body exposed me to different perspectives and broadened
                my horizons. I am grateful for the invaluable experience I had
                at Learnify.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Marcos Guajardo</h3>
                  <span>Learnify, INDIA</span>
                </div>
              </div>
              <p>
                Learnify's commitment to academic excellence and student success
                is truly commendable. The rigorous curriculum and hands-on
                projects prepared me for real-world challenges. The networking
                opportunities and career guidance services helped me secure a
                fulfilling job in my desired field. I am proud to be an alumnus
                of Learnify.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
