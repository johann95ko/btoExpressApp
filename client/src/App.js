import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { ComparePage } from "./pages/ComparePage";
import { NoPageFound } from "./pages/NoPageFound";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/compare" component={ComparePage} />
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  );
}

export default App;
