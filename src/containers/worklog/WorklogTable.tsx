import React from 'react';
import { Typography, Box, Paper } from '@material-ui/core'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Trans }  from 'react-i18next';
import { worklogTables } from './worklogTables';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 700,
    margin: '0 auto'
  },
  typography: {
    margin: 30,
  },
});

function WorklogTable() {
  const classes = useStyles();

  return (
    <Box>
      <Box my={5}>
        <Typography align='center' variant='h4' >
          <Trans>
            in:Worklog
          </Trans>
        </Typography>
      </Box>
      {worklogTables.map(table => (
        <Box key={table.id}>
          <Typography align='center' className={classes.typography} variant='h5' ><Trans>te:{table.id.toString()}.name</Trans></Typography>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>
                      in:Time spent
                    </Trans>
                  </TableCell>
                  <TableCell align='right'>
                    <Trans>
                      in:Performed work
                    </Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table.performedWork.map(row => (
                  <TableRow key={row.performedWork}>
                    <TableCell>{row.timeSpent}</TableCell>
                    <TableCell align='right'><Trans>te:{table.id.toString()}.performedWork.{row.performedWork}</Trans></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}

export default WorklogTable