import React from 'react';
import './Home.sass';
import { Button, Box, Typography, CardMedia } from '@material-ui/core';


function Home() {
  return (
    <Box className='home'>
      <Typography className='home-name' variant="h2">
        Culture Portal
      </Typography>
      <Typography className='home-article'>
        A theatre director or stage director is an instructor in the theatre fiel who oversees and orchestrates the mounting of a theatre production (a play, opera, musical, or devised piece of work) by unifying various endeavours and aspects of production. The director's function is to ensure the quality and completeness of theatre production and to lead the members of the creative team into realizing their artistic vision for it. The director thereby collaborates with a team of creative individuals and other staff, coordinating research, stagecraft, costume design, props, lighting design, acting, set design, stage combat, and sound design for the production. If the production is a new piece of writing or a (new) translation of a play, the director may also work with the playwright or a translator.
      </Typography>
      <Box className='director'>
        <Box className='container-photo'>
          <CardMedia
            component="img"
            className='director-photo'
            image="https://minsknews.by/wp-content/uploads/2020/02/Boris-Luczenko-e1580914632504.jpg"
            title="director"
            />
        </Box>
        <Box className='director-characteristic'>
          <Box className='director-name'>
            <Typography  variant="h3">
              Barys Lucenka
            </Typography>
          </Box>
          <Box className='director-years'>
            <Typography  variant="h5">
              16.09.1937 - 05.02.2020
            </Typography>
          </Box>
          <Box className='director-description'>
            <Typography  variant="h6">
              Belarusian theater director, People’s Artist of Belarus 1995
            </Typography>
          </Box>
          <Button variant="contained" color="secondary">Learn more</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
