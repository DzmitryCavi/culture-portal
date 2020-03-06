import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { teamData } from './teamDate';
import Card from './Card';

interface Car {
  id: number;
  name: string;
  photoUrl: string;
  linkGit: string;
  linkLinkedIn: string;
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
    />
  ));

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" spacing={2}>
        {team}
      </Grid>
    </Container>
  );
}

export default Team;
