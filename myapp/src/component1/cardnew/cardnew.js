import React from "react";
import "./cardnew.css";

const CardNew = () => {
  return (
    <>
      <div className="Cardnew">
        <div className="list-card">
          <div className="card-heads">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbx7gnSNKIAo_m99EU-5YDpEIRS-iN1mHtMA&usqp=CAU" />
            <h1>Product Engineering</h1>
            <ul>
              <li>MVP Development</li>
              <li>Product Development</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
          <div className="card-parah">
            <p>
              Product engineering refers to the process of designing and
              developing a device, assembly, or system such that it be produced
              as an item for sale through some product manufacturing process.
            </p>
          </div>
        </div>
        <div className="list-card">
          <div className="card-heads">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBWIo0tsnEGdAYFcZ7v0mkAvPMZrvjsQb2Q&usqp=CAU" />
            <h1>Digital Experience</h1>
            <ul>
              <li>Digital Transformation</li>
              <li>Content Management Solutions</li>
              <li>Digital Commerce</li>
            </ul>
          </div>
          <div className="card-parah">
            <p>
              Digital experiences are that portion of technology that allows
              companies to go beyond digitizing paper processes in order to
              create services that are possible only because of the internet and
              other modern technologies.
            </p>
          </div>
        </div>
        <div className="list-card">
          <div className="card-heads">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOVtWbu4XirqjqnBwNKlq9rIhXP2SMkyKLw&usqp=CAU" />
            <h1>Growth Hacking</h1>
            <ul>
              <li>Inbound Marketing</li>
              <li>Content Marketing</li>
              <li>Performance Marketing</li>
            </ul>
          </div>
          <div className="card-parah">
            <p>
              Growth hacking also known as 'growth marketing' is the use of
              resource-light and cost-effective digital marketing tactics to
              help grow and retain an active user base, sell products and gain
              exposure.
            </p>
          </div>
        </div>
        <div className="list-card">
          <div className="card-heads">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJqrZ_PrgKD6LrY2_rMXP-U5Okv3h77jPHQ&usqp=CAU" />
            <h1>Enterprise Solutions</h1>
            <ul>
              <li>Application Modernization</li>
              <li>BI and Analytics</li>
              <li>SaaS Application Development</li>
            </ul>
          </div>
          <div className="card-parah">
            <p>
              Enterprise solutions are designed to integrate multiple facets of
              a company’s business through the interchange of information from
              various business process areas and related databases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardNew;
