import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./transactions-form.css";

interface TransactionData {
  date: string;
  totalAmount: string;
  reason: string;
  ibanFrom: string;
  ibanTo: string;
}

const mockAccounts = [
  { iban: "DE89370400440532013000", name: "Account 1" },
  { iban: "DE89370400440532013001", name: "Account 2" },
];

const mockCreateTransaction = async (transactionData: TransactionData) => {
  console.log("Transaction data submitted:", transactionData);
  return new Promise((resolve) => setTimeout(resolve, 500));
};

const TransactionForm: React.FC = () => {
  const [transactionData, setTransactionData] = useState<TransactionData>({
    date: new Date().toISOString(),
    totalAmount: "",
    reason: "",
    ibanFrom: "",
    ibanTo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!transactionData.totalAmount || parseFloat(transactionData.totalAmount) <= 0) {
      newErrors.totalAmount = "Please enter a valid amount greater than 0.";
    }
    if (!transactionData.reason.trim()) {
      newErrors.reason = "Reason is required.";
    }
    if (!transactionData.ibanFrom) {
      newErrors.ibanFrom = "Please select an account to send from.";
    }
    if (!transactionData.ibanTo) {
      newErrors.ibanTo = "Please enter a valid IBAN to send to.";
    }
    if (transactionData.ibanFrom === transactionData.ibanTo) {
      newErrors.ibanTo = "Cannot send to the same account.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await mockCreateTransaction(transactionData);
      alert("Transaction successfully created!");
      setTransactionData({
        date: new Date().toISOString(),
        totalAmount: "",
        reason: "",
        ibanFrom: "",
        ibanTo: "",
      });
    } catch (error) {
      setErrors({ ...errors, general: "Failed to create transaction." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Container className="mt-5 custom-container">
        <h2>Create Transaction</h2>
        {errors.general && <div className="alert alert-danger">{errors.general}</div>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formTotalAmount" className="custom-form-group">
                <Form.Label>Total Amount</Form.Label>
                <Form.Control
                  type="number"
                  step="0.5"
                  name="totalAmount"
                  value={transactionData.totalAmount}
                  onChange={handleChange}
                  isInvalid={!!errors.totalAmount}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.totalAmount}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formReason" className="custom-form-group">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  type="text"
                  name="reason"
                  value={transactionData.reason}
                  onChange={handleChange}
                  isInvalid={!!errors.reason}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.reason}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formIbanFrom" className="custom-form-group">
                <Form.Label>Select Account (From)</Form.Label>
                <Form.Control
                  as="select"
                  name="ibanFrom"
                  value={transactionData.ibanFrom}
                  onChange={handleChange}
                  isInvalid={!!errors.ibanFrom}
                  style={{ cursor: "pointer" }}
                >
                  <option value="">Choose an account</option>
                  {mockAccounts.map((account) => (
                    <option key={account.iban} value={account.iban}>
                      {account.name} - {account.iban}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.ibanFrom}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formIbanTo" className="custom-form-group">
                <Form.Label>IBAN To</Form.Label>
                <Form.Control
                  type="text"
                  name="ibanTo"
                  value={transactionData.ibanTo}
                  onChange={handleChange}
                  isInvalid={!!errors.ibanTo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ibanTo}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Control type="hidden" name="date" value={transactionData.date} />

          <div>
            <Button variant="primary" type="submit" className="me-2" disabled={isSubmitting}>
              {isSubmitting ? <Spinner animation="border" size="sm" /> : "Create Transaction"}
            </Button>
            <Link to="/transactions/history">
              <Button variant="secondary" className="mt-3">
                View Transaction History
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default TransactionForm;
