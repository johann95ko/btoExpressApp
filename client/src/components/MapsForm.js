import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const MapsForm = props => {
  return (
    <div id="searchBar">
      <form onSubmit={props.handleSubmit}>
        <label>
          Enter a Location:
          <input
            type="text"
            value={props.formValue}
            onChange={props.handleChange}
            placeholder="Orchard Road"
          />
        </label>
        <Button variant="danger" type="submit" value="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default MapsForm;
