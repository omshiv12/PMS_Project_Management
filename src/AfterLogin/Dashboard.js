import React from 'react';
import Card from './CallTasks';
import { Typography } from '@material-ui/core';

export default function App() {
  return (
    <>
        <hr style={{padding:0,margin:0}}/>
        <hr style={{padding:0,margin:0,marginBottom:40}}/>
        <Typography variant="h5" style={{textAlign:"center"}}>My Tasks</Typography>
        <Card/>
    </>
  )
}