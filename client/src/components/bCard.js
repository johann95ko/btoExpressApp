import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap'

const btoCard = props =>{
return(

  <Card>
    <Card.Img variant="top" src={props.Image} id="cardimage"/>
    <Card.Body>
      <Card.Title className="bto-name" id="cardtitle">{props.btoName}</Card.Title>
      <Card.Text className="bto-text">
        {props.shortDesc}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

)
}

export default btoCard;