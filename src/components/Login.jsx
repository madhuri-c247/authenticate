import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import image from './assests/loginimage.webp'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

const [user, setUser] = useState({
  email:'',
  password:''
})

 const navigate = useNavigate()
 const login = ()=>{
    navigate('/home')
 }

 const handleEvent = (e)=>{
      const [value, name] = e.target.value;
      setUser({
        ...user,
        [name]:value
      })

      console.log(user);
 }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={image}  className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;