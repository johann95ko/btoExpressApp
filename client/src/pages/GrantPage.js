import React from "react";
import "./pages.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormG from "../components/GrantCalc";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const GrantPage = () => {
  const classes = useStyles();
  return (
    <div id="grantForm">
      
        <Paper elevation= {24} id="formContent">
          
        <h2 id="grantTitle">How much grant can I get?</h2>
       <FormG/>
        
      </Paper>
      
    </div>
  );
};


export default GrantPage;