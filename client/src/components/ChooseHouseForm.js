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
                checked={props.jurong}
                onChange={props.handleChange("jurong")}
                value="Jurong West Jewel"
              />
            }
            label="Jurong West Jewel"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.woodlands}
                onChange={props.handleChange("woodlands")}
                value="Champions Greens Woodlands"
              />
            }
            label="Champions Greens Woodlands"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.sengkang}
                onChange={props.handleChange("sengkang")}
                value="Fernvale Vines"
              />
            }
            label="Fernvale Vines"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
