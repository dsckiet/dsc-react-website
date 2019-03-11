import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import Events from "./components/Events";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={Events} />
        <Footer />
      </div>
    );
  }
}

export default App;
