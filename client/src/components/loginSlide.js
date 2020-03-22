import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useGlobalState from "../customHooks/useGlobalState";
import Dropdown from "react-bootstrap/Dropdown";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export const LoginDrawer = () => {
  const globalState = useGlobalState();
  const classes = useStyles();

  const [snackSuccess, setSnackSuccess] = React.useState("error");
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openSnackReg, setOpenSnackReg] = React.useState(false);
  const [state, setState] = React.useState({
    right: false
  });
  const [loginState, loginsetState] = React.useState({
    loggedIn: false
  });

  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [userValueReg, setUserValueReg] = useState("");
  const [emailValueReg, setEmailValueReg] = useState("");
  const [passValueReg, setPassValueReg] = useState("");
  const [pass2ValueReg, setPass2ValueReg] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [value, setValue] = React.useState(0);

  const handleUserChange = event => {
    setUserValue(event.target.value);
  };
  const handlePassChange = event => {
    setPassValue(event.target.value);
  };

  const handleUserValueReg = event => {
    setUserValueReg(event.target.value);
  };
  const handleEmailValueReg = event => {
    setEmailValueReg(event.target.value);
  };
  const handlePassValueReg = event => {
    setPassValueReg(event.target.value);
  };
  const handlePass2ValueReg = event => {
    setPass2ValueReg(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleSnackCloseReg = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackReg(false);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const loginToggle = (props, logged) => event => {
    axios
      .post("http://localhost:5000/api/login/verify", {
        email: userValue,
        password: passValue
      })
      .then(response => {
        let res = response.data;
        if (res === "username or password does not exist") {
          setOpenSnack(true);
        } else if (res === "login success") {
          loginsetState({ ...loginState, loggedIn: true });
          setState({ ...state, right: true });
          globalState.setLog({ loggedIn: true });
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", userValue);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const registerToggle = () => {
    axios
      .post("http://localhost:5000/api/login/register", {
        name: userValueReg,
        email: emailValueReg,
        password: passValueReg,
        password2: pass2ValueReg
      })
      .then(response => {
        let res = response.data;
        if (res === "user registration successful") {
          setOpenSnackReg(true);
          setRegisterError(res);
          setSnackSuccess("success");
        } else {
          setRegisterError(res);
          setOpenSnackReg(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const logOutToggle = () => {
    loginsetState({ ...loginState, loggedIn: false });
    globalState.setLog({ loggedIn: false });
    localStorage.setItem("loggedIn", false);
    console.log(localStorage.getItem("loggedIn"));
  };

  const loggedInFunction = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          {localStorage.getItem("username")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Button
              onClick={() => {
                logOutToggle();
              }}
            >
              Log Out
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const list = anchor => {
    return (
      <body>
        <Snackbar
          open={openSnack}
          autoHideDuration={2000}
          onClose={handleSnackClose}
        >
          <Alert onClose={handleSnackClose} severity="error">
            username or password does not exist
          </Alert>
        </Snackbar>
        <div id="login" className={clsx(classes.list)} role="presentation">
          <h5>Log In to BTOAnywhere</h5>

          <form
            id="loginForm"
            className={classes.root}
            noValidate
            autoComplete="on"
          >
            <div className="formsDiv">
              <TextField
                required
                id="email-input"
                label="Email"
                value={userValue}
                onChange={handleUserChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                value={passValue}
                onChange={handlePassChange}
              />
            </div>
          </form>
          <Button
            id="loginButton"
            variant="contained"
            color="primary"
            onClick={loginToggle("loggedIn", true)}
          >
            Log In
          </Button>

          <p>
            <a href="/">Forgot username or password?</a>
          </p>
        </div>
      </body>
    );
  };

  const fill = anchor => {
    return (
      <body>
        <Snackbar
          open={openSnackReg}
          autoHideDuration={2000}
          onClose={handleSnackCloseReg}
        >
          <Alert onClose={handleSnackCloseReg} severity={snackSuccess}>
            {registerError}
          </Alert>
        </Snackbar>
        <div id="register" className={clsx(classes.list)} role="presentation">
          <h5>Create an Account</h5>

          <form
            id="registerForm"
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <div className="formsDiv">
              <TextField
                required
                id="user-input"
                label="Name"
                value={userValueReg}
                onChange={handleUserValueReg}
              />

              <TextField
                required
                id="email-input"
                label="Email"
                value={emailValueReg}
                onChange={handleEmailValueReg}
              />
              <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                value={passValueReg}
                onChange={handlePassValueReg}
              />
              <TextField
                required
                id="confirm-password-input"
                label="Confirm Password"
                type="password"
                value={pass2ValueReg}
                onChange={handlePass2ValueReg}
              />
            </div>
          </form>
          <Button
            id="registerButton"
            variant="contained"
            color="primary"
            onClick={() => {
              registerToggle();
            }}
          >
            Register
          </Button>
        </div>
      </body>
    );
  };

  if (localStorage.getItem("loggedIn") == "true" || globalState.log.loggedIn) {
    return <div>{loggedInFunction()}</div>;
  } else {
    return (
      <div>
        <React.Fragment key="right">
          <Button id="logButton" onClick={toggleDrawer("right", true)}>
            Login
          </Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Log In" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {list("right")}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {fill("right")}
            </TabPanel>
          </Drawer>
        </React.Fragment>
      </div>
    );
  }
};
