import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <HomePage />} />
      </div>
    );
  }
}

export default App;
