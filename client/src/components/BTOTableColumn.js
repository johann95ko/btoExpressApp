import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import "../components/components.css";
// const useStyles = makeStyles({
//   table: {
//     width: 10
//   }
// });

export const BTOTableColumn = props => {
  // const classes = useStyles();

  return (
    <TableContainer
      style={{ height: "2000px", width: "20vw", overflow: "hidden" }}
      component={Paper}
    >
      <TableBody>
        <TableCell
          class="MuiTableCell-paddingNone"
          align="center"
          component="th"
          scope="row"
          style={{ height: "150", width: "20vw" }}
        >
          <div className="flexRowPicture">
            <img src={props.image} id="comparepicture"></img>
          </div>
        </TableCell>
      </TableBody>

      <Table style={{ width: "20vw" }}>
        <TableBody>
          <TableCell
            style={{ backgroundColor: "lightgrey", height: "5.5em" }}
            align="center"
            component="th"
            scope="row"
          >
            <h3 className="bto-name" id="cardtitle">
              {props.name}
            </h3>
          </TableCell>
        </TableBody>

        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Location</b>
              </p>{" "}
              {props.location}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Type of Estate</b>
              </p>{" "}
              {props.type}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Launch Date</b>
              </p>{" "}
              {props.launchDate}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "16em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Description</b>
              </p>{" "}
              {props.shortestDesc}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "12em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Rooms Available</b>
              </p>{" "}
              {props.rooms.join(", ")}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Nearest MRT</b>
              </p>{" "}
              {props.nearestMrt}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Nearest Mall</b>
              </p>{" "}
              {props.nearestMall}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Nearest Market</b>
              </p>{" "}
              {props.nearestMarket}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Area PSI readings</b>
              </p>{" "}
              {props.psiIndex}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Area PM2.5 readings</b>
              </p>{" "}
              {props.pm25Index}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "8.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>
                <b>Area Temperature readings</b>
              </p>{" "}
              {props.tempIndex}
            </div>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
