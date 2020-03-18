import React from "react";
import "./pages.css";
import { BTOTable } from "../components/BTOTable";
import { ChooseHouseForm } from "../components/ChooseHouseForm";
import {Footer} from '../components/Footer'
import "../components/components.css";

export const ComparePage = () => {
  const [state, setState] = React.useState({
    cck: true,
    Tengah: true,
    Pasir: true,
    Tampines: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { cck, Tengah, Pasir, Tampines } = state;

  return (
    <div className="page-container">
    <div className="content-wrap">
    <body>
    <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DEE4EC", textAlign:"center"}}>
      <h1>Compare BTOs</h1>
      <h6>Compare the different features of various BTOs</h6>
    </div>
      <div className="flexRow" style={{ height: "100vh"}}>
        <ChooseHouseForm 
          handleChange={handleChange}
          cck={cck}
          Tengah={Tengah}
          Pasir={Pasir}
          Tampines={Tampines}
        />
      
        <BTOTable displayHouseState={state} />
      </div>
  
  
    </body>
    </div>   

    <Footer/> 
    </div>


  );
};
