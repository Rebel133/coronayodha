import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import Background from "../img/background.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section>
        <header>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 order-1 order-md-1 left_sec">
                <h2>We Are Here For Your Care</h2>
                <h1>Stay Home Stay Safe</h1>
                <h2>We Are Here To Help You 24x7</h2>
                <NavLink
                  to="/about"
                  className="btn border border-primary shadow btn-outline-primary"
                >
                  About Us
                </NavLink>
              </div>
              <div className="ol-md-6 col-sm-6 order-1 order-md-2 ">
                <img src={Background} alt="background" className="center" />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Home;
