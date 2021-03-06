import React, { useState } from "react";
import StaticMap from "../components/StaticMap";
import { MapsForm } from "../components/MapsForm";
import { MapsTable } from "../components/MapsTable";
import ReactDOM from "react-dom";
import MapWithADirectionsRenderer from "../components/MapWithADirectionsRenderer";
import axios from "axios";
import { Footer } from "../components/Footer";

let btoLocations = [
  "Choa Chu Kang Grove, Keat Hong Link",
  "West Scape @ Bukit Batok, 433A Bukit Batok West Ave 8, Singapore 651433",
  "Pasir Ris Drive, Pasir Ris Green",
  "Tampines Street 96, Tampines Street 92"
];

let distancePromises = [];

export const LocationPage = () => {
  const [distances, setDistances] = useState([]);
  const [formValue, setFormValue] = useState("");
  const handleChange = event => {
    setFormValue(event.target.value);
  };
  const handleSubmit = event => {
    ReactDOM.render(
      <MapWithADirectionsRenderer origin={formValue} />,
      document.getElementById("mapplace")
    );

    for (const eachBto of btoLocations) {
      distancePromises.push(
        axios.post("http://localhost:5000/api/map/distance", {
          originLoc: formValue,
          destinationLoc: eachBto
        })
      );
    }

    if (distances.length !== 0) {
      setDistances([]);
    }

    Promise.all(distancePromises).then(res => {
      for (const eachRes of res) {
        setDistances(curRow => [
          ...curRow,
          {
            destinationName: eachRes.data[0],
            distance: eachRes.data[1],
            duration: eachRes.data[2]
          }
        ]);
      }
    });

    distancePromises = [];
    event.preventDefault();
  };

  return (
    <body>
      <div
        className="main"
        id="locationInstructions"
        style={{
          padding: "100px",
          paddingBottom: "30px",
          backgroundColor: "#fff",
          textAlign: "center"
        }}
      >
        <div className="locationheader">
          <h2 className="page-title">Location Calculator</h2>
          <p className="sub-title">
            Let us show you the BTOs that are nearest to your preferred
            location!
          </p>
        </div>
      </div>
      <MapsForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formValue={formValue}
      />
      <div className="main" id="map">
        <StaticMap />
      </div>
      <div className="main" id="mapTable">
        <MapsTable
          rows={distances.sort(function(a, b) {
            if (a.duration > b.duration) {
              return 1;
            } else if (a.duration < b.duration) {
              return -1;
            } else {
              return 0;
            }
          })}
        />
      </div>
    </body>
  );
};

export default LocationPage;
