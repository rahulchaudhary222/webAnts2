import React from "react";
import "./form.scss";

const Formed = () => {
  return (
    <>
      <div className="main1">
        <div className="signin">
          <div className="text1">
            <h1>Get In Touch</h1>
          </div>
          <div class="bold-line"></div>
          <div class="container">
            <div class="window">
              <div class="overlay"></div>
              <div class="content">
                <div class="welcome">Hello There!</div>
                <div class="subtitle">
                  We're almost done. Before using our services you need to
                  create an account.
                </div>
                <div class="input-fields">
                  <input
                    type="text"
                    placeholder="Username"
                    class="input-line full-width"
                  ></input>
                  <input
                    type="email"
                    placeholder="Email"
                    class="input-line full-width"
                  ></input>
                  <input
                    type="text"
                    placeholder="Tell Us About Your Project"
                    class="input-line full-width"
                  ></input>
                </div>
                <div class="spacing">
                  or continue with <span class="highlight">Facebook</span>
                </div>
                <div>
                  <button class="ghost-round full-width">Create Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Formed;
