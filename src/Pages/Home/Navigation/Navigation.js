import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // const hamburgerBtn = document.querySelector(".hamburger-btn");
  // let navMenu = document.querySelector(".nav-menu");
  // let closeNavBtn = navMenu.querySelector(".close-nav-menu");
  // hamburgerBtn.addEventListener("click", showNavMenu);
  // closeNavBtn.addEventListener("click", hideNavMenu);
  // function showNavMenu() {
  //   navMenu.classList.add("open");
  //   // bodyScrollingToggle();
  // }
  // function hideNavMenu() {
  //   navMenu.classList.remove("open");
  //   fadeOutEffect();
  //   // bodyScrollingToggle();
  // }
  // function fadeOutEffect() {
  //   document.querySelector(".fade-out-effect").classList.add("active");
  //   setTimeout(() => {
  //     document.querySelector(".fade-out-effect").classList.remove("active");
  //   }, 300);
  //   document.addEventListener("click", (event) => {
  //     console.log(event.target);
  //   });
  // }
  return (
    <div>
      {/* <header className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <h1>
                <NavLink className="fw-bold logo" to="/home">
                  Shajibul Alam Shihab
                </NavLink>
              </h1>
            </div>
            <div className="hamburger-btn outer-shadow hover-in-shadow">
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <nav className="nav-menu">
        <div className="close-nav-menu outer-shadow hover-in-shadow">
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <a href="#" className="inner-shadow active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="outer-shadow hover-in-shadow">
                About
              </a>
            </li>
            <li>
              <a href="#" className="outer-shadow hover-in-shadow">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="outer-shadow hover-in-shadow">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="outer-shadow hover-in-shadow">
                Testimoinal
              </a>
            </li>
            <li>
              <a href="#" className="outer-shadow hover-in-shadow">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright-text">&copy; 2021 Shihab</p>
      </nav>
      <div className="fade-out-effect"></div> */}
      <nav
        id="navigation"
        style={{ backgroundColor: "#dc354500" }}
        class="navbar navbar-expand-lg navbar-light"
      >
        <div class="container">
          <Link class="navbar-brand logo" to="/">
            Shihab
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/home#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
