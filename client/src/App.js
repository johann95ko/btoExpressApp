import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { ComparePage } from "./pages/ComparePage";
import { GrantPage } from "./pages/GrantPage";
import { NoPageFound } from "./pages/NoPageFound";

import { LocationPage } from "./pages/LocationPage";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/compare" component={ComparePage} />
        <Route path="/grant" component={GrantPage} />
        <Route path="/location" component={LocationPage} />
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  );
}

export default App;
