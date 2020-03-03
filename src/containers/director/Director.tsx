import React from 'react';
import './Director.sass';
import { Box, Grid, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json';
import YandexMap from './YandexMap';
import TimeLine from './TimeLine';
import WorksTable from './WorksTable';
import SliderFoto from './SliderFoto';

import { useParams } from 'react-router-dom';

function Director() {
  const { directorName } = useParams();
  const getKeyValue = (key: any) => (obj: Record<string, any>) => obj[key];
  return (
    <Grid container>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img
            className="director-image"
            src={getKeyValue(directorName)(Directors).img[0]}
            alt={''}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" align="center">
            <Trans>tr:{directorName}.name</Trans>
          </Typography>
          <Typography variant="h6" align="center">
            <Trans>tr:{directorName}.date</Trans>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Trans>tr:{directorName}.description</Trans>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className="grid_item">
        <Box>
          <Typography variant="h4" align="center" className="biography">
            <Trans>in:Biography</Trans>
          </Typography>
          <TimeLine director={directorName} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <SliderFoto director={directorName} />
        </Box>
      </Grid>
      <Grid item xs={12} className="grid_item">
        <Box>
          <WorksTable director={directorName} />
        </Box>
      </Grid>
      <Grid item xs={12} className="grid_item">
        <Typography variant="h4" align="center" >
          <Trans>in:Map</Trans>
        </Typography>
        <YandexMap director={directorName} />
      </Grid>
    </Grid>
  );
}

export default Director;
