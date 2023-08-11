import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import aboutImage from './assests/aboutImage.jpg'
export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 500,
        },
      }}
    >
      {/* <Paper elevation={0} /> */}
      {/* <Paper /> */}
      <Paper elevation={3} >
        <img src={aboutImage} alt="image" width={400} height={500}/>
      </Paper>
    </Box>
  );
}