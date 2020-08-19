import React from "react";
import Fiducuenta from "./routes/Fiducuenta/Fiducuenta";
import Home from "./routes/Home/Home";
import Plex from "./routes/Plex/Plex";
import Keto from "./routes/Keto/Keto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
