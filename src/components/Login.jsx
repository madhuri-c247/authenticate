import React, { useContext, useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import image from './assests/loginimage.webp'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Typography } from '@mui/material';
import AlertComponent from './Alerts';

import { myContext } from '../App';

function Login() {

  const {loginUser, setLoginUser} = useContext(myContext)

  const [severity, setSeverity] = React.useState('')
  const [alertMessage, setAlertMessage] = React.useState('')
  const [alert, setAlert] = React.useState(false)
  const [data, setdata] = useState([])
  const [userData, setUser] = useState({
    email: '',
    password: ''
  })

   const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('users'));
    setdata(user);
    setLoginUser(user);
    console.log(data,'data')

  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data){

      const tempData = data.find((item)=> item.password === userData.password && item.email === userData.email)
      if(tempData){
        
      
      if (userData.email === tempData.email && userData.password === tempData.password) {
        console.log('sucessfull');
        localStorage.setItem('token', JSON.stringify(tempData))
        navigate('/home');
        console.log(loginUser,'login user')
      } else {
        setAlert(true)
        setSeverity('error')
        setAlertMessage('Fill the proper details!')
      }
    }else{
      setAlert(true)
      setAlertMessage(`User Don't Exist!`)
      setSeverity('error')
    }
  }else{
    setAlert(true)
    setAlertMessage(`No User Found!`)
    setSeverity('error')
      
    }
  }

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };
    const handleChange = (e) => {
      const { value, name } = e.target;
      setUser({
        ...userData,
        [name]: value
      })
    }

    return (
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src={image} className="img-fluid" alt="logo" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <Typography className='mb-5' variant='h3'>Login :)</Typography>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={userData.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={userData.password} onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text>New User?</Form.Text><NavLink to={'/signup'}>Register</NavLink>
            </Form>
          </MDBCol>
        </MDBRow>
        {alert?
      <AlertComponent alertMessage={alertMessage} open={alert} handleClose={handleClose} severity={severity} />
    :''}
      </MDBContainer>
    );
  }

export default Login;
