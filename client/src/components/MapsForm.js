import React, { useEffect, useState } from "react";

import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const MapsForm = (props) => {
  
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Enter Your Preferred Location:
          <input type="text" value={props.formValue} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
