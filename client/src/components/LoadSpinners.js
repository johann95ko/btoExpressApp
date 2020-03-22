import Spinner from "react-bootstrap/Spinner";
import React from "react";

export const LoadSpinners = () => {
  return (
    <div style={{ marginTop: "400px", marginLeft: "46%" }}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
    </div>
  );
};
