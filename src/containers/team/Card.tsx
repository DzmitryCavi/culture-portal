import React from 'react';
import './Team.sass';

import { Grid, Paper, Typography, Avatar, Box, Link } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Trans } from 'react-i18next';

interface User {
  id: number;
  name: string;
  photoUrl: string;
  linkGit: string;
  linkLinkedIn: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      borderBottom: '1px solid #eaeded ',
      maxWidth: 340,
      minHeight: 300,
      borderTop: 'solid 5px black',
      backgroundColor: '#444',
      color: 'white',
    },
    image: {
      marginTop: 20,
      width: 128,
      height: 128,
    },
    text: {
      borderBottom: '1px solid #eaeded ',
    },
    link: {
      width: 30,
      height: 30,
      marginTop: 6,
    },
  }),
);

function Card({ id, photoUrl, linkGit, linkLinkedIn }: User) {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Typography className={classes.text} variant="h6">
          <Trans>in:Author</Trans>
        </Typography>
        <Grid container item alignItems="center">
          <Grid item>
            <Box className={classes.image}>
              <Avatar className="avatar" alt="Foto" src={photoUrl} />
            </Box>
          </Grid>
          <Grid item xs container>
            <Typography className={classes.text} variant="h6">
              <Trans>te:{id.toString()}.name</Trans>
            </Typography>
            <Grid item xs={12} container justify="flex-start">
              <Grid item className={classes.link}>
                <Link href={linkGit} target="_blank">
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item className={classes.link}>
                <Link href={linkLinkedIn} target="_blank">
                  <LinkedInIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="subtitle1">
            <Trans>te:{id.toString()}.description</Trans>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Card;
