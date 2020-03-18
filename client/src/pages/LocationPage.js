import React, { useEffect, useState } from "react";
import StaticMap from "../components/StaticMap";
import { MapsForm } from "../components/MapsForm";
import { MapsTable } from "../components/MapsTable";
import ReactDOM from "react-dom";
import MapWithADirectionsRenderer from "../components/MapWithADirectionsRenderer";
import axios from "axios";

let btoLocations = [
  "Choa Chu Kang Grove, Keat Hong Link",
  "Bukit Batok Road, Tegah Park Avenue",
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
    <body id="locationBody">
    {/* <div className="main" id="locationInstructions">
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
  </body> */}
  
      <div>
        <MapsForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formValue={formValue}
        />
        <StaticMap />
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
