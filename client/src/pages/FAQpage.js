import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button, Row, Col, Image, Container} from "react-bootstrap";
import "./pages.css";
// import FAQbutton from '../components/FAQbutton';
import { Footer } from "../components/Footer";
import faqlogo from "../Images/undraw_searching_p5ux.svg";
import FAQbutton from "../components/FAQbutton";

export const FAQpage = () => {
  
  return ( // printed on screen
    <body>
        <div class="FAQbox">
          <h1 align="center" font-family="montserrat">Ask us!</h1>
        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        How is the Grant calculated?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>The AHG and/or SHG amount is based on the average gross monthly household income for the months worked in a 12-month period prior^ to the date of your flat application. The incomes of all working persons in the household (i.e. applicants and occupiers) are included in the assessment.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      What documents do I need for the application process?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>1) HDB BTO eligibility check. <br/>
2) Ballot for your HDB flat.<br/>
3) Obtain an HDB loan — get your HLE letter or your AIP.<br/>
4) Select your BTO flat and pay the option fee.<br/>
5) Sign the lease agreement and pay the downpayment.<br/>
6) Collect your keys.<br/>
Do check out Housing Development Board's website for<a href="https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new/application-procedure"> Application Procedures!</a> 
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Where can I check my HDB resale price?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Request for Value can be submitted by the Buyer or the salesperson they have engaged.
Use the HDB e-Service to log in using your NRIC no. and SingPass before they can proceed with the submission.
The buyers can check the status of the Request for Value via HDB Resale Portal.</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
       What is the difference betweem matured and non-matured estates?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Typically, an estate that has been around for more than 20 years would be considered as a matured one and those that have been built in recent years would be considered as a non-mature estate. Generally, most people would prefer mature estates over non-mature ones due to the amenities available in an estate.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

<img src={faqlogo}></img>
        </div>

      
    </body>
  );
};