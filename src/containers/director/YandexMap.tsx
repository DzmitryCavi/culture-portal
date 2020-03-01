import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const useStyles = makeStyles({
  map: {
    width: '600px',
    height: '400px'
  },
  map__container: {
    margin: '0 auto',
  }
});

let mapData = {
  center: [53.89, 27.55],
  zoom: 11,
};

let PlacemarkCoordinates = [53.89, 27.55];

export default function YandexMap () {
  const classes = useStyles();
  return ( 
    <Box className={classes.map__container}>
      <YMaps>
        <Map defaultState={ mapData } className={classes.map}>
          <Placemark defaultGeometry={PlacemarkCoordinates} />
        </Map>
      </YMaps>
    </Box>      
  );
}