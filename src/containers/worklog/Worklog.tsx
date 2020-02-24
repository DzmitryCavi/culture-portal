import React from 'react';
import './work.sass';
import { makeStyles } from '@material-ui/core/styles';
import { TableHead, TableContainer, TableRow,  TableCell, TableBody, Table } from '@material-ui/core';
import {Typography, Paper, Box } from '@material-ui/core';
import {Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
    <Box>
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
      <Box>
        <Typography align='center' variant='h4'>
          Main difficulties for the team during implementation:
        </Typography>
        <Grid>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary='Distribution of duties'/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary='Searching time for team discussions'/>
            </ListItem>
          </List>
        </Grid>
      </Box>
      <Box>
      <Typography align='center' variant='h4'>
          Self-evaluation
        </Typography>
        <List>
          <Typography>
            Min scope - 50
          </Typography>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
