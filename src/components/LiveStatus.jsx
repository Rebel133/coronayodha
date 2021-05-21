import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./live.css";
import Loader from "./Loader";
const LiveStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const data = await res.json();
      setIsLoading(false);
      setData(data.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <header>
          <Navbar />
          <h1 className="text-capitalize text-center mt-3 live">🔴 LIVE</h1>
          <h2 className="text-capitalize text-center">
            <u> COVID-19 CORONAVIRUS TRACKER</u>
          </h2>
          <div className="container-fluid" style={{ marginTop: "100px" }}>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card  mt-2 shadow card_hover">
                  <div className="card-body">
                    <h3 className="text-center text-uppercase p-3">
                      Our Country
                    </h3>
                    <p className="text-center text-uppercase">
                      <b> India</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card mt-2 shadow card_hover1">
                  <div className="card-body">
                    <h3 className="text-center text-uppercase p-3">
                      Total Recovered
                    </h3>
                    <p className="text-center">{data.recovered}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card mt-2 shadow card_hover2">
                  <div className="card-body ">
                    <h3 className="text-center text-uppercase p-3">
                      Total Confirmed
                    </h3>
                    <p className="text-center">{data.confirmed}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card mt-2 shadow card_hover3">
                  <div className="card-body">
                    <h3 className="text-center text-uppercase p-3">
                      total death
                    </h3>
                    <p className="text-center">{data.deaths}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card mt-2 shadow card_hover4">
                  <div className="card-body">
                    <h3 className="text-center text-uppercase p-3">
                      Total active
                    </h3>
                    <p className="text-center">{data.active}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card mt-2 shadow card_hover5">
                  <div className="card-body">
                    <h3 className="text-center text-uppercase p-3">
                      Last updated
                    </h3>
                    <p className="text-center ">{data.lastupdatedtime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default LiveStatus;
