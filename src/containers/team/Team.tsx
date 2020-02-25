import React from 'react';
import './Team.sass';

import { Grid } from '@material-ui/core';
import { teamData } from './teamDate';
import Card from './Card';

interface Car {
  id: number;
  name: string;
  photoUrl: string;
  linkGit: string;
  linkLinkedIn: string;
  description: string;
}

interface CarProps {
  user: Car[];
}

function Team() {
  const team = teamData.map(user => (
    <Card
      key={user.id}
      name={user.name}
      id={user.id}
      photoUrl={user.photoUrl}
      linkGit={user.linkGit}
      linkLinkedIn={user.linkLinkedIn}
      description={user.description}
    />
  ));

  return (
    <div className="wrapper">
      <Grid container item xs={12} spacing={2} justify="center">
        {team}
      </Grid>
    </div>
  );
}

export default Team;
