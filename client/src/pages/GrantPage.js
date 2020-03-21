import React from "react";
import "./pages.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormG from "../components/GrantCalc";
import {Footer} from "../components/Footer";

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
      <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DDDDDD", textAlign:"center"}}>
        <h2 className="page-title">Grant Calculator</h2>
        <p className="sub-title">How much grant can I get?</p>
      </div>

      <div id="grantForm" style={{paddingBottom:"80px"}}>
        
          <Paper elevation= {24} id="formContent">
        <FormG/>
          
        </Paper>
        
      </div>
      <div>
        <img className="landscape" src="https://cdn.clipart.email/3644262fb7ec3f9b40361e0329af3faa_houston-vector-skyline-singapore-picture-1104648-houston-vector-_2496-752.png" 
        style={{opacity:0.4, maxWidth:"100%", marginBottom:"-3%"}}></img>
      </div>
      <Footer/>
    </body>

  );
};


export default GrantPage;