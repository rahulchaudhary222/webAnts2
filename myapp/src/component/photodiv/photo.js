import React from "react";
import healthPng from "../../images/health.png";
import ecommerce from "../../images/Untitled.png";
import logistic from "../../images/logistic.png";
import hospital from "../../images/hospital.png";
import government from "../../images/government.png";
import "./photo.scss";

const Photo = () => {
  return (
    <>
      <div className="saara">
        <div className="upper">
          <h3>COMPANIES & INDUSTRIES</h3>
          <h1>Empowering Organizations Of All Scales</h1>
        </div>
        <div className="wrap-card">
          <div className="lower-card">
            <h1>startup solutions</h1>
            <p>
              We help startups build MVPs, set up teams, and access new
              technologies.
            </p>
          </div>
          <div className="lower-card">
            <h1>Product Companies</h1>
            <p>
              Our technical capabilities help accelerate product development &
              delivery.
            </p>
          </div>

          <div className="lower-card">
            <h1>Digital Agencies</h1>
            <p>
              We help digital agencies manage talent shortages and expand tech
              expertise.
            </p>
          </div>
          <div className="lower-card">
            <h1>Enterprises</h1>
            <p>
              Our 360° enterprise solutions range from development to
              modernization.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="icon">
          <div className="selfie">
            <img alt="err" src={healthPng} />
            <br />
            <button className="btn">Healthcare</button>
          </div>
          <div className="selfie">
            <img alt="err" src={ecommerce} />
            <br />
            <button className="btn">Ecommerce</button>
          </div>
          <div className="selfie">
            <img alt="err" src={logistic} />
            <br />
            <button className="btn">Logistics</button>
          </div>
          <div className="selfie">
            <img alt="err" src={hospital} />
            <br />
            <button className="btn">Hospitality</button>
          </div>
          <div className="selfie">
            <img alt="err" src={government} />
            <br />
            <button className="btn">Government</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Photo;
