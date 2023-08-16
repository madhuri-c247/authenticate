import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SimplePaper from './aboutImage';
import { Typography } from '@mui/material';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function About() {

  const navigate = useNavigate()
  const{loginUser} = React.useContext(myContext)

  const [user, setUser] = React.useState([])

  React.useEffect(()=>{
    if(loginUser.firstName==undefined){
      navigate('/login')
    }
    console.log(loginUser,'login home')
  },[loginUser])
  
  const content = (
    <div className='m-4'>
      <Typography className='mb-3' variant='h2' component="h1">Hey!</Typography>
      {loginUser.firstName||loginUser.lastName!==undefined? 
      <Typography variant='h4'>I'm {loginUser[0].firstName} {loginUser[0].lastName}.</Typography>
    : navigate('/login')} 
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
