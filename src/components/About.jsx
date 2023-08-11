import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SimplePaper from './aboutImage';
import { Typography } from '@mui/material';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function About() {
  const content = (
    <div className='m-4'>
      <Typography className='mb-3' variant='h2' component="h1">Hey!</Typography>
      <Typography variant='h4'>I'm Madhuri Verma.</Typography>
      <Typography className='mt-5' variant='body1'>Lorem ipsum dolor sit amet
       consectetur adipisicing elit. Quos dignissimos magni cupiditate 
       sapiente nesciunt explicabo ut reprehenderit aspernatur ducimus officia, 
       magnam inventore sequi itaque voluptas. Eveniet
        reprehenderit autem temporibus fugit.</Typography>
      <pre><h3></h3></pre>
    </div>
  );

  return (
    <div  className='m-4 p-2' style={{display:'flex', justifyContent:'center'}}>
      <div style={{display:'flex', width:'70%'}}>


    <Grid container>
      <Grid item xs className=''>
        <SimplePaper/>
      </Grid>
      <Divider orientation="vertical" flexItem>
        ABOUT
      </Divider>
      <Grid item xs>
        {content}
      </Grid>
    </Grid>
      </div>
    </div>
  );
}