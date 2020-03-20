import React, { useState, useEffect } from "react";
import { BTOTableColumn } from "./BTOTableColumn";
import { BTOTableFixed } from "./BTOTableFixed";
import { LoadSpinners } from "./LoadSpinners";
import axios from "axios";
import "./components.css";

export const BTOTable = props => {
  const [house, setHouse] = useState([]);
  const [psi, setPsi] = useState(0);

  const [loading, setLoading] = useState(true);

  // component did mount
  useEffect(() => {
    getLink();
  }, []);

  const getLink = async () => {
    try {
      const response1 = await axios("http://localhost:5000/api/bto");
      const response2 = await axios(
        "https://api.data.gov.sg/v1/environment/psi"
      );

      for (const eachBTO of response1.data) {
        setHouse(curRows => [
          ...curRows,
          {
            key: eachBTO.KeyName,
            image: eachBTO.Image,
            name: eachBTO.Name,
            launchDate: eachBTO.MonthOfLaunch,
            location: eachBTO.Address,
            type: eachBTO.Type,
            shortestDesc: eachBTO.ShortestDesc,
            rooms: eachBTO.TypeOfFlats,
            nearestMrt: eachBTO.NearestMrt,
            nearestMall: eachBTO.NearestMall,
            nearestMarket: eachBTO.NearestMarket,
            region: eachBTO.Region,
            
          }
        ]);
      }
      // console.log(house);

      setPsi({
        west: response2.data.items[0].readings.psi_twenty_four_hourly.west,
        east: response2.data.items[0].readings.psi_twenty_four_hourly.east,
        south: response2.data.items[0].readings.psi_twenty_four_hourly.south,
        north: response2.data.items[0].readings.psi_twenty_four_hourly.north,
        central:
          response2.data.items[0].readings.psi_twenty_four_hourly.central,
        national:
          response2.data.items[0].readings.psi_twenty_four_hourly.national
      });

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  if (loading) {
    return <LoadSpinners />;
  }
  return (
    <div className="flexRowDiv" style={{ marginTop: "180px" }}>
      <div className="flexRowBTO">
        {house.map(eachBTO => {
          for (const [eachHouseKey, eachHouseVal] of Object.entries(
            props.displayHouseState
          )) {
            if (eachBTO.key == eachHouseKey && eachHouseVal) {
              for (const [eachPsiKey, eachPsiVal] of Object.entries(psi)) {
                if (eachBTO.region == eachPsiKey) {
                  var btoPsi = eachPsiVal;
                }
              }
              return (
                <BTOTableColumn
                  key={eachBTO.key}
                  image={eachBTO.Image}
                  name={eachBTO.name}
                  location={eachBTO.location}
                  type={eachBTO.type}
                  shortestDesc={eachBTO.shortestDesc}
                  rooms={eachBTO.rooms}
                  nearestMrt={eachBTO.nearestMrt}
                  nearestMall={eachBTO.nearestMall}
                  nearestMarket={eachBTO.nearestMarket}
                  launchDate={eachBTO.launchDate}
                  psiIndex={btoPsi}
                 
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};
