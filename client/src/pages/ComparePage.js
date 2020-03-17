import React from "react";
import "./pages.css";
import { BTOTable } from "../components/BTOTable";
import { ChooseHouseForm } from "../components/ChooseHouseForm";

export const ComparePage = () => {
  const [state, setState] = React.useState({
    sengkang: true,
    woodlands: true,
    jurong: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { sengkang, woodlands, jurong } = state;

  return (
    <div>
      <div className="flexRow" style={{ height: "400px" }}>
        <ChooseHouseForm
          handleChange={handleChange}
          sengkang={sengkang}
          woodlands={woodlands}
          jurong={jurong}
        />
      </div>
      <div className="flexRow" style={{ height: "100px", marginTop: "300px" }}>
        <BTOTable displayHouseState={state} />
      </div>
    </div>
  );
};
