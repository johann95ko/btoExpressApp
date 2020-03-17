import React from "react";
import Container from "@material-ui/core/Container";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import Carousel from "../components/frontCarousel";
import Card from "../components/bCard";
import { CardDeck } from "react-bootstrap";

export const HomePage = () => {
  const { data, loading } = useFetch("/api/bto");
  // console.log(data);

  if (loading) return null;
  return (
    <body>
      <div className="main" id="section1">
        <Carousel />
      </div>
      <div class="main" id="section2">
        <h2>Available BTOs</h2>
        <CardDeck>
          {data.map(eachHousing => (
            <Card
              key={eachHousing.id}
              btoName={eachHousing.Name}
              shortDesc={eachHousing.ShortestDesc}
            />
          ))}
        </CardDeck>
      </div>
    </body>
  );
};
