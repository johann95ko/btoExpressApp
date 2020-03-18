import React from "react";
import "./pages.css";
import { TemporaryDrawer } from "../components/chooseBTO";


export const ComparePage = () => {


  return (
    <body>
    <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DEE4EC", textAlign:"center"}}>
      <h1>Compare BTOs</h1>
      <h6>Compare the different features of various BTOs</h6>
    </div>
      <div className="flexRow" style={{ height: "100vh"}}>
        < TemporaryDrawer />
      
      </div>
    
    </body>
  );
};
