import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import owner from "../../../images/owner2.jpg";

const Banner = () => {
  return (
    <div className="home-section section">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="row-1 full-screen">
          <div className="home-text">
            <h1 className="banner-logo">Shajibul Alam Shihab</h1>
            <h1 className="banner-skills">
              <span>Have skills of </span>
              <span className="skills">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    strings: [
                      "JavaScript",
                      "React.js",
                      "HTML",
                      "CSS",
                      "C (BASIC)",
                      "C++ With OOP",
                      "Java",
                      "MongoDB",
                      "MySQL",
                    ],
                  }}
                ></Typewriter>
              </span>
            </h1>
            <a
              style={{ textDecoration: "none", marginTop: "120px" }}
              className="btn-1 outer-shadow hover-in-shadow"
              href={
                "https://drive.google.com/u/0/uc?id=13ISob0W9dDRVSax7bJU_5vqrlawZ4cI_&export=download"
              }
              download="Shajibul_Alam_Resume.pdf"
            >
              Download Resume <i class="fas fa-download"></i>
            </a>
          </div>
          <div className="home-img mx-auto">
            <div className="img-box inner-shadow">
              <img className="outer-shadow" src={owner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
