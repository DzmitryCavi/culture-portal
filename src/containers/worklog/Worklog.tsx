import React from 'react';
import './Worklog.sass';
import { makeStyles } from '@material-ui/core/styles';
import { TableHead, TableContainer, TableRow,  TableCell, TableBody, Table } from '@material-ui/core';
import {Typography, Paper, Box } from '@material-ui/core';
import {Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Checkbox } from '@material-ui/core';

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

let mark:number = 0;

function createCheckboxes(isDone:boolean, functionality:string, value:number) {
  if (isDone === true){
    mark += value;
  }
  return { isDone, functionality, value};
}

const minScope = [
  createCheckboxes(true, '10 Main page + page with a list of authors + author\'s page (only pages with content without widgets)', 10),
  createCheckboxes(true, '10 Page with team members + page with worklog', 10),
  createCheckboxes(true, '10 Page with list of authors contains search widget', 10),
  createCheckboxes(true, '20 Portal has two languages', 20),
]

const normalScope = [
  createCheckboxes(true, '20 Portal has page with styleguide', 20),
  createCheckboxes(true, '10 Mobile version is okey', 10),
  createCheckboxes(true, '10 Ipad/tablet version is okey', 10),
  createCheckboxes(true, '10 Author\'s page contains timeline', 10),
  createCheckboxes(true, '10 Author\'s page contains video overlay', 10),
  createCheckboxes(true, '20 Author\'s page contains photo gallery', 20),
  createCheckboxes(true, '10 Author\'s page contains map (geowidget)', 10),
  createCheckboxes(true, 'from 0 to 20 Design (typography, icons, colors, links + buttons + input are styled)', 20),
  createCheckboxes(true, '20 Material-ui / bootstrap is used', 20),
  createCheckboxes(true, '10 Portal has third language', 10),
]

const extraScope = [
  createCheckboxes(true, '10 Confidence of the project presentation', 10),
  createCheckboxes(true, '10 Project is made using gatsbyjs', 10),
  createCheckboxes(true, '10 Contentful / netlify cms is used for content management', 10),
  createCheckboxes(true, '20 Animations / special effects like paralax', 20),
  createCheckboxes(true, 'up to 20 Outstanding design', 20),
  createCheckboxes(true, '20 Storybook/styleguidist/other react styleguide tool usage for the page with styles', 20),
]

const fines = [
  createCheckboxes(false, '-50 if there are less than 5 commits from each active team member. Everyone should merge their own PRs.', -50),
  createCheckboxes(false, 'up to -50 points for violations stage2-tasks-requirements', -50),
  createCheckboxes(false, '-40 if there is no worklog for team', -40),
  createCheckboxes(false, '-20 too primitive (ugly for 2020) design / UX', -20),
]

export default function Worklog() {
  const classes = useStyles();

  return (
    <Box mx={3}>
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
      <Box>
        <Box my={5}>
          <Typography align='center' variant='h4'>
            Main difficulties for the team during implementation:
          </Typography>
        </Box>
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
        <Box my={5}>
          <Typography align='center' variant='h4'>
            Self-evaluation
          </Typography>
        </Box>
        <Box m={3}>
          <Typography>
            Min scope - 50
          </Typography>
        </Box>
        {minScope.map(point => (
          <Grid container alignItems='center' >
            <Checkbox size='small' checked={point.isDone} color='primary'/> 
            <Typography >
              {point.functionality}
            </Typography>
          </Grid>
        ))}
        <Box m={3}>
          <Typography>
            Normal scope - 140
          </Typography>
        </Box>
        {normalScope.map(point => (
          <Grid container alignItems='center' >
            <Checkbox size='small' checked={point.isDone} color='primary'/> 
            <Typography >
              {point.functionality}
            </Typography>
          </Grid>
        ))}
        <Box m={3}>
          <Typography>
            Extra scope
          </Typography>
        </Box>
        {extraScope.map(point => (
          <Grid container alignItems='center' >
            <Checkbox size='small' checked={point.isDone} color='primary'/> 
            <Typography >
              {point.functionality}
            </Typography>
          </Grid>
        ))}
        <Box m={3}>
          <Typography>
            Fines
          </Typography>
        </Box>
        {fines.map(point => (
          <Grid container alignItems='center' >
            <Checkbox size='small' checked={point.isDone} color='primary'/> 
            <Typography >
              {point.functionality}
            </Typography>
          </Grid>
        ))}
      </Box>
      <Box my={5}>
        <Typography>
          Calculated mark: {mark}.
        </Typography>
      </Box>
    </Box>
  );
}
