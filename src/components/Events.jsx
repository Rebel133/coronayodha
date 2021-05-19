import React from "react";
import Navbar from "./Navbar";
import "./event.css";
const Events = () => {
  return (
    <>
      <header>
        <Navbar />
        <h2 className="text-center pb-3" style={{ color: "#2d85e3" }}>
          WE ARE STANDING TOGETHER BUT NOT STANDING TOGETHER
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="mt-5">
                    <div className="timeline">
                      <div className="timeline-wrapper timeline-wrapper-warning">
                        <div className="timeline-badge"></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h6 className="timeline-title">
                              blood donation camp
                            </h6>
                          </div>
                          <div className="timeline-body">
                            <p>
                              It was our very first successfull event conducted
                              at Nashik in collabration with Sarthi Foundataion.
                              Around 500+ people join the campaign and donated
                              blood. Major credit to Nashik Team Members
                              including Shubham B. and Mansi Pawar as well as to
                              our Leader Sandesh Khore and rest of the team
                              members for making their valuable contributions to
                              this campaign "All members were following all the
                              rules laid down by the Center and State while
                              conducting the donation camp". The main purpose of
                              our campaign was to raise awareness that
                              individuals can save lives and improve the health
                              of others by donating blood. And we were able to
                              achieve our purpose successfully.
                            </p>
                          </div>
                          <div
                            className="
                          timeline-footer
                          d-flex
                          align-items-center
                          flex-wrap
                        "
                          >
                            <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                            <span>30</span>
                            <span className="ml-md-auto font-weight-bold">
                              30th April 2021
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      timeline-wrapper timeline-inverted timeline-wrapper-danger
                    "
                      >
                        <div className="timeline-badge"></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h6 className="timeline-title">
                              Surround yourself with happy Warm and genuine
                              people
                            </h6>
                          </div>
                          <div className="timeline-body">
                            <p>
                              Keeping in mind above quote we have our first
                              session conducted by Janhavi Rao.This was a fun
                              and relaxing session. It was conducted virtually
                              via online mode. The session was all about how to
                              be happy and stay positive in this time of
                              pandemic. What to do and what not to do all the
                              points were briefly explained by the presenter.
                              Peoples from different cities of India joined the
                              session and make their valuable feedback and
                              interaction in the session. They were able to get
                              solved their doubts regarding the topic. After the
                              session we also had group discussion with our team
                              members and people who were present in the meeting
                              on how to handle various difficult situations. We
                              recieved all the positive responses from the
                              people. This shows that they enjoyed the session.
                              The main purpose of this session was to make
                              awareness about how to keep our self motivated and
                              always think positive and stay happy. We were
                              successfully able to achieve our moto.
                            </p>
                          </div>
                          <div
                            className="
                          timeline-footer
                          d-flex
                          align-items-center
                          flex-wrap
                        "
                          >
                            <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                            <span>13</span>
                            <span className="ml-md-auto font-weight-bold">
                              13th May 2021
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-wrapper timeline-wrapper-success">
                        <div className="timeline-badge"></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h6 className="timeline-title">
                              Food Distribution
                            </h6>
                          </div>
                          <div className="timeline-body">
                            <p>This is an ongoing Event yet to held...</p>
                          </div>
                          <div
                            className="
                          timeline-footer
                          d-flex
                          align-items-center
                          flex-wrap
                        "
                          >
                            <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                            <span>19</span>
                            <span className="ml-md-auto font-weight-bold">
                              21st May 2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Events;
