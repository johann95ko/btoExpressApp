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

export const MapsTable = props => {
  const classes = useStyles();

  return (
    <TableContainer style={{ width: "70vw" }} component={Paper}>
      <Table
        className={classes.table}
        style={{ width: "70vw" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>BTO Location</TableCell>
            <TableCell>Travel Distance</TableCell>
            <TableCell>Travel Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <TableRow key={row.destinationName}>
              <TableCell component="th" scope="row">
                {row.destinationName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.distance}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.duration}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          
    </TableContainer>
    
    
  );
};
