import React from 'react';
import './Styleguide.sass';
import { Link, Grid, Button, TextField, Box, Typography } from '@material-ui/core'

function Home() {
  return (
    <Box className='styleguide'>
      <Typography className='styleguide-name' variant="h2">STYLEGUIDE</Typography>
      <Box className='links'>
        <Typography className='styleguide-name' variant="h3">Links</Typography>
        <Box className='link'>
          <Link color='secondary'>
            Link
          </Link>
        </Box>
      </Box>
      <Box className='buttons'>
      <Typography className='styleguide-name' variant="h3">Buttons</Typography>
        <Grid container spacing={2}>
          <Grid container justify="space-around" item sm={4} md={2} lg={2} spacing={0}>
            <Button variant="contained">Default</Button>
          </Grid>
          <Grid container justify="space-around" item sm={4} md={2} lg={2} spacing={0}>
            <Button variant="contained" color="primary">Primary</Button>
          </Grid>
          <Grid container justify="space-around" item sm={4} md={2} lg={2} spacing={0}>
            <Button variant="contained" color="secondary">Secondary</Button>
          </Grid>
          <Grid container justify="space-around" item sm={4} md={2} lg={2} spacing={0}>
            <Button variant="contained" disabled>Disabled</Button>
          </Grid>
          <Grid container justify="space-around" item sm={4} md={2} lg={2} spacing={0}>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
          </Grid>
        </Grid>
      </Box>
      <Box className='inputs'>
        <Typography className='styleguide-name' variant="h3">Input</Typography>
        <Box className='input'>
          <form className='abc'>
            <TextField
              id="outlined-secondary"
              label="Search"
              variant="outlined"
              color="secondary"
            />
          </form>
        </Box>
      </Box>
      <Box className='typography-elements'>
        <Typography className='styleguide-name' variant="h3">Typography elements</Typography>
        Используемые картинки(по факту закинем)
      </Box>
      <Box className='colors'>
        <Typography className='styleguide-name' variant="h3">Colors and its purpose</Typography>
        <Box className='color-styleguide first'>First</Box>
        <Box className='color-styleguide second'>Second</Box>
      </Box>
      <Box className='icons'>
        <Typography className='styleguide-name' variant="h3">Icons</Typography>
         По факту добавим
      </Box>
    </Box>
  );
}

export default Home;
