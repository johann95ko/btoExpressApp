import React, { useEffect, useState } from "react";
import StaticMap from "../components/StaticMap";
import { MapsForm } from "../components/MapsForm";
import ReactDOM from "react-dom";
import MapWithADirectionsRenderer from "../components/MapWithADirectionsRenderer";

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
    <body id="locationBody">
      <div>
        <MapsForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formValue={formValue}
        />
        <StaticMap />
      </div>
    </body>
  );
};

export default LocationPage;
