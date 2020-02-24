import React from 'react';
import './Worklog.sass';

import { makeStyles } from '@material-ui/core/styles';
import { TableHead, TableContainer, TableRow, Paper, TableCell, TableBody, Table,  } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(date:string, timeSpent:string, performedWork:string) {
  return { date, timeSpent, performedWork};
}

const rows = [
  createData('19.02.20', '2h', 'Author\'s page timeline implemented'),
  createData('20.02.20', '3h', 'Other functionality'),
  createData('21.02.20', '4h', 'Other functionality'),
  createData('22.02.20', '2h', 'Other functionality'),
  createData('23.02.20', '5h', 'Other functionality'),
];

export default function Worklog() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Time spent</TableCell>
            <TableCell align="right">Performed work</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.timeSpent}</TableCell>
              <TableCell align="right">{row.performedWork}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
