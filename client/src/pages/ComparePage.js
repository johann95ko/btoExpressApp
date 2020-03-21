import React from "react";
import "./pages.css";
import { ChooseBto } from "../components/chooseBTO";
import {Footer} from "../components/Footer"

import { useFetch } from "../customHooks/useFetch";
import Carousel from "../components/frontCarousel";
import Card from "../components/bCard";
import { CardDeck } from "react-bootstrap";
import { LoadSpinners } from "../components/LoadSpinners";



export const ComparePage = () => {
  const { data, loading } = useFetch("/api/bto");
  
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
      <Footer/> 
  </body>
  


  );
};