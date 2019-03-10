import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div
          className="landing-header"
          style={{
            backgroundImage: "url('./assets/img/background-cover.jpeg')"
          }}
        >
          <div className="container">
            <div
              className="motto col-lg-8"
              style={{ color: "#fff", fontWeight: "700" }}
            >
              <h2 className="title">Developer Student Clubs - KIET</h2>
              <hr />
              <p>
                <b>
                  Google collaborates with university students who are
                  passionate about growing developer communities and support
                  them with starting student clubs on their campuses.
                  <br />
                  DSCKIET is the official Google recognised student clubs at
                  KIET.
                </b>
              </p>
              <br />
              <a
                href="https://goo.gl/forms/3KsK77zsggCLqwXi1"
                target="_blank"
                className="btn btn-lg btn-neutral"
              >
                Register
              </a>
              <br />
            </div>
            <div className="col-lg-4 motto">
              <br />
              <img src="./assets/img/dsclogo.png" style={{ width: "100%" }} />
              <br />
            </div>
          </div>
        </div>

        <div id="about" className="main">
          <div
            className="section landing-section"
            style={{ background: "#fff", color: "#333", fontWeight: "700" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h2>
                    <b>What is DSC?</b>
                  </h2>
                  <br />
                  <p>
                    A Developer Student Clubs is a Google recognised student
                    body at a college which directly reports to Google for their
                    activities and is supported by the tech giant.
                    <br />A DSC conducts workshops, seminars and other fun
                    activities which help the students connect with Google.
                  </p>
                </div>
                <div className="col-lg-5">
                  <img
                    src="./assets/img/introducation-illustration.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="section landing-section"
            style={{ background: "#F5F7F7", color: "#333", fontWeight: "700" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    alt=""
                    src="./assets/img/technologies1.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-lg-7">
                  <h2>
                    <b>Focus</b>
                  </h2>
                  <br />
                  <p className="row">
                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Android App Development{" "}
                      <br />
                    </span>

                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Actions on Google <br />
                    </span>

                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Machine Learning <br />
                    </span>

                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Chrome Extension <br />
                    </span>

                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Adobe XD <br />
                    </span>

                    <span className="col-lg-6">
                      <i className="fa fa-angellist" /> Web Development <br />
                    </span>

                    <span className="col-lg-12">
                      <i className="fa fa-null" /> and many more... <br />
                    </span>

                    <div className="row">
                      <div className="col-lg-12">
                        We will achieve this via regular workshops, coding
                        sessions, study jam, contests, etc.
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax" />

          <div
            id="guidelines"
            className="section section-light landing-section"
            style={{ background: "#fff", color: "#333", fontWeight: "700" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <img
                    src="./assets/img/illustration-guidelines.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
                <div className="col-lg-7 tab">
                  <h2>
                    <b>DSC Guidelines</b>
                  </h2>
                  <br />
                  <p>
                    <b>
                      <ul>
                        <li>
                          Grow your knowledge on developer technologies and more
                          through peer to peer workshops and events.
                        </li>
                        <br />
                        <li>
                          Gain relevant industry experience by solving problems
                          for local organizations with technology based
                          solutions.
                        </li>
                        <br />
                        <li>
                          Showcase your prototypes and solutions to your local
                          community and industry leaders.
                        </li>
                        <br />
                      </ul>
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
