import React from "react";
import "./pages.css";
import GrantCalculator from '../components/GrantCalculator'
import GrantInfo from "../components/GrantInfo";


const GrantPage = () => {
  const [grant, setGrant] = useState(0);
  return (
    <div className="pageContainer">
      <div className="flexBoxDiv">
        <h1>How much grant can I get?</h1>
        <GrantInfo />
        <GrantCalculator />
      </div>
    </div>
  );
};
// As a couple comprising a first-timer and second-timer (FT/ ST couple), 
// you may be eligible for the Enhanced CPF Housing Grant (EHG) (Singles).

export default GrantPage;