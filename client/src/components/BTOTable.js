import React, { useState, useEffect } from "react";
import { BTOTableColumn } from "./BTOTableColumn";
import { BTOTableFixed } from "./BTOTableFixed";
import { LoadSpinners } from "./LoadSpinners";
import axios from "axios";
import "./components.css";

export const BTOTable = props => {
  const [house, setHouse] = useState([]);
  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [flatTypeAndCost, setFlatTypeAndCost] = useState([]);
  const [loading, setLoading] = useState(true);

  // component did mount
  useEffect(() => {
    getLink();
  }, []);

  const getLink = async () => {
    try {
      const response1 = await axios("http://localhost:5000/api/housing");
      for (const eachHouse of response1.data) {
        setHouse(curRows => [
          ...curRows,
          {
            key: eachHouse.key,
            name: eachHouse.name,
            location: eachHouse.location,
            flatTypeAndCost: eachHouse.flatTypeAndCost
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
      <BTOTableFixed />
      {house.map(eachHouse => {
        if (props.displayHouseState[eachHouse.key]) {
          return (
            <BTOTableColumn
              key={eachHouse.key}
              name={eachHouse.name}
              location={eachHouse.location}
              flatTypeAndCost={eachHouse.flatTypeAndCost}
            />
          );
        }
      })}
    </div>
  );
};

// <div className="tableBackground">
// {users.map(eachUser => (
//   <ErrorLog
//     key={eachUser.name}
//     name={eachUser.name}
//     errorLogs={eachUser.errorLogs}
//     position={eachUser.position}
//     department={eachUser.department}
//     errorCount={eachUser.errorCount}
//   />
// ))}
// </div>
