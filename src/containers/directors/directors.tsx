import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import InfoCard from '../../components/card/card';
import translationEN from '../../locales/en/translation.json';
import translationRU from '../../locales/ru/translation.json';
import translationBY from '../../locales/by/translation.json';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 10,
    },
    search: {
      width: '100%',
      'background-color': '#444',
      'border-radius': 5,
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

function Directors() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const directorsKeys = Object.keys(translationEN);
  const [filtredDirectors, setFiltredDirectors] = useState(directorsKeys);
  const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltredDirectors(
      directorsKeys.filter(name => {
        switch (i18n.language) {
          case 'en':
            return (
              getKeyValue(name)(translationEN)
                .name.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) !== -1
            );
          case 'be':
            return (
              getKeyValue(name)(translationBY)
                .name.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) !== -1
            );
          default:
            return (
              getKeyValue(name)(translationRU)
                .name.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) !== -1
            );
        }
      }),
    );
  };

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <TextField
          className={classes.search}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={changeFilter}
        />
      </Grid>
      {filtredDirectors.map(director => (
        <Grid className={classes.card} key={director} item sm={6} md={4} lg={3}>
          <InfoCard director={director} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Directors;
