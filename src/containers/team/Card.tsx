import React from 'react';
import './Team.sass';

import { Grid, Paper, Typography, Avatar, Box, Link } from '@material-ui/core';
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

function Card({ id, photoUrl, linkGit, linkLinkedIn }: User) {
  return (
    <Grid item>
      <Paper className="paper" elevation={3}>
      <Typography className="author" variant="h6">
          <Trans>in:Author</Trans>
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <Box className="avatar_box">
              <Avatar className="avatar" alt="Foto" src={photoUrl} />
            </Box>
          </Grid>
          <Grid item>
            <Typography className="author" variant="h6">
              <Trans>te:{id.toString()}.name</Trans>
            </Typography>
            <Box className="link_box">
              <Box className="link_box--item">
                <Link href={linkGit} target="_blank">
                  <GitHubIcon />
                </Link>
              </Box>
              <Box className="link_box--item">
                <Link href={linkLinkedIn} target="_blank">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Box>
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
