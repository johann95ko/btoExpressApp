import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//   table: {
//     width: 10
//   }
// });

export const BTOTableColumn = props => {
  // const classes = useStyles();

  return (
    <TableContainer style={{ width: "25vw" }} component={Paper}>
      <Table style={{ width: "25vw" }}>
        <TableBody>
          <TableCell
            style={{ backgroundColor: "#C5CAE9", height: "5.5em" }}
            align="center"
            component="th"
            scope="row"
          >
            {props.name}
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
              <p>Location</p> {props.location}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "5.5em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Type of Estate</p> {props.type}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Launch Date</p> {props.launchDate}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Description</p> {props.shortestDesc}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Rooms Available</p> {props.rooms.join(", ")}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Nearest MRT</p> {props.nearestMrt}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Nearest Mall</p> {props.nearestMall}
            </div>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Nearest Market</p> {props.nearestMarket}
            </div>
          </TableCell>
        </TableBody>

        <TableBody>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ height: "25em" }}
          >
            <div className="flexRowCompareDiv">
              <p>Region PSI readings</p> {props.psiIndex}
            </div>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
