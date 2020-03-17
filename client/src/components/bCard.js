import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from 'react-bootstrap'

const btoCard = props =>{
return(

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{props.btoName}</Card.Title>
      <Card.Text>
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