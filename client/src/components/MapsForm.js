import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";

export const MapsForm = props => {
  return (
    <div id="searchBar">
      <Form onSubmit={props.handleSubmit}>
        <Form.Row controlId="formLocation">
          <Form.Label column sm="3" style={{marginRight: "-10px"}}>
            Enter a Location:
          </Form.Label>
          <Col sm="6">
            <Form.Control 
            type="text" 
            value={props.formValue}
            onChange={props.handleChange}
            placeholder="Orchard Road" />
          </Col>
          <Button column sm="2" className="mapFormButton" style={{backgroundColor:"firebrick", border:"none"}}
            type="submit" value="submit">
            Search
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default MapsForm;
