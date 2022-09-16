import React from "react";
import "./lower.scss";

const Lower = () => {
  return (
    <div className="backs">
      <div className="lower">
        <h4>ENGAGING WITH US</h4>
        <h1>Work As Your Project Demands</h1>
      </div>
      <div className="contains">
        <div class="container">
          <div class="cards-wrapper">
            <div className="first1">
              <div class="card-first">
                <h1>Managed Product Development</h1>
                <p>
                  On demand agile teams for end to end product engineering
                  starting from conceptualization, rapid MVPs, development to
                  scaling and more.
                </p>
                <button className="button-24">Build a Team</button>
              </div>
            </div>
            <div className="second1">
              <div class="card">
                <h2>Build Extended Teams</h2>
                <p>
                  A team that is an extension of yours. Fill in short-term
                  technology gaps or build a Centre of Excellence.
                </p>
                <button className="button-24">Hire a Team</button>
              </div>
              <br />
              <div class="card">
                <h2>Hire Remote Developers</h2>
                <p>
                  Have specific requirements? Hire one of our expert developers
                  on demand.
                </p>
                <button className="button-24">Book an Interview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lower;
