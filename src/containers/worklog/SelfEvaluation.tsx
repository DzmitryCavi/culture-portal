import React from 'react';
import { Box, Typography, Grid, Checkbox } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  evaluation_point: {
    color: 'green',
  },
  checkbox: {},
});

let mark = 0;

function createCheckboxes(
  isDone: boolean,
  functionality: string,
  value: number,
) {
  if (isDone === true) {
    mark += value;
  }
  return { isDone, functionality, value };
}

const minScope = [
  createCheckboxes(true, 'Min scope 1', 10),
  createCheckboxes(true, 'Min scope 2', 10),
  createCheckboxes(true, 'Min scope 3', 10),
  createCheckboxes(true, 'Min scope 4', 20),
];

const normalScope = [
  createCheckboxes(true, 'Normal scope 1', 20),
  createCheckboxes(true, 'Normal scope 2', 10),
  createCheckboxes(true, 'Normal scope 3', 10),
  createCheckboxes(true, 'Normal scope 4', 10),
  createCheckboxes(true, 'Normal scope 5', 10),
  createCheckboxes(true, 'Normal scope 6', 20),
  createCheckboxes(true, 'Normal scope 7', 10),
  createCheckboxes(true, 'Normal scope 8', 20),
  createCheckboxes(true, 'Normal scope 9', 20),
  createCheckboxes(true, 'Normal scope 10', 10),
];

const extraScope = [
  createCheckboxes(true, 'Extra scope 1', 10),
  createCheckboxes(false, 'Extra scope 2', 10),
  createCheckboxes(false, 'Extra scope 3', 10),
  createCheckboxes(false, 'Extra scope 4', 20),
  createCheckboxes(false, 'Extra scope 5', 20),
  createCheckboxes(true, 'Extra scope 6', 20),
];

const fines = [
  createCheckboxes(false, 'Fines 1', -50),
  createCheckboxes(false, 'Fines 2', -50),
  createCheckboxes(false, 'Fines 3', -40),
  createCheckboxes(false, 'Fines 4', -20),
];

function SelfEvaluation() {
  const classes = useStyles();

  return (
    <Box>
      <Box my={5} key="Self-evaluation">
        <Typography align="center" variant="h4">
          <Trans>in:Self-evaluation</Trans>
        </Typography>
      </Box>
      <Box m={3} key="Min scope">
        <Typography>
          <Trans>in:Min scope</Trans>
        </Typography>
      </Box>
      {minScope.map(point => (
        <Grid
          container
          alignItems="center"
          key={point.functionality}
          className="evaluation_point"
        >
          <Checkbox
            checked={point.isDone}
            color="primary"
            className={classes.checkbox}
          />
          <Typography>
            <Trans>in:{point.functionality}</Trans>
          </Typography>
        </Grid>
      ))}
      <Box m={3} key="Normal scope">
        <Typography>
          <Trans>in:Normal scope</Trans>
        </Typography>
      </Box>
      {normalScope.map(point => (
        <Grid
          container
          alignItems="center"
          key={point.functionality}
          className="evaluation_point"
        >
          <Checkbox checked={point.isDone} color="primary" />
          <Typography>
            <Trans>in:{point.functionality}</Trans>
          </Typography>
        </Grid>
      ))}
      <Box m={3} key="Extra scope">
        <Typography>
          <Trans>in:Extra scope</Trans>
        </Typography>
      </Box>
      {extraScope.map(point => (
        <Grid
          container
          alignItems="center"
          key={point.functionality}
          className="evaluation_point"
        >
          <Checkbox checked={point.isDone} color="primary" />
          <Typography>
            <Trans>in:{point.functionality}</Trans>
          </Typography>
        </Grid>
      ))}
      <Box m={3} key="Fines">
        <Typography>
          <Trans>in:Fines</Trans>
        </Typography>
      </Box>
      {fines.map(point => (
        <Grid
          container
          alignItems="center"
          key={point.functionality}
          className="evaluation_point"
        >
          <Checkbox checked={point.isDone} color="primary" />
          <Typography>
            <Trans>in:{point.functionality}</Trans>
          </Typography>
        </Grid>
      ))}
      <Box my={5} key="Calculated mark">
        <Typography>
          <Trans>in:Calculated mark</Trans>
          &nbsp;{mark}.
        </Typography>
      </Box>
    </Box>
  );
}

export default SelfEvaluation;
