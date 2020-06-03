import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { ChooseHouseForm } from "./ChooseHouseForm";
import { BTOTable } from "./BTOTable";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const ChooseBto = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [BTOstate, BTOsetState] = React.useState({
    cck: true,
    Tengah: true,
    Pasir: false,
    Tampines: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (name) => (event) => {
    BTOsetState({ ...BTOstate, [name]: event.target.checked });
  };

  const { cck, Tengah, Pasir, Tampines } = BTOstate;

  const list = (anchor) => (
    <body>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "bottom",
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <ChooseHouseForm
          handleChange={handleChange}
          cck={cck}
          Tengah={Tengah}
          Pasir={Pasir}
          Tampines={Tampines}
        />
      </div>
      <div id="BTOButton">
        <Button
          style={{ backgroundColor: "firebrick", border: "none" }}
          variant="contained"
          color="primary"
          onClick={toggleDrawer(anchor, false)}
        >
          COMPARE
        </Button>
      </div>
    </body>
  );

  return (
    <div id="addButton">
      <React.Fragment key="bottom">
        <Button
          style={{
            backgroundColor: "firebrick",
            border: "none",
            marginBottom: "20px",
          }}
          variant="contained"
          color="primary"
          onClick={toggleDrawer("bottom", true)}
        >
          {" "}
          + Add BTOs to Compare
        </Button>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </React.Fragment>
      <BTOTable displayHouseState={BTOstate} />
    </div>
  );
};
