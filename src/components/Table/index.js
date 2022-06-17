import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{backgroundColor:"#1a191f",opacity:'90%',margin:"0px 15px"}}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow
            sx={{
              borderTop: "1px solid white",
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              
            }}
          >
            <TableCell align="center" sx={{color:"white", border: '1px solid white'}}>Dessert (100g serving)</TableCell>
            <TableCell align="center" sx={{color:"white", border: '1px solid white'}}>Calories</TableCell>
            <TableCell align="center" sx={{color:"white"}}>Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            borderBottom: "1px solid white",
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
          }}
        >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" align="center" scope="row" sx={{color:"white"}}>
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{color:"white", border: '1px solid white'}}>{row.calories}</TableCell>
              <TableCell align="center" sx={{color:"white", border: '1px solid white'}}>{row.fat}</TableCell>   
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
