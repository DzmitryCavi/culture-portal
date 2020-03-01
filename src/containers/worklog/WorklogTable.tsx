import React from 'react';
import { Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Trans }  from 'react-i18next';
<<<<<<< HEAD
=======
import { worklogTables } from './worklogTables';
import { ButtonGroup, Button } from '@material-ui/core';
import TableComponent from './Table'
>>>>>>> upstream/dev

const useStyles = makeStyles({
  buttons: {
    maxWidth: 500,
  }
});

class WorklogTable extends React.Component {
  state = {
    TableCallState: false,
    id: 0
  }

  handleClick = (event:any) => {
    this.setState({
      TableCallState: true,
      id: event.currentTarget.value
    })
  }

<<<<<<< HEAD
  return (
    <Box>
      <Box my={5}>
        <Typography align='center' variant='h4' >
          <Trans>
            in:Worklog
          </Trans>
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Trans>
                  in:Date
                </Trans>
              </TableCell>
              <TableCell align='center'>
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
=======
  render() {
    return (
      <Box>
        <Box my={5}>
          <Typography align='center' variant='h4' >
            <Trans>
              in:Worklog
            </Trans>
          </Typography>
        </Box>
        <Box>
          <Box className='button_group_parent'>
            <ButtonGroup className='button_group' variant='contained' color="primary" aria-label='contained primary button group'>
              {worklogTables.map(table => (
                <Button key={table.id.toString()} onClick={this.handleClick} value={table.id}><Trans>te:{table.id.toString()}.name</Trans></Button>
              ))}
            </ButtonGroup>
          </Box>
          {this.state.TableCallState ? <TableComponent memberId={this.state.id}/> : null}
        </Box>
      </Box>
    )
  }
>>>>>>> upstream/dev
}

export default WorklogTable
