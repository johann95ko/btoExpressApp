import React, { useEffect, useState } from "react";
import StaticMap from "../components/StaticMap";
import { MapsForm } from "../components/MapsForm";
import ReactDOM from "react-dom";
import MapWithADirectionsRenderer from "../components/MapWithADirectionsRenderer";
import {Footer} from "../components/Footer";
import "../components/components.css";
export const LocationPage = () => {
  const [formValue, setFormValue] = useState("");
  const handleChange = event => {
    setFormValue(event.target.value);
  };
  const handleSubmit = event => {
    ReactDOM.render(
      <MapWithADirectionsRenderer origin={formValue} />,
      document.getElementById("mapplace")
    );

    event.preventDefault();
  };
  return (
    <div className="page-container">
    <div className="content-wrap">
    <body id="locationBody">
    <div className="main" id="locationInstructions">
      <h1>Location Calculator</h1>
      <h5>Find out the distances from all available BTOs to your destination</h5>
   <MapsForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formValue={formValue}
      />
      
    </div>
    <div className="main" id="map">
    <StaticMap />
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
  </body>
  </div>
  <Footer/>

  </div>

  
  );
};

export default LocationPage;
