import React from 'react';
import './Home.sass';
import { Button, Box, Typography, CardMedia } from '@material-ui/core';
import { Trans } from 'react-i18next';

import data from '../../locales/en/translation.json'

function Home() {
  let director = null;

  (function getDerector() {
    const indexDirector = Math.floor(Math.random() * Math.floor(7));
    director = Object.keys(data)[indexDirector];
  }())

  const getKeyValue = (key: any ) => (obj: Record<string, any>) => obj[key];

  return (
    <Box className='home'>
      <Typography className='home-name' variant="h2">
        <Trans>in:Culture Portal</Trans>
      </Typography>
      <Typography className='home-article'>
        <Trans>in:CP-description</Trans>
      </Typography>
      <Box className='director'>
        <Box className='container-photo'>
          <CardMedia
            component="img"
            className='director-photo'
            image={getKeyValue(director)(data).img[0]}
            title="director"
            />
        </Box>
        <Box className='director-characteristic'>
          <Box className='director-name'>
            <Typography  variant="h3">
              <Trans>tr:{director}.name</Trans>
            </Typography>
          </Box>
          <Box className='director-years'>
            <Typography  variant="h5">
              <Trans>tr:{director}.date</Trans>
            </Typography>
          </Box>
          <Box className='director-description'>
            <Typography  variant="h6">
              <Trans>tr:{director}.description</Trans>
            </Typography>
          </Box>
          <Button variant="contained" color="secondary"><Trans>in:Learn more</Trans></Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
