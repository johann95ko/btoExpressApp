import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import BTOfront from "../Images/BTOfront.png";
import Image from 'react-bootstrap/Image'

const useStyles = makeStyles(theme => ({

    title: {
      flexGrow: 1,
      
    },
    fullWidth: {
      width: '100%',
    },
  }));



function Landing() {
    const classes = useStyles();
    return (
        <main className={classes.fullWidth}>
          <div className={classes.title}>
            <Typography variant='h6' paragraph>All your BTO needs, in one place</Typography>
            <button>
                View all BTOs
            </button>
            <Image src={BTOfront} alt="HDB" height="300" fluid/>
          </div>
        </main>
      );
}

export default Landing;