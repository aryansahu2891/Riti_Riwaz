import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './RegistrationForm.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [weddingLocation, setWeddingLocation] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here

    // Redirect to home page after registration
    window.location.href = '/HomePage';
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="gender">
        <Form.Label>Gender:</Form.Label>
        <Form.Control as="select" value={gender} onChange={(event) => setGender(event.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Bride">Bride</option>
          <option value="Groom">Groom</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="firstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </Form.Group>

      <Form.Group controlId="weddingDate">
        <Form.Label>Wedding Date:</Form.Label>
        <Form.Control type="date" value={weddingDate} onChange={(event) => setWeddingDate(event.target.value)} required />
      </Form.Group>

      <Form.Group controlId="weddingLocation">
        <Form.Label>Wedding Location:</Form.Label>
        <Form.Control type="text" value={weddingLocation} onChange={(event) => setWeddingLocation(event.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit">Register</Button>
    </Form>
  );
}

export default RegistrationForm;
