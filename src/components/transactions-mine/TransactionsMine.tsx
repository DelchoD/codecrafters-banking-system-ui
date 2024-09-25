import TransactionListItem from "../transaction-list-item/TransactionListItem";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { Pagination, Table, Form, Button, Row, Col } from "react-bootstrap";
import "./transactions-mine.css";

interface Transaction {
    id: string;
    date: string;
    type: string;
    amount: number;
    description: string;
    iban_to: string;
}

const transactions: Transaction[] = [
    { id: '1', date: '2024-01-01', type: 'Withdrawal', amount: 10, description: "Donation", iban_to: "BG18RZBB91550123456789" },
    { id: '2', date: '2024-02-02', type: 'Withdrawal', amount: 20, description: "ATM Withdrawal", iban_to: "BG18RZBB91550123456782" },
    { id: '3', date: '2024-03-03', type: 'Withdrawal', amount: 25, description: "Groceries", iban_to: "BG18RZBB91550123456783" },
    { id: '4', date: '2024-04-04', type: 'Withdrawal', amount: 10, description: "Donation", iban_to: "BG18RZBB91550123456784" },
    { id: '5', date: '2024-05-05', type: 'Withdrawal', amount: 50, description: "Gym Membership", iban_to: "BG18RZBB91550123456785" },
    { id: '6', date: '2024-06-06', type: 'Deposit', amount: 8000, description: "Salary", iban_to: "BG18RZBB91550123456788" },
    { id: '7', date: '2024-07-07', type: 'Withdrawal', amount: 20, description: "Donation", iban_to: "BG18RZBB91550123456786" },
    { id: '8', date: '2024-08-08', type: 'Withdrawal', amount: 500, description: "Freelance Work", iban_to: "BG18RZBB91550123456787" },
    { id: '9', date: '2024-09-09', type: 'Withdrawal', amount: 10000, description: "Transaction", iban_to: "BG18RZBB91550123456783" },
    { id: '11', date: '2024-09-11', type: 'Deposit', amount: 300, description: "Bonus", iban_to: "BG18RZBB91550133456789" },
    { id: '11', date: '2024-09-11', type: 'Deposit', amount: 1500, description: "Sell bike", iban_to: "BG18RZBB91550133456789" },
];

export default function TransactionsMine() {
    
    const { id } = useAuthContext();
    const itemsPerPage = 5;
    const today = new Date().toISOString().split("T")[0];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filters, setFilters] = useState<{
        fromDate: string;
        toDate: string;
        type: string;
        minAmount: string;
        maxAmount: string;
    }>({
        fromDate: '',
        toDate: today,
        type: '',
        minAmount: '',
        maxAmount: '',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
        setCurrentPage(1);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date).getTime();
        const fromDate = filters.fromDate ? new Date(filters.fromDate).getTime() : -Infinity;
        const toDate = filters.toDate ? new Date(filters.toDate).getTime() : Infinity;
        const minAmount = filters.minAmount ? parseFloat(filters.minAmount) : -Infinity;
        const maxAmount = filters.maxAmount ? parseFloat(filters.maxAmount) : Infinity;

        return (
            transactionDate >= fromDate &&
            transactionDate <= toDate &&
            (filters.type ? transaction.type === filters.type : true) &&
            (transaction.amount >= minAmount && transaction.amount <= maxAmount)
        )
    });


    const totalFilteredPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const displayedTransactions = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationItems = () => {
        const items: JSX.Element[] = [];
        for (let i = 1; i <= totalFilteredPages; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (
        <div>
            <Row className="mb-3 align-items-end">
            <Col>
                <Form.Group controlId="fromDate">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="fromDate"
                        value={filters.fromDate}
                        onChange={handleFilterChange}
                        placeholder="From Date"
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="toDate">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="toDate"
                        value={filters.toDate}
                        onChange={handleFilterChange}
                        placeholder="To Date"
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="type">
                    <Form.Label>Transaction Type</Form.Label>
                    <Form.Select
                        name="type"
                        value={filters.type}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Types</option>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdrawal">Withdrawal</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="minAmount">
                    <Form.Label>Min Amount</Form.Label>
                    <Form.Control
                        type="number"
                        name="minAmount"
                        value={filters.minAmount}
                        onChange={handleFilterChange}
                        placeholder="Min Amount"
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="maxAmount">
                    <Form.Label>Max Amount</Form.Label>
                    <Form.Control
                        type="number"
                        name="maxAmount"
                        value={filters.maxAmount}
                        onChange={handleFilterChange}
                        placeholder="Max Amount"
                    />
                </Form.Group>
            </Col>
            <Col xs="auto">
                <Button onClick={() => setFilters({ fromDate: '', toDate: today, type: '', minAmount: '', maxAmount: '' })}>
                    Clear Filters
                </Button>
            </Col>
        </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>IBAN</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedTransactions.length > 0 ? (
                        displayedTransactions.map((transaction) => (
                            <TransactionListItem key={transaction.id} transaction={transaction} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>No transactions found.</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {totalFilteredPages > 1 && (
                <Pagination className="custom-pagination">
                    {renderPaginationItems()}
                </Pagination>
            )}
        </div>
    );
}

