import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapWithADirectionsRenderer from "./MapWithADirectionsRenderer";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/BTOLogo.png";

export const MapsForm = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Preferred Location:
          <input type="text" value={formValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
