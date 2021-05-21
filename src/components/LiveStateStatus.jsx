import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./livestatus.css";
import Loader from "./Loader";

const LiveStateStatus = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actulData = await res.json();
    setIsLoading(false);
    setData(actulData.statewise);
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
          <div className="container-fluid mt-2 overflow-hidden">
            <div className="main-heading">
              <h1 className="mb-3 text-center text-uppercase font-weight-bold">
                <span className="font-weight-bold ">INDIA &nbsp;</span>
                Covid-19 Dashboard
              </h1>
            </div>
            <div className="table-responsive ">
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((curElem, index) => {
                    return (
                      <tr key={index}>
                        <th>{curElem.state}</th>
                        <td>{curElem.confirmed}</td>
                        <td>{curElem.recovered}</td>
                        <td>{curElem.deaths}</td>
                        <td>{curElem.active}</td>
                        <td>{curElem.lastupdatedtime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default LiveStateStatus;
