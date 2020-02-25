import React from 'react';
import {Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Difficulties() {

  return (
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
  );
}

export default Difficulties