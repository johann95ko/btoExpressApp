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
  
  export const RegisterForm = () => {
    const classes = useStyles();

    return(
        <form id="registerForm" className={classes.root} noValidate autoComplete="off">
        <div>

            <TextField required id="name-input" label="Name"/>
            <TextField required id="email-input" label="Email"/>
            <TextField required id="password-input" label="Password" 
            type="password" 
            />
            <TextField required id="confirm-password-input" label="Confirm Password" 
            type="password" 
            />
            
        </div>
        </form>
    );
  }