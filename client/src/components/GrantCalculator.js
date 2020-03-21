import React from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

class GrantCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTimeApplicant: true,
      spouseFirstTimeApplicant: true,
      incomeLevel: 1500,
      employmentStatus: true,
      grant: 0
    };

    this.handleFTA = this.handleFTA.bind(this);
    this.handleSpouseFTA = this.handleSpouseFTA.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
    this.handleEmployed = this.handleEmployed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFTA(event) {
    if (event.target.value === "true") {
      this.setState({ firstTimeApplicant: true });
    } else {
      this.setState({ firstTimeApplicant: false });
    }
  }

  handleSpouseFTA(event) {
    if (event.target.value === "true") {
      this.setState({ spouseFirstTimeApplicant: true });
    } else {
      this.setState({ spouseFirstTimeApplicant: false });
    }
  }

  handleIncome(event) {
    this.setState({ incomeLevel: parseInt(event.target.value) });
  }

  handleEmployed(event) {
    if (event.target.value === "employed") {
      this.setState({ employmentStatus: true });
    } else {
      this.setState({ employmentStatus: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    
    axios
      .post("http://localhost:5000/api/grants/bto", {
        incomeLevel: this.state.incomeLevel,
        firstTimeApplicant: this.state.firstTimeApplicant,
        spouseFirstTimeApplicant: this.state.spouseFirstTimeApplicant,
        employmentStatus: this.state.employmentStatus
      })
      .then(response => {
        // console.log(response);
        this.setState({ grant: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formFTA">
            <Form.Label>Are you a first time applicant?</Form.Label>
            <Form.Control as="select" onChange={this.handleFTA}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formSpouseFTA">
            <Form.Label>Is your spouse a first time applicant?</Form.Label>
            <Form.Control as="select" onChange={this.handleSpouseFTA}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formIncome">
            <Form.Label>
              Combined Monthly Income for the past 12 months:
            </Form.Label>
            <Form.Control as="select" onChange={this.handleIncome}>
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
            <Form.Control as="select" onChange={this.handleEmployed}>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </Form.Control>
          </Form.Group>

          <Button variant="danger" type="submit">
            Check my grant
          </Button>
        </Form>

        <h6 className="flexDiv">Grant: ${this.state.grant}</h6>
      </div>
    );
  }
}

export default GrantCalculator;
