import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  }

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h2 className="mb-3">Welcome back!</h2>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mb-3">
        Login
      </Button>

      <div className="text-center">
        <span>Don't have an account?</span>
        <a href="./RegistrationForm"> Register here</a>
      </div>
    </Form>
  );
}

export default LoginPage;
