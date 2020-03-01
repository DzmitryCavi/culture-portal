import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#484745',
      color: theme.palette.common.white,
      fontSize: 18,
    },
    body: {
      fontSize: 17,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    margin: '0 auto',
  },
});

interface PROPS {
  director: string;
}

export default function WorksTable(props: any) {

  const { director } = props;
  const classes = useStyles();
  const dataDirector: any = Directors;
  const worksList = dataDirector[director].work;
  console.log(worksList);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Trans>in:Year of creation</Trans>
            </StyledTableCell>
            <StyledTableCell align="right">
              <Trans>in:Works</Trans>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {worksList.map((work: any, index: number) => (
            <StyledTableRow key={`${director}work${index}`}>
              <StyledTableCell component="th" scope="row">
                <Trans>
                  tr:{director}.work.{`${index}`}.date
                </Trans>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Trans>
                  tr:{director}.work.{`${index}`}.text
                </Trans>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
