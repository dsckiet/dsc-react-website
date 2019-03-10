import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-demo section-dark">
        <div className="container">
          <div
            className="copyright text-center"
            style={{ color: "#fff", fontWeight: "700" }}
          >
            &copy; 2019 DSC-KIET, designed with{" "}
            <i className="fa fa-heart heart" /> by{" "}
            <a href="https://www.linkedin.com/in/goelaakash79/" target="_blank">
              Aakash
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
