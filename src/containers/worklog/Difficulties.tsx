import React from 'react';
import {Box, Typography, Grid, List, ListItem, ListItemIcon} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Trans }  from 'react-i18next';

function Difficulties() {

  return (
    <Box>
      <Box my={5}>
        <Typography align='center' variant='h4'>
          <Trans>
            in:Main difficulties header
          </Trans>
        </Typography>
      </Box>
      <Grid>
        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography><Trans>in:Distribution of duties</Trans></Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography><Trans>in:Searching time for team discussions</Trans></Typography>
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}

export default Difficulties