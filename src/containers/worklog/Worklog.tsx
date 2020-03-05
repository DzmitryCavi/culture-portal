import React from 'react';
import './Worklog.sass';
import { Box } from '@material-ui/core';
import WorklogTable from './WorklogTable'
import Difficulties from './Difficulties'
import SelfEvaluation from './SelfEvaluation'


export default function Worklog() {
  return (
    <Box className='worklog-container' mx={3}>
      <WorklogTable />
      <Difficulties />
      <SelfEvaluation />
    </Box>
  );
}
