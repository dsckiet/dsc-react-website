import React, { Component } from "react";
import "./Events.css";

export default class Events extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main" id="about">
          <div
            className="section landing-section"
            style={{ background: "#fff", color: "#333", fontWeight: "700" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card text-center">
                    <div className="card-title">Introduction to GitHub</div>
                    <hr />
                    <div className="card-image">
                      <img
                        alt=""
                        src="./assets/img/dsc-github-workshop.png"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="card-text" style={{ paddingBottom: "8px" }}>
                      Date: 20th February 2019
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card text-center">
                    <div className="card-title">Introduction to NodeJS</div>
                    <hr />
                    <div className="card-image">
                      <img
                        alt=""
                        src="./assets/img/dsc-nodejs-workshop.png"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="card-text" style={{ paddingBottom: "8px" }}>
                      Date: 21st-22nd February 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
