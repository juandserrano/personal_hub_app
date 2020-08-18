import React from "react";
import "./App.css";
import Fiducuenta from "./routes/Fiducuenta/Fiducuenta";
import Home from "./routes/Home/Home";
import { Grid } from "@material-ui/core";
import Plex from "./routes/Plex/Plex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/fiducuenta" exact component={Fiducuenta} />
      <Route path="/" exact component={Home} />
      <Route path="/plex" exact component={Plex} />
    </Router>
  );
}

export default App;
