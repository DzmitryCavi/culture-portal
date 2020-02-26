import React from 'react';
import './Home.sass';
import { Button } from '@material-ui/core';

function Home() {
  return (
    <div className="home">
      <h1 className='home-name'>Culture Portal</h1>
      <article className='home-article'>A theatre director or stage director is an instructor in the theatre fiel who oversees and orchestrates the mounting of a theatre production (a play, opera, musical, or devised piece of work) by unifying various endeavours and aspects of production. The director's function is to ensure the quality and completeness of theatre production and to lead the members of the creative team into realizing their artistic vision for it. The director thereby collaborates with a team of creative individuals and other staff, coordinating research, stagecraft, costume design, props, lighting design, acting, set design, stage combat, and sound design for the production. If the production is a new piece of writing or a (new) translation of a play, the director may also work with the playwright or a translator.
      </article>
      <div className='director'>
        <div className='container-photo'>
          <img className='director-photo' src='https://minsknews.by/wp-content/uploads/2020/02/Boris-Luczenko-e1580914632504.jpg' alt='director' />
        </div>
        <div className='director-characteristic'>
          <h3 className='director-name'>Barys Lucenka</h3>
          <div className='director-years'>16.09.1937 - 05.02.2020</div>
          <div className='director-description'>Belarusian theater director, People’s Artist of Belarus 1995.</div>
          <Button variant="contained" color="secondary">Learn more</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
