
import React, { Component } from 'react';
import Map from "../components/Map";
import Form from "../components/Form"
import StaticMap from "../components/StaticMap";


export const LocationPage = () => {
  return (
    <body id="locationBody">
    <div className="main" id="locationInstructions">
      <h2>Location Calculator</h2>
      <p>Find out the distance from all available BTOs to your destination</p>
    <Form/>
    </div>
    <div className="main" id="map">
    <StaticMap />
    </div>
  
  </body>
  );
};

export default LocationPage;

