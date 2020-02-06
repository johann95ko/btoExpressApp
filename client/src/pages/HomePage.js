import React from "react";
import { BTOCard } from "../components/BTOCard";
import Container from "@material-ui/core/Container";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";

export const HomePage = () => {
  const { data, loading } = useFetch("/api/btoDescription");
  // console.log(data);

  if (loading) return null;
  return (
    <div className="flexBoxDiv">
      {data.map(eachHousing => (
        <BTOCard
          key={eachHousing.id}
          btoName={eachHousing.btoName}
          shortDesc={eachHousing.shortDesc}
        />
      ))}
    </div>
  );
};
