import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

const GrantInfo = () => {
    return (
        <Accordion>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is EHG?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm scccccccccccccccccccccthe body</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    );
  
}



export default GrantInfo;

{/* <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}