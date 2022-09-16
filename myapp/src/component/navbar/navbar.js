import React from "react";
import About from "../about/about";
import Bottom from "../bottom/bottom";
import Card from "../cards/card";
import Carosuel from "../carosul/carosuel";
import Client from "../client/client";
import Formed from "../form/form";
import Heads from "../heading/heading";
import Heading from "../heading/heading";
import Home from "../home/home";
import Lower from "../lower/lower";
import Photo from "../photodiv/photo";
import "./navbar.css";

const Navbar = () => {
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
            {/* <h4 style={{ color: "blue", width: "100px" }}>The Web Ants</h4> */}

            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="nav no-search">
              <li class="nav-item">
                <a href="/home">Services</a>
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
        <section class="headline">
          <h1>Delivering Digital Experiences </h1>

          <p>
            We develop custom software & digital products at scale for start-ups
            and enterprises. Outsource development, build on-demand teams, or
            hire individual developers.
          </p>
          <div className="main">
            <Home />
          </div>
        </section>
        <section class="features">
          <Card />
        </section>
        <Heads />
        <Lower />
        <Photo />
        <Client />
        <Carosuel />
        <About />
        <Formed />
        <Bottom />
      </div>
    </>
  );
};
export default Navbar;
