import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountCreate = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    initialDeposit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the account with formData
    alert('Banking account created successfully!');
    console.log('Account Data:', formData);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-5 shadow border-0 rounded">
        <Card.Title className="text-center mb-4" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'rgb(35, 50, 70)' }}>
          Create a Banking Account
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicAccountName">
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your banking account name"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              required
              className="mb-3"
            />
          </Form.Group>

          <Form.Group controlId="formBasicInitialDeposit">
            <Form.Label>Initial Deposit Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter initial deposit"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleChange}
              required
              className="mb-4"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-2" size="lg">
            Create Account
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AccountCreate;
