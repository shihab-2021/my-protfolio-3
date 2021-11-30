import React from "react";
import "./About.css";
import ownerPhoto from "../../../images/about-owner.jpg";

const About = () => {
  return (
    <div id="about">
      <section className="about-section section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="main info">About me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img col-12 col-md-6 d-flex align-items-center justify-content-center flex-column">
              <img
                id="about-img"
                className="img-fluid inner-shadow"
                src={ownerPhoto}
                alt=""
              />
              <div className="social-links">
                <a className="outer-shadow hover-in-shadow" href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="outer-shadow hover-in-shadow"
                  target="_blank"
                  href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="outer-shadow hover-in-shadow" href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="outer-shadow hover-in-shadow"
                  target="_blank"
                  href="https://github.com/shihab-2021"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="about-info col-12 col-md-6 d-flex align-items-center">
              <div>
                <p>
                  <span className="fw-bold">
                    Hi! I am Shihab. I am a Web Developer.{" "}
                  </span>{" "}
                  I have worked both in web and software development. But
                  currently doing web development seriously. I can develop
                  website by using HTML, CSS, JavaScript, React.js, Bootstrap,
                  Tailwind and so on. I have did more than 12 web project. I can
                  adjust with innovative tach or new feature of programming
                  easily.
                </p>
                <p>
                  I also know Basic C programing, C++, Java(Basic). I have a
                  little bit knowledge of Object Oriented Programming and Data
                  Structures and Algorithm. Also idea of database management
                  system. Made project by using Mongodb and MySQL.
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  className="btn-1 outer-shadow hover-in-shadow me-3 mb-3"
                  href={
                    "https://drive.google.com/u/0/uc?id=1GHgLxAPYuvSVkgG93VH0auNsnSzepYw3&export=download"
                  }
                  download="Shajibul_Alam_Resume.pdf"
                >
                  Download Resume <i class="fas fa-download"></i>
                </a>
                <a href="#" className="btn-1 outer-shadow hover-in-shadow">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
