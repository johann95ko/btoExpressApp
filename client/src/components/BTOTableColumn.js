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
    <TableContainer style={{ width: 300 }} component={Paper}>
      <Table style={{ width: 300 }}>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            {props.name}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            {props.location}
          </TableCell>
        </TableBody>
        {props.flatTypeAndCost.map(eachFlatTypeAndCost => {
          for (const [key, value] of Object.entries(eachFlatTypeAndCost)) {
            return (
              <TableBody>
                <TableCell align="center" component="th" scope="row">
                  {value}
                </TableCell>
              </TableBody>
            );
          }
        })}
      </Table>
    </TableContainer>
  );
};

// <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
