import React, { useEffect } from "react";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import Carousel from "../components/frontCarousel";
import Card from "../components/bCard";
import { CardDeck } from "react-bootstrap";
import { LoadSpinners } from "../components/LoadSpinners";
import { Footer } from "../components/Footer";

import useGlobalState from "../customHooks/useGlobalState";

export const HomePage = () => {
  const { data, loading } = useFetch("/api/bto");
  const globalState = useGlobalState();

  if (loading) {
    // console.log("loading");
    return (
      <div style={{ height: "100vh" }}>
        <LoadSpinners />
      </div>
    );
  }

  return (
    <body>
      <div className="main" id="section1">
        <div style={{ height: "112vh" }}>
          <Carousel />
        </div>
      </div>
    </body>
  );
};
