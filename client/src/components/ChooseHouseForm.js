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
    
  },
  row: {
    flexDirection: 'row',
  }
}));

export const ChooseHouseForm = props => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <FormControl component="fieldset" className={classes.formControl} fullWidth="true">
        <FormLabel component="legend" style={{textAlign:"center"}}>Choose your Picks</FormLabel>
        <FormGroup id="formGroup" className={classes.row}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.cck}
                onChange={props.handleChange("cck")}
                value="cck"
                indeterminate
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
                indeterminate
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
                indeterminate
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
                indeterminate
              />
            }
            label="Tampines"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
