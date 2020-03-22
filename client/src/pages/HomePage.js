import React, { useEffect } from "react";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import Carousel from "../components/frontCarousel";
import Card from "../components/bCard";
import { CardDeck } from "react-bootstrap";
import { LoadSpinners } from "../components/LoadSpinners";
import { Footer } from "../components/Footer";

import useGlobalState from "../customHooks/useGlobalState";

export const HomePage = () => {
  const { data, loading } = useFetch("/api/bto");
  const globalState = useGlobalState();

  if (loading) {
    // console.log("loading");
    return (
      <div style={{ height: "100vh" }}>
        <LoadSpinners />
      </div>
    );
  }

  return (
    <body>
      <div className="main" id="section1">
        <div style={{ height: "117vh" }}>
          <Carousel />
        </div>
      </div>

            
      <div class="main" id="section2">
        <h1 className="page-title">Available BTOs</h1>
        <h3 className="page-title-2"><center>We help you choose the right home with ease.</center></h3>
 
    <div class="row">
    <div class="col-md-2">
    </div>
 
    <div class="col-md-8">
      
    <CardDeck>
          {data.map(eachHousing => (
            <Card
              key={eachHousing.id}
              btoName={eachHousing.Name}
              shortDesc={eachHousing.ShortestDesc}
              Image={eachHousing.Image}
            />
          ))}
        </CardDeck>
      </div>

      <div class="col-md-2">
    </div>
      </div>

      </div>
    </body>
  );
};
