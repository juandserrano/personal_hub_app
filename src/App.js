import React from "react";
import Fiducuenta from "./routes/Fiducuenta/Fiducuenta";
import Home from "./routes/Home/Home";
import { Grid } from "@material-ui/core";
import Plex from "./routes/Plex/Plex";
import Keto from './routes/Keto/Keto'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <Router>
          <Route path="/fiducuenta" exact component={Fiducuenta} />
          <Route path="/" exact component={Home} />
          <Route path="/plex" exact component={Plex} />
          <Route path="/keto" exact component={Keto} />
    </Router>
  );
}

export default App;