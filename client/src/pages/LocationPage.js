import React, { Component } from "react";

import StaticMap from "../components/StaticMap";
import { MapsForm } from "../components/MapsForm";

export const LocationPage = () => {
  return (
    <body id="locationBody">
    <div>
      <MapsForm />
      <StaticMap />
    </div>
    </body>
  );
};

export default LocationPage;
