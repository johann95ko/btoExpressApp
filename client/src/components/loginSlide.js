import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { LoginForm } from "../components/LoginForm";

const useStyles = makeStyles({
  list: {
    width: '320px',
  },
  fullList: {
    width: 'auto',
  },
});

export const LoginDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
      <body >
    <div id="login"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"  
    >
        Log in to BTOAnywhere
      <LoginForm/>
      <Button  variant="contained" color="primary" onClick={toggleDrawer(anchor, false)}>
             Log In
         </Button>
        
    </div>
    <div id="forgot">
    <a href="/">Forgotten username or password?</a>
    </div>
    </body>
  );

  return (
    <div>
        <React.Fragment key='right'>
          <Button onClick={toggleDrawer('right', true)}>Login</Button>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    
    </div>
  );
}

