import React from 'react';
import { Trans } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Typography, Box, Paper } from '@material-ui/core';
import { worklogTables } from './worklogTables';
import { makeStyles } from '@material-ui/core/styles';

interface Member {
  memberId: number;
}

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 700,
    margin: '0 auto',
  },
  typography: {
    margin: 30,
  },
});

function TableComponent({ memberId }: Member) {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.typography} align="center" variant="h5">
        <Trans>te:{memberId}.name</Trans>
      </Typography>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Trans>in:Time spent</Trans>
              </TableCell>
              <TableCell align="right">
                <Trans>in:Performed work</Trans>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {worklogTables[memberId].performedWork.map(row => (
              <TableRow key={row.performedWork}>
                <TableCell>{row.timeSpent}</TableCell>
                <TableCell align="right">
                  <Trans>
                    te:{memberId}.performedWork.{row.performedWork}
                  </Trans>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableComponent;
