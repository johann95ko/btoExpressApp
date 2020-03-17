import React from "react";
import "./pages.css";
import { BTOTable } from "../components/BTOTable";
import { ChooseHouseForm } from "../components/ChooseHouseForm";

export const ComparePage = () => {
  const [state, setState] = React.useState({
    cck: true,
    Tengah: true,
    Pasir: true,
    Tampines: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { cck, Tengah, Pasir, Tampines } = state;

  return (
    <div>
      <div className="flexRow" style={{ height: "400px" }}>
        <ChooseHouseForm
          handleChange={handleChange}
          cck={cck}
          Tengah={Tengah}
          Pasir={Pasir}
          Tampines={Tampines}
        />
      </div>
      <div className="flexRow" style={{ height: "100px", marginTop: "300px" }}>
        <BTOTable displayHouseState={state} />
      </div>
    </div>
  );
};
