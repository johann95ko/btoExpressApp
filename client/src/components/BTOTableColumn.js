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
    <TableContainer style={{ width: "25vw"}} component={Paper}>
      <Table style={{ width: "25vw" }}>
        <TableBody>
          <TableCell style={{backgroundColor:"#C5CAE9", height:"5.5em"}} align="center" component="th" scope="row" >
            {props.name}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row" style={{ height:"8.5em"}}>
            {props.location}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row" style={{ height:"5.5em"}}>
            {props.type}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row" style={{ height:"25em"}}>
            {props.shortestDesc}
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
