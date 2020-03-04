import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Directors from '../../locales/en/translation.json';

const useStyles = makeStyles({
  map: {
    maxWidth: '600px',
    height: '400px',
    margin: '0 auto',
  },
});

interface PROPS {
  director: string;
}

export default function YandexMap(props: any) {
  const { director } = props;
  const dataDirector: any = Directors;
  const classes = useStyles();
  const map = dataDirector[director].map;
  const mapData = {
    center: map,
    zoom: 11,
  };
  console.log(mapData);
  
  return (
    <YMaps>
      <Map defaultState={mapData} className={classes.map}>
        <Placemark defaultGeometry={mapData.center} />
      </Map>
    </YMaps>
  );
}
