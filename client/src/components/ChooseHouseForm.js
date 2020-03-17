import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export const ChooseHouseForm = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select BTO For Comparison</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.cck}
                onChange={props.handleChange("cck")}
                value="cck"
              />
            }
            label="cck"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.Tengah}
                onChange={props.handleChange("Tengah")}
                value="Tengah"
              />
            }
            label="Tengah"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.Pasir}
                onChange={props.handleChange("Pasir")}
                value="Pasir"
              />
            }
            label="Pasir"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.Tampines}
                onChange={props.handleChange("Tampines")}
                value="Tampines"
              />
            }
            label="Tampines"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
