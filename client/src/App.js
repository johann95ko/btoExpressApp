import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { ComparePage } from "./pages/ComparePage";
import  GrantPage  from "./pages/GrantPage";
import { NoPageFound } from "./pages/NoPageFound";
import { LocationPage } from "./pages/LocationPage";
import {LandingPage} from "./pages/LandingPage";
import {FAQpage} from "./pages/FAQpage";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/compare" component={ComparePage} />
        <Route path="/grant" component={ GrantPage } />
        <Route path="/location" component={LocationPage} />
        <Route path="/FAQ" component={FAQpage}/>
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  );
}

export default App;