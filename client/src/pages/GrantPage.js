import React, {useState} from "react";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import GrantCalculator from '../components/GrantCalculator'
import {Footer} from '../components/Footer'
import "../components/components.css";

const GrantPage = () => {
  const [grant, setGrant] = useState(0);
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
