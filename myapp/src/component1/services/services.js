import React from "react";
import Home from "../../component/home/home";
import CardNew from "../cardnew/cardnew";
import Detail from "../detail/detail";
import Middle from "../middle/middle";
import "./services.scss";

const Services = () => {
  return (
    <>
      <div class="page-wrapper">
        <div class="nav-wrapper">
          <div class="grad-bar"></div>
          <nav class="navbar">
            <img
              src="https://i.pinimg.com/736x/48/61/a6/4861a6d0e52443e63effbe822ca89ed3.jpg"
              alt="Company Logo"
            />
            {/* <h4>The Web Ants</h4> */}
            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="nav no-search">
              <li class="nav-item">
                <a href="/">Home</a>
              </li>
              <li class="nav-item">
                <a href="#">About</a>
              </li>
              <li class="nav-item">
                <a href="#">Work</a>
              </li>
              <li class="nav-item">
                <a href="#">Careers</a>
              </li>
              <li class="nav-item">
                <a href="#">Contact Us</a>
              </li>
              <i class="fas fa-search" id="search-icon"></i>
              <input class="search-input" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
        <section class="headline-1">
          <h1>Web, Mobile & Digital </h1>

          <p>
            Full-stack services - from assisting with initial UX research,
            building amazing web & mobile experiences to helping out with the
            subsequent launch & marketing.
          </p>
          <br />
          <div className="main">
            <Home />
          </div>
        </section>
        <section class="features">
          <CardNew />
        </section>
        <Middle />
        <Detail />
      </div>
    </>
  );
};
export default Services;
