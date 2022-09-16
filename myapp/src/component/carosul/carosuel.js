import React from "react";
import "./carosuel.scss";

const Carosuel = () => {
  return (
    <>
      <div className="caroline">
        <div className="text">
          <h4> TESTIMONIALS</h4>
          <h1>Companies Across the Globe Trust Us With Their Unique Project</h1>
        </div>
        <div className="carosul">
          <div class="carousel-wrapper">
            <div class="carousel-container">
              <div class="carousel">
                <div class="image-one">
                  <h1>Manager Digital Experience</h1>
                  <p>
                    A digital experience manager is a member of an
                    organization's marketing team that is responsible for
                    optimizing the business's website and mobile apps for
                    traffic, usability and customer experience
                  </p>
                </div>
                <div class="image-two">
                  <h1>Digital Product Manager</h1>
                  <p>
                    Digital Product Management is a specialty discipline within
                    general product management, but increasingly, just about any
                    business will be integrating aspects of digital into their
                    products and processes.
                  </p>
                </div>
                <div class="image-three">
                  <h1>Global Director oF Digital</h1>
                  <p>
                    As a Digital marketing director, you should have in-depth
                    marketing experience and a passion for digital technologies.
                    You will work closely with different teams to ensure
                    consistency through all digital marketing channels. You
                    should also provide forward-thinking ideas to build and
                    maintain a strong company web presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carosuel;
