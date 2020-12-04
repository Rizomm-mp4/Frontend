import React from "react";
import "./App.css";
import "./assets/css/material-dashboard-rtl.css";
import "./assets/css/material-dashboard.min.css";
import "./assets/css/material-dashboard.css";

import Auth from "./component/Auth";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <h1>App works !</h1>
        <Route path="/login" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
