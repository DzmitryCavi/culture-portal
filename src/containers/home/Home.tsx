import React from 'react';
import './Home.sass';
import { Box, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import InfoCard from '../../components/card/card';
import data from '../../locales/en/translation.json';

function Home() {
  let director = null;

  (function getDerector(): void {
    const date = new Date();
    const indexDirector = date.getDay();
    director = Object.keys(data)[indexDirector];
  })();

  return (
    <Box className="home">
      <Box className='home-info'>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          <Trans>in:Culture Portal</Trans>
        </Typography>
        <Typography className="home-article">
          <Trans>in:CP-description</Trans>
        </Typography>
      </Box>
      <Box className='home-director'>    
        <Typography component="h2" variant="h4" align="center" className="home-article">
          <Trans>in:Director of the day</Trans>
        </Typography>
        <InfoCard director={director}/>
      </Box>
    </Box>
  );
}

export default Home;
