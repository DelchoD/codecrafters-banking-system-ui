import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-5 shadow border-0 rounded">
        <Card.Title className="text-center mb-4" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'rgb(35, 50, 70)' }}>
          Code Crafters <br /> 
          Banking Management System
        </Card.Title>
        <Card.Subtitle className="text-center mb-4" style={{ color: '#6c757d' }}>
          Please log in to manage your accounts
        </Card.Subtitle>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your registered email" required className="mb-3" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" required className="mb-4" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-2" size="lg">
            Login
          </Button>
        </Form>

        {/* Forgot Password Button */}
        <div className="text-center mt-3">
          <NavLink to="/forgot-password" className="text-primary">
            <Button variant="link" className="p-0">
              Forgot Password?
            </Button>
          </NavLink>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">Don’t have an account? <NavLink to="/register" className="text-primary">Sign up</NavLink></p>
        </div>
      </Card>
    </Container>
  );
};

export default Home;
