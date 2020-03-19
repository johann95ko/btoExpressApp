import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  export const LoginForm = () => {
    const classes = useStyles();

    return(
        <form id="loginForm" className={classes.root} noValidate autoComplete="on">
        <div>

            <TextField required id="username-input" label="Username" defaultValue="lariliiiii"/>
            <TextField required id="standard-password-input" label="Password" 
            type="password" 
            />
            
        </div>
        </form>
    );
  }