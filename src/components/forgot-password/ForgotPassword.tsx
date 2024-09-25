import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic for sending a password reset email
    alert('Password reset link sent to your email!');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-5 shadow border-0 rounded">
        <Card.Title className="text-center mb-4" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'rgb(35, 50, 70)' }}>
          Forgot Password
        </Card.Title>
        <Card.Subtitle className="text-center mb-4" style={{ color: '#6c757d' }}>
          Enter your email to receive a password reset link.
        </Card.Subtitle>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required className="mb-3" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-2" size="lg">
            Send Reset Link
          </Button>
        </Form>

        <div className="text-center mt-4">
          <p className="mb-0">
            Remembered your password? <NavLink to="/" className="text-primary">Login</NavLink>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
