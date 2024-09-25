import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Register.module.css'

const Register = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center customer-container" style={{ height: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '440px' }} className="p-4 shadow border-0 rounded">
        <Card.Title className="text-center mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgb(35, 50, 70)' }}>
          Code Crafters <br /> 
          Banking Management System
        </Card.Title>
        <Card.Subtitle className="text-center mb-4" style={{ color: '#6c757d', fontSize: '1rem' }}>
          Create your account
        </Card.Subtitle>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicMiddleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Middle Name" className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required className="mb-2" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicPersonalId">
                <Form.Label>Personal ID</Form.Label>
                <Form.Control type="text" placeholder="Personal ID" required className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" required className="mb-2" />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required className="mb-3" />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100" size="lg">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p className="mb-0">Already have an account? <Link to="/" className="text-primary">Sign in</Link></p>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
