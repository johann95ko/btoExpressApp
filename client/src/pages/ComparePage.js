import React from "react";
import "./pages.css";
import { ChooseBto } from "../components/chooseBTO";
import {Footer} from "../components/Footer"
import { useFetch } from "../customHooks/useFetch";
import { LoadSpinners } from "../components/LoadSpinners";



export const ComparePage = () => {
  const { loading } = useFetch("/api/bto");
  
  if (loading) {
    console.log("loading");
    return <LoadSpinners />;
  }

  return (

    <body>
    <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DDDDDD", textAlign:"center"}}>
      <h2 className="page-title">Compare BTOs</h2>
      <p className="sub-title">We help you choose the right home with ease.</p>
    </div>
      <div className="flexRow">
        < ChooseBto/>
      </div>
      <div>
        <img className="landscape" src="https://cdn.clipart.email/3644262fb7ec3f9b40361e0329af3faa_houston-vector-skyline-singapore-picture-1104648-houston-vector-_2496-752.png" 
        style={{opacity:0.4, maxWidth:"100%", marginBottom:"-3%"}}></img>
      </div>
      <Footer/> 
  </body>
  


  );
};