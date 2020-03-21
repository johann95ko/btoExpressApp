import React from "react";
import "./pages.css";
import GrantCalculator from '../components/GrantCalculator'
import {Footer} from '../components/Footer'
import "../components/components.css";

const GrantPage = () => {
  // const calculateGrant;
  return (
    <div className="page-container">
    <div className="content-wrap">
    <div className="flexBoxDiv">
      Grant Calculator
      <GrantCalculator />
      
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default GrantPage;