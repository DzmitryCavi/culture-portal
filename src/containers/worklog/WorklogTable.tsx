import React from 'react';
import { Typography, Box, Paper } from '@material-ui/core'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createRows(date:string, timeSpent:string, performedWork:string) {
  return { date, timeSpent, performedWork};
}

const rows = [
  createRows('19.02.20', '2h', 'Author\'s page timeline implemented'),
  createRows('20.02.20', '3h', 'Other functionality'),
  createRows('21.02.20', '4h', 'Other functionality'),
  createRows('22.02.20', '2h', 'Other functionality'),
  createRows('23.02.20', '5h', 'Other functionality'),
];

function WorklogTable() {
  const classes = useStyles();

  return (
    <Box>
      <Box my={5}>
        <Typography align='center' variant='h4' >
          Worklog
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='center'>Time spent</TableCell>
              <TableCell align='right'>Performed work</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date}>
                <TableCell component='th' scope='row'>
                  {row.date}
                </TableCell>
                <TableCell align='center'>{row.timeSpent}</TableCell>
                <TableCell align='right'>{row.performedWork}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default WorklogTable