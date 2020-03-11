import React, {useState} from "react";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import GrantCalculator from '../components/GrantCalculator'


const GrantPage = () => {
  const [grant, setGrant] = useState(0);
  // const calculateGrant;
  return (
    <div className="flexBoxDiv">
      Grant Calculator
      <GrantCalculator />
    </div>
  );
};

export default GrantPage;
