import React, { useState, useEffect } from "react";
import { BTOTableColumn } from "./BTOTableColumn";
import { BTOTableFixed } from "./BTOTableFixed";
import { LoadSpinners } from "./LoadSpinners";
import axios from "axios";
import "./components.css";

export const BTOTable = props => {
  const [house, setHouse] = useState([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(true);

  // component did mount
  useEffect(() => {
    getLink();
  }, []);

  const getLink = async () => {
    try {
      const response1 = await axios("http://localhost:5000/api/bto");
      for (const eachBTO of response1.data) {
        setHouse(curRows => [
          ...curRows,
          {
            key: eachBTO.KeyName,
            name: eachBTO.Name,
            location: eachBTO.Address,
            type: eachBTO.Type,
            shortestDesc: eachBTO.ShortestDesc
          }
        ]);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  if (loading) {
    return <LoadSpinners />;
  }
  return (
    <div className="flexRowDiv">
      <div className="flexRowBTO">
        {house.map(eachBTO => {
          for (const [eachHouseKey, eachHouseVal] of Object.entries(
            props.displayHouseState
          )) {
            if (eachBTO.key == eachHouseKey && eachHouseVal) {
              return (
                <BTOTableColumn
                  key={eachBTO.key}
                  name={eachBTO.name}
                  location={eachBTO.location}
                  type={eachBTO.type}
                  shortestDesc={eachBTO.shortestDesc}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};
