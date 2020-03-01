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
    <div className="flexRow">
      <ChooseHouseForm
        handleChange={handleChange}
        sengkang={sengkang}
        woodlands={woodlands}
        jurong={jurong}
      />
      <div>
        <BTOTable displayHouseState={state}/>
      </div>
    </div>
  );
};
