import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TextField,
    Grid
 } from '@material-ui/core'
import InfoCard from '../../components/card/card';
import DirectorsData from '../../locales/en/translation.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width: '100%',
      margin: 10
    },
  }),
);

function Directors() {
  const classes = useStyles();
  const directorsKeys = Object.keys(DirectorsData);

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField className = {classes.search} id="outlined-basic" label="Search" variant="outlined"/>
        </Grid>
        {directorsKeys.map(director => (
           <Grid key = {director} item sm={6}  md={4} lg={3}>
              <InfoCard director = {director}/>
            </Grid>
        ))}
    </Grid>
  );
}

export default Directors;
