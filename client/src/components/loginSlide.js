import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { LoginForm } from "../components/LoginForm";
import Image from 'react-bootstrap/Image';
import Lari from "../Images/lariLiiiii.jpg";

const useStyles = makeStyles({
  list: {
    width: '100%',
    height: "100%"
  },
  
});

export const LoginDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });
  const [loginState, loginsetState] = React.useState({
      loggedIn: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const loginToggle = (props, logged) => event => {
      loginsetState({ ...loginState, [props]: logged})
      setState({ ...state, 'right': false });
  }

  const loggedInFunction = () =>{
    if (loginState.loggedIn === true){
    console.log("hello this is here");

    return(
    <div>
        <Image src={Lari} alt="lari" style={{height:"30px",width:"30px"}} roundedCircle/>
         Lari Li
    </div>
    )
    }
  }

  const list = anchor => (
      <body >
    <div id="login" 
      className={clsx(classes.list)}
      role="presentation"  
    >
        <h5>Log In to BTOAnywhere</h5>
    
      <LoginForm/>
      <Button id="loginButton" variant="contained" color="primary" onClick={loginToggle('loggedIn', true)}>
             Log In
         </Button>
         {console.log(loginState)}
     <p>
    <a href="/">Forgotten username or password?</a></p>
    </div>
    </body>
  );

  return (
    <div>
        <React.Fragment key='right'>
          <Button id="logButton" onClick={toggleDrawer('right', true)}>Login</Button>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
        {loggedInFunction()}
    </div>
    
  );
}

