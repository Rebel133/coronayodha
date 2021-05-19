import React from "react";
import Navbar from "./Navbar";
import carousel_img_first from "../img/crousal1.png";
import carousel_img_second from "../img/crousal2.png";
import carousel_img_third from "../img/crousal3.png";
import carousel_img_forth from "../img/crousal4.png";
import carousel_img_fifth from "../img/crousal5.png";
const Precaucations = () => {
  return (
    <>
      <header>
        <Navbar />

        <div className="container-fluid ">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade overflow-hidden"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={carousel_img_forth}
                  className="d-flex"
                  style={{ width: "100%", height: "90vh" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel_img_fifth}
                  className="d-block"
                  style={{ width: "100%", height: "90vh" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel_img_third}
                  className="d-block"
                  style={{ width: "100%", height: "90vh" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel_img_first}
                  className="d-block"
                  style={{ width: "100%", height: "90vh" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel_img_second}
                  className="d-block"
                  style={{ width: "100%", height: "90vh" }}
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Precaucations;
