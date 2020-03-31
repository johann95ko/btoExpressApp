import React from "react";
import "./pages.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormG from "../components/GrantCalc";
import {Footer} from "../components/Footer";
import grantlogo from "../Images/undraw_wallet_aym5.svg";


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
    <body>
      <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#fff", textAlign:"center"}}>
      <div class="grantheader">
          <h2 className="page-title">Grant Calculator</h2>
          <p className="sub-title">How much grant can I get?</p>
        </div>
      </div>

      <div id="grantForm" style={{paddingBottom:"80px"}}>
        
          <Paper elevation= {24} id="formContent">
        <FormG/>
          
        </Paper>
        
      </div>
    </body>

  );
};


export default GrantPage;