import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import BTOfront from "../Images/BTOfront.png";
import Grants from "../Images/Grants.jpg";
import LocationCalc from "../Images/Location.jpg";
import Button from "react-bootstrap/Button";

const frontCarousel = props => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={BTOfront} alt="First slide" />

        <Carousel.Caption>
          <div>
            <Button id="BTOCaption" variant="outline-danger" href="#section2">
              {" "}
              View All BTOs
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Grants} alt="Third slide" />

        <Carousel.Caption>
          <h3 id="grantCaption">Find Out your Eligible Grant Amount</h3>
          <Button id="grantButton" variant="dark" href="/grant">
            View Grant Calculator
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={LocationCalc} alt="Third slide" />

        <Carousel.Caption>
          <h3>Check Distance to Desired Locations</h3>
          <Button id="locationButton" variant="dark" href="/location">
            View Location Calculator
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default frontCarousel;
