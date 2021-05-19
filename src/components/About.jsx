import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import Background from "../img/about_1.png";
const About = () => {
  return (
    <>
      <section>
        <header>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 order-1 order-md-1 left_sec">
                <h2 className="text-capitalize">
                  Helping People get the right information to stay healthy is
                  more important than ever in the face of global pendamic like
                  <span> COVID-19</span>
                </h2>
                <h2 className="text-uppercase pt-5 text">
                  the moto of the group is share a needy information to those
                  needy people who have emergemcy
                </h2>
              </div>
              <div className="col-md-6 col-sm-6 order-1 order-md-2  ">
                <img src={Background} alt="background" className="center " />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default About;
