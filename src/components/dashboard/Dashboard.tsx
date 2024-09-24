import { useState } from 'react';
import { Card, Button, Row, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Mock data for customer accounts, this should be replaced by API call in future.
interface Transaction {
  date: string;
  amount: number;
  description: string;
}

interface Account {
  id: string;
  name: string;
  balance: number;
  recentTransactions: Transaction[];
}

// Example mock data, replace with real data fetched from the backend when available.
const accounts: Account[] = [
  {
    id: '1',
    name: 'Checking Account',
    balance: 1000,
    recentTransactions: [
      { date: '2024-09-01', amount: 200, description: 'Salary Deposit' },
      { date: '2024-09-02', amount: 50, description: 'ATM Withdrawal' },
      { date: '2024-09-03', amount: 150, description: 'Freelance Work' },
      { date: '2024-09-04', amount: 100, description: 'Groceries' },
      { date: '2024-09-05', amount: 300, description: 'Investment Return' },
      { date: '2024-09-06', amount: 75, description: 'Dining Out' },
    ],
  },
  {
    id: '2',
    name: 'Savings Account',
    balance: 5000,
    recentTransactions: [
      { date: '2024-09-01', amount: 1000, description: 'Initial Deposit' },
      { date: '2024-09-10', amount: 200, description: 'Emergency Fund Withdrawal' },
    ],
  },
];

const Dashboard: React.FC = () => {
  // State to manage which account is expanded
  const [expandedAccount, setExpandedAccount] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle expanded view for each account
  const toggleExpand = (id: string) => {
    setExpandedAccount(expandedAccount === id ? null : id);
  };

  // Function to navigate to the transactions history
  const handleViewFullHistory = () => {
    navigate('/transactions/history'); // Redirect to the transactions history page
  };

  return (
    <Row>
      {accounts.map(account => (
        <Col xs={12} md={6} key={account.id}>
          <Card className="mb-3" style={{ minHeight: '250px', transition: 'height 0.3s ease', overflow: 'hidden' }}>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="flex-grow-0">{account.name}</Card.Title>
              <Card.Text className="flex-grow-1">Balance: ${account.balance}</Card.Text>
              {/* Expand/collapse button */}
              <Button variant="primary" onClick={() => toggleExpand(account.id)}>
                {expandedAccount === account.id ? 'Collapse' : 'Expand'}
              </Button>

              {/* Display recent transactions when the card is expanded */}
              {expandedAccount === account.id && (
                <div className="mt-3">
                  <h5>Recent Transactions:</h5>
                  <Table striped bordered hover size="sm" responsive>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Show only the first 5 transactions */}
                      {account.recentTransactions.slice(0, 5).map((transaction, index) => (
                        <tr key={index}>
                          <td>{transaction.date}</td>
                          <td>${transaction.amount}</td>
                          <td>{transaction.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {/* View Full History button */}
                  <Button variant="success" onClick={handleViewFullHistory} style={{ marginTop: '10px' }}>
                    View Full History
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
