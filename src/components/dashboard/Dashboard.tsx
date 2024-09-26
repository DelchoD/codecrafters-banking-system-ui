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

interface DashboardProps {
  showDeleteButton?: boolean; // Add optional prop to control delete button visibility
}

// Example mock data, replace with real data fetched from the backend when available.
const initialAccounts: Account[] = [
  {
    id: '1',
    name: 'Checking Account',
    balance: 2480.5,
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
    balance: 6325,
    recentTransactions: [
      { date: '2024-09-01', amount: 5000, description: 'Initial Deposit' },
      { date: '2024-09-01', amount: 2000, description: 'Deposit' },
      { date: '2024-09-10', amount: 675, description: 'Emergency Fund Withdrawal' },
    ],
  },
  {
    id: '3',
    name: 'Business Account',
    balance: 20000,
    recentTransactions: [
      { date: '2024-09-01', amount: 30000, description: 'Initial Deposit' },
      { date: '2024-09-10', amount: 10000, description: 'Pay salaries' },
    ],
  },
  {
    id: '4', // Make sure the ID is unique
    name: 'Travel Fund',
    balance: 1600,
    recentTransactions: [
      { date: '2024-09-01', amount: 900, description: 'Deposit' },
      { date: '2024-09-10', amount: 700, description: 'Deposit' },
    ],
  },
];

const Dashboard: React.FC<DashboardProps> = ({ showDeleteButton = false }) => {
  // State to manage accounts and expanded views
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [expandedAccounts, setExpandedAccounts] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle expanded view for each account
  const toggleExpand = (id: string) => {
    setExpandedAccounts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to navigate to the transactions history
  const handleViewFullHistory = () => {
    navigate('/transactions/history'); // Redirect to the transactions history page
  };

  // Function to delete an account by ID
  const deleteAccount = (id: string) => {
    setAccounts(prevAccounts => prevAccounts.filter(account => account.id !== id));
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
                {expandedAccounts[account.id] ? 'Collapse' : 'Expand'}
              </Button>

              {/* Display recent transactions when the card is expanded */}
              {expandedAccounts[account.id] && (
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
                  <Button variant="secondary" onClick={handleViewFullHistory} style={{ marginTop: '10px' }}>
                    View Full History
                  </Button>

                  {/* Conditionally render delete button if showDeleteButton is true */}
                  {showDeleteButton && (
                    <Button
                      variant="danger"
                      onClick={() => deleteAccount(account.id)}
                      style={{ marginTop: '10px', marginLeft: '10px' }}
                    >
                      Delete Account
                    </Button>
                  )}
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
