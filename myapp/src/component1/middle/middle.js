import React from "react";
import "./middle.scss";

const Middle = () => {
  return (
    <>
      <div className="middle">
        <h1>Here's How We Work</h1>
        <div class="container-1">
          <div class="card-12">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="java">Dedicated Teams</h2>
                <p class="java">
                  We help you set up an agile team of developers, strategists &
                  project manager around expertise you’re looking for. You’ll
                  have full control over the extent of involvement of the team.
                </p>
              </div>
            </div>
            <div class="face face2">
              <h2>Dedicated Teams</h2>
            </div>
          </div>

          <div class="card-12">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="python">Remote Developers</h2>
                <p class="python">
                  We provide dedicated developers to those who prefer direct
                  engagement without any management layers. They work
                  exclusively for you, in any project you wish them to be in.
                </p>
              </div>
            </div>
            <div class="face face2">
              <h2>Remote Developers</h2>
            </div>
          </div>

          <div class="card-12">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="cSharp">Managed Projects</h2>
                <p class="cSharp">
                  Our managed projects model allows you to get your projects
                  fully handled by our team selected by you. Share your
                  requirements & get started now!
                </p>
              </div>
            </div>
            <div class="face face2">
              <h2>Managed Projects</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
