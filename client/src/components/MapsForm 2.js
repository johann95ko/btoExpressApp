import React, { useEffect, useState } from "react";

import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const MapsForm = (props) => {
  
  return (
    <div id="searchBar">
      <form onSubmit={props.handleSubmit}>
        <label>
          Enter Your Preferred Location:
          <input type="text" value={props.formValue} onChange={props.handleChange} 
          placeholder="Toa Payoh"
          />
        </label>
        <Button variant="danger" type="submit" value="submit">
            Search
          </Button>
      </form>
    </div>
  );
};

export default MapsForm