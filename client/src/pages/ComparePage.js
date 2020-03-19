import React from "react";
import "./pages.css";
import { TemporaryDrawer } from "../components/chooseBTO";


export const ComparePage = () => {
  

  return (
    <div className="page-container">
    <div className="content-wrap">
    <body>
    <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DDDDDD", textAlign:"center"}}>
      <h2 className="page-title">Compare BTOs</h2>
      <p className="sub-title">Find Out Which BTO Suits You Best</p>
    </div>
      <div className="flexRow" style={{ height: "100vh"}}>
        < TemporaryDrawer/>
      
      </div>
  
  
    </body>
    </div>   

    </div>


  );
};
