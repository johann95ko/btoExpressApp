import React, { Component } from "react";
import Map from "../components/Map";
import Form from "../components/Form"
import MapsForm from "../components/MapsForm";
import StaticMap from "../components/StaticMap";


export const LocationPage = () => {
  return (
    <body id="locationBody">
    <div className="main" id="locationInstructions">
      <h1>Location Calculator</h1>
      <h5>Find out the distance from all available BTOs to your destination</h5>
    <MapsForm/>
    </div>
    <div className="main" id="map">
    <StaticMap />
    </div>
  
  </body>
  );
};

export default LocationPage;
