import React from "react";
import "./pages.css";
import { TemporaryDrawer } from "../components/chooseBTO";


export const ComparePage = () => {
  

  return (
    <div className="page-container">
    <div className="content-wrap">
    <body>
    <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DEE4EC", textAlign:"center"}}>
      <h1>Compare BTOs</h1>
      <h6>Find Out Which BTO Suits You Best</h6>
    </div>
      <div className="flexRow" style={{ height: "100vh"}}>
        < TemporaryDrawer/>
      
      </div>
  
  
    </body>
    </div>   

    </div>


  );
};
