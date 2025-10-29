import React, { useState } from 'react'
import { Form, Button, Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons' 
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault()
    console.log("login issue")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter correct email address.');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter password.');
      return;
    }

    setAuthenticate(true)
    navigate("/")
  }
  return (
    <Container>
      <Form className='login-form' onSubmit={(event)=>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
              <FontAwesomeIcon icon={faLock} /> All data is kept secure
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className='check-box' type="checkbox" label="Remember me" />
          </Form.Group>
          <Button className='login-btn' type="submit" >
              SIGN IN
          </Button>
      </Form>
    </Container>
  )
}

export default Login