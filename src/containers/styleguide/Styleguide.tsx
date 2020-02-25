import React from 'react';
import './Styleguide.sass';
import { Link, Grid, Button, TextField } from '@material-ui/core'

function Home() {
  return (
    <div className='styleguide'>
      <h1 className='styleguide-name'>STYLEGUIDE</h1>
      <div className='links'>
        <h2>Links</h2>
        <div className='link'>
          <Link color='secondary'>
            Link
          </Link>
        </div>
      </div>
      <div className='buttons'>
        <h2>Buttons</h2>
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
      </div>
      <div className='inputs'>
        <h2>Input</h2>
        <div className='input'>
          <form className='abc'>
            <TextField
              id="outlined-secondary"
              label="Search"
              variant="outlined"
              color="secondary"
            />
          </form>
        </div>
      </div>
      <div className='typography-elements'>
        <h2>Typography elements</h2>
        Используемые картинки(по факту закинем)
      </div>
      <div className='colors'>
        <h2>Colors and its purpose</h2>
        <div>
          <div className='color-styleguide first'>First</div>
          <div className='color-styleguide second'>Second</div>
        </div>
      </div>
      <div className='icons'>
        <h2>Icons</h2>
         По факту добавим
      </div>
    </div>
  );
}

export default Home;
