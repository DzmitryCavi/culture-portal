import React from 'react';
import {Box, Typography, Grid, Checkbox, } from '@material-ui/core'

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


function SelfEvaluation() {

  return (
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
      <Box my={5}>
        <Typography>
          Calculated mark: {mark}.
        </Typography>
      </Box>
    </Box>
  );
}

export default SelfEvaluation