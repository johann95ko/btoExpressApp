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

export const BTOTableFixed = props => {
  // const classes = useStyles();

  return (
    <TableContainer style={{ width: 100 }} component={Paper}>
      <Table style={{ width: 100 }}>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            Name
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            Location
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            2-Room
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            3-Room
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            4-Room
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            5-Room
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center" component="th" scope="row">
            3Gen
          </TableCell>
        </TableBody>
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
