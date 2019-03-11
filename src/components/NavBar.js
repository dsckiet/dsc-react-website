import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-default"
        role="navigation-demo"
        id="demo-navbar"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navigation-example-2"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <span style={{ color: "#333", fontWeight: "700" }}>DSC</span>
              <span style={{ color: "steelblue", fontWeight: "700" }}>
                KIET
              </span>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navigation-example-2">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" className="btn btn-simple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="btn btn-simple">
                  About
                </Link>
              </li>
              <li>
                <a href="/#guidelines" className="btn btn-simple">
                  Guidelines
                </a>
              </li>
              <li>
                <Link to="/events" className="btn btn-simple">
                  Events
                </Link>
              </li>
              <li>
                <a
                  className="btn btn-simple"
                  href="https://www.kiet.edu/"
                  target="_blank"
                >
                  KIET
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/dsckiet/"
                  target="_blank"
                  className="btn btn-simple"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dsckiet"
                  target="_blank"
                  className="btn btn-simple"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
