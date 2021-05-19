import React from "react";
import Navbar from "./Navbar";
import imgSrc from "../img/whatsapp.jpg";
const Contact = () => {
  return (
    <>
      <header>
        <Navbar />
        <h1 className="text-capitalize text-center mt-5">🔴 Contact Us</h1>
        <div className="container-fluid" style={{ marginTop: "100px" }}>
          <div className="row mt-3 ">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card  mt-2 shadow card_hover">
                <div className="card-body">
                  <h3 className="text-center text-uppercase p-3">
                    Sandesh Khore
                  </h3>
                  <p className="text-center text-uppercase">
                    <b> Team Leader</b> || <b>Phone no. 9657511476</b>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card mt-2 shadow card_hover1">
                <div className="card-body">
                  <h3 className="text-center  p-3">Yash</h3>
                  <p className="text-center text-uppercase">
                    <b>Team member</b> || <b>phone no. 9608088626</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card mt-2 shadow card_hover2">
                <div className="card-body ">
                  <h3 className="text-center text-uppercase p-3">karan</h3>
                  <p className="text-center text-uppercase">
                    <b>Team member</b> || <b>phone no. 9130005571</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-capitalize text-center mt-5 live">
            🔴 To Join whatsapp group
          </h1>
          <div className="row mt-3 justify-content-center">
            <div
              className="col-sm-12 col-md-4 col-lg-4 text-center"
              style={{ marginTop: "150px" }}
            >
              <h2 style={{ color: "#2d85e3" }}>Scan this QR Code</h2>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <img src={imgSrc} className="float-lg-right" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Contact;
