import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: 10
  }
});

export const BTOTableColumn = props => {
  const classes = useStyles();

  return (
    <TableContainer style={{ width: "18.75vw" }} component={Paper}>
      <Table style={{ width: "18.75vw" }}>
        <TableBody>
          <TableCell style={{backgroundColor:"#D9E3F0"}} align="center" component="th" scope="row">
            {props.name}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            {props.location}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            {props.type}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            {props.shortestDesc}
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
