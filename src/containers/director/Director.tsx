import React from 'react';
import './Director.sass';
import { Box, Grid, Typography } from '@material-ui/core';
// import { useTranslation } from 'react-i18next';

import {
  useParams
} from "react-router-dom";


function Director() {
  let { directorName } = useParams();
  const director = {
    fullName: "Vasiliy Terkin",
    image: "https://fordhamobserver.com/wp-content/uploads/2019/03/News_Maguire_ZoeyLiu_2-1.jpg",
    alt: "",
    shortDescription: "This is Vasiliy Terkin the author of the Fantom In the Opera",
    yearsOfLife: "1900-1999",
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" align="center">
            {directorName} {director.fullName}
          </Typography>
          <p>{director.shortDescription}</p>
          <p>Years of life: {director.yearsOfLife}</p>
        </Grid>
        <Grid item xs={4}>
          <img className="director-image" src={director.image} alt={director.alt}/>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="body1" align="center">
              VerticalTimeline
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="body1" align="center">
              ListWithDirectorsWork
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Slider with Photo Gallery
          </Typography>
        </Grid>
         <Grid item xs={12}>
           <Box>
            <Typography variant="body1" align="center">
              Youtube video
            </Typography>
           </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Director;
