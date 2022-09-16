import React from "react";
import "./bottom.css";

const Bottom = () => {
  return (
    <>
      <div className="naam">
        <h1>The Web Ants Locations</h1>
      </div>
      <div className="bottom">
        <div className="titled">
          <h2>Gurugram (HQ)</h2>
          <p>
            1003, DLF City Phase 4, Opp Hamilton Court, Galleria Market, Sector
            28, Haryana 122002
          </p>
        </div>
        <div className="titled">
          <h2>Chandigarh</h2>
          <p>
            Plot No. 14, First Floor, Aeren Building, Rajiv Gandhi Technology
            Park, Chandigarh – 160101, India
          </p>
        </div>
        <div className="titled">
          <h2>Sydney</h2>
          <p>
            Level 20, Darling Park Tower 2, 201 Sussex St, Sydney, NSW 2000,
          </p>
        </div>
        <div className="titled">
          <h2>London</h2>
          <p>14 Bonhill Street, London, EC2A 4BX, United Kingdom</p>
        </div>
      </div>
      <div className="khatam">
        <h3>@ 2022 Classic Informatics. All Rights Reserved.</h3>
        <button className="terms">Privacy Policy</button>
        <button className="terms">Cookie Policy</button>
        <button className="terms">Terms of Use</button>
      </div>
    </>
  );
};
export default Bottom;
