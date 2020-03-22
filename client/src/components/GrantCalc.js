import React from "react";
import { Button, Form } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormG = () => {
  const [FTAstate, FTAsetState] = React.useState({
    firstTimeApplicant: true
  });
  const [SFTAstate, SFTAsetState] = React.useState({
    spouseFirstTimeApplicant: true
  });
  const [incomestate, incomesetState] = React.useState({
    incomeLevel: 1500
  });
  const [employmentstate, employmentsetState] = React.useState({
    employmentStatus: true
  });
  const [grantstate, grantsetState] = React.useState({
    grant: 0
  });

  const [open, setOpen] = React.useState(false);

  const handleFTA = () => event => {
    FTAsetState({ ...FTAstate, firstTimeApplicant: event.target.value });
  };

  const handleSFTA = () => event => {
    SFTAsetState({
      ...SFTAstate,
      spouseFirstTimeApplicant: event.target.value
    });
  };

  const handleIncome = () => event => {
    incomesetState({
      ...incomestate,
      incomeLevel: parseInt(event.target.value)
    });
  };

  const handleEmployed = () => event => {
    employmentsetState({
      ...employmentstate,
      employmentStatus: event.target.value
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/grants/bto", {
        firstTimeApplicant: FTAstate.firstTimeApplicant,
        spouseFirstTimeApplicant: SFTAstate.spouseFirstTimeApplicant,
        incomeLevel: incomestate.incomeLevel,
        employmentStatus: employmentstate.employmentStatus
      })
      .then(response => {
        grantsetState({ ...grantstate, grant: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit()}>
        <Form.Group controlId="formFTA">
          <Form.Label>Are you a first time applicant?</Form.Label>
          <Form.Control as="select" onChange={handleFTA()}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSpouseFTA">
          <Form.Label>Is your spouse a first time applicant?</Form.Label>
          <Form.Control as="select" onChange={handleSFTA()}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formIncome">
          <Form.Label>
            Combined Monthly Income for the past 12 months:
          </Form.Label>
          <Form.Control as="select" onChange={handleIncome()}>
            <option value="1500">$1,500 or below</option>
            <option value="2000">$1,501 to $2,000</option>
            <option value="2500">$2,001 to $2,500</option>
            <option value="3000">$2,501 to $3,000</option>
            <option value="3500">$3,001 to $3,500</option>
            <option value="4000">$3,501 to $4,000</option>
            <option value="4500">$4,001 to $4,500</option>
            <option value="5000">$4,501 to $5,000</option>
            <option value="5500">$5,001 to $5,500</option>
            <option value="6000">$5,501 to $6,000</option>
            <option value="6500">$6,001 to $6,500</option>
            <option value="7000">$6,501 to $7,000</option>
            <option value="7500">$7,001 to $7,500</option>
            <option value="8000">$7,501 to $8,000</option>
            <option value="8500">$8,001 to $8,500</option>
            <option value="9000">$8,501 to $9,000</option>
            <option value="9001">$9,001 and above</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formEmployment">
          <Form.Label>Employment status</Form.Label>
          <Form.Control as="select" onChange={handleEmployed()}>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
          </Form.Control>
        </Form.Group>
        <div id="formButton">
          <Button variant="danger" type="submit" onClick={handleClickOpen}>
            Check my grant
          </Button>
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Your Available Grant Amount"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You can apply for ${grantstate.grant}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="danger">
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Form>
    </div>
  );
};

export default FormG;
