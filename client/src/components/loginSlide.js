import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { LoginForm } from "../components/LoginForm";
import Image from 'react-bootstrap/Image';
import Lari from "../Images/lariLiiiii.jpg";
import { RegisterForm } from './RegisterForm';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    height: "100%"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  
}));

export const LoginDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });
  const [loginState, loginsetState] = React.useState({
      loggedIn: false,
  })
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
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

    return(
    <div id="lari">
        <Image src={Lari} alt="lari" style={{height:"30px",width:"30px"}} roundedCircle/>
         Lari Li
    </div>
    )
    }
  }


  const list = anchor => {
      return(
      <body >
    <div id="login" 
      className={clsx(classes.list)}
      role="presentation"  
    >
        <h5>Log In to BTOAnywhere</h5>
    
      <LoginForm/>
      <Button style={{backgroundColor:"firebrick", border:"none"}} id="loginButton" variant="contained" color="primary" onClick={loginToggle('loggedIn', true)}>
             Log In
      </Button>
         
     <p>
    <a href="/">Forgot username or password?</a>
    </p>
    
    </div>
    </body>
    
      )
  };

  const fill = anchor => {
      return(
    <body >
  <div id="register" 
    className={clsx(classes.list)}
    role="presentation"  
  >
      <h5>Create an Account</h5>
  
    <RegisterForm/>
    <Button style={{backgroundColor:"firebrick", border:"none"}} id="registerButton" variant="contained" color="primary" >
           Register
       </Button>
  
  </div>
  </body>
    
    )
  
};

  return (
    <div>
        <React.Fragment key='right'>
          <Button id="logButton" onClick={toggleDrawer('right', true)}>
            Login
          </Button>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
          <AppBar position="static">
        <Tabs style={{backgroundColor:"firebrick"}} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Log In" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {list('right')}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {fill('right')}
      </TabPanel>
          </Drawer>
        </React.Fragment>
        {loggedInFunction()}
    </div>
    
  );
}

