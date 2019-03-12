import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Events from "./components/Events/Events";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={Events} />
      </div>
    );
  }
}

export default App;
