import React, { Fragment } from "react";
import "./pages.css";
import { ChooseBto } from "../components/chooseBTO";
import { Footer } from "../components/Footer";
import { useFetch } from "../customHooks/useFetch";
import { LoadSpinners } from "../components/LoadSpinners";
import useGlobalState from "../customHooks/useGlobalState";
import comparelogo from "../Images/undraw_choosing_house_v37h-01.svg";
export const ComparePage = () => {
  const { data, loading } = useFetch("/api/bto");

  // if (loading) {
  //   return (
  //     <div style={{ height: "100vh" }}>
  //       <LoadSpinners />
  //     </div>
  //   );
  // }

  return (
    <Fragment>
      <body>
        <div style={{ height: "240vh" }}>
          <div
            className="main"
            style={{
              padding: "100px",
              paddingBottom: "30px",
              backgroundColor: "#fff",

              textAlign: "center",
            }}
          >
            <div class="compareheader">
              <h2 className="page-title">
                Compare BTOs
                <p className="sub-title">
                  We help you choose the right home with ease.
                </p>
              </h2>
            </div>
          </div>
          <div className="flexRow">
            <ChooseBto />
          </div>
        </div>
        {/* <div>
        <img className="landscape" src="https://cdn.clipart.email/3644262fb7ec3f9b40361e0329af3faa_houston-vector-skyline-singapore-picture-1104648-houston-vector-_2496-752.png" 
        style={{opacity:0.4, maxWidth:"100%", marginBottom:"-4%"}}></img>
      </div> */}
      </body>
    </Fragment>
  );
};
