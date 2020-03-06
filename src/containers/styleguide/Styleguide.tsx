import React from 'react';
import './Styleguide.sass';
import {
  Link,
  Grid,
  Button,
  TextField,
  Box,
  Typography,
} from '@material-ui/core';
import { Trans } from 'react-i18next';

function Home() {
  return (
    <Box className="styleguide">
      <Typography className="styleguide-name" variant="h2">
        <Trans>STYLEGUIDE</Trans>
      </Typography>
      <Box className="links">
        <Typography className="styleguide-name" variant="h3">
          <Trans>Links</Trans>
        </Typography>
        <Box className="link">
          <Link color="primary">
            <Trans>Link</Trans>
          </Link>
        </Box>
      </Box>
      <Box className="buttons">
        <Typography className="styleguide-name" variant="h3">
          <Trans>Buttons</Trans>
        </Typography>
        <Grid container spacing={2}>
          <Grid
            container
            justify="space-around"
            item
            sm={4}
            md={2}
            lg={2}
            spacing={0}
          >
            <Button variant="contained">
              <Trans>Default</Trans>
            </Button>
          </Grid>
          <Grid
            container
            justify="space-around"
            item
            sm={4}
            md={2}
            lg={2}
            spacing={0}
          >
            <Button variant="contained" color="primary">
              <Trans>Primary</Trans>
            </Button>
          </Grid>
          <Grid
            container
            justify="space-around"
            item
            sm={4}
            md={2}
            lg={2}
            spacing={0}
          >
            <Button variant="contained" color="secondary">
              <Trans>Secondary</Trans>
            </Button>
          </Grid>
          <Grid
            container
            justify="space-around"
            item
            sm={4}
            md={2}
            lg={2}
            spacing={0}
          >
            <Button variant="contained" disabled>
              <Trans>Disabled</Trans>
            </Button>
          </Grid>
          <Grid
            container
            justify="space-around"
            item
            sm={4}
            md={2}
            lg={2}
            spacing={0}
          >
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              <Trans>Link</Trans>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box className="inputs">
        <Typography className="styleguide-name" variant="h3">
          <Trans>Input</Trans>
        </Typography>
        <Box className="input">
          <form className="abc">
            <TextField
              id="outlined-secondary"
              label="Search"
              variant="outlined"
              color="secondary"
            />
          </form>
        </Box>
      </Box>
      <Box className="colors">
        <Typography className="styleguide-name" variant="h3">
          <Trans>Colors and its purpose</Trans>
        </Typography>
        <Box className="color-styleguide first">
          <Trans>First</Trans>
        </Box>
        <Box className="color-styleguide second">
          <Trans>Second</Trans>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
