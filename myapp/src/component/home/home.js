import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="homes">
      <input type="email" placeholder="Email" />;
      <input type="search" placeholder="Your Querry" />
      <button className="button-24">submit</button>
    </div>
  );
};

export default Home;
