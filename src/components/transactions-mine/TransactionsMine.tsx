import { useState, useEffect } from 'react';
import { Table, Form, Pagination } from 'react-bootstrap';
import TransactionListItem from '../transaction-list-item/TransactionListItem';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetTransactionsByUserId } from '../../hooks/transaction-hooks';
import { Transaction } from '../../types';


const TransactionsMine: React.FC = () => {
    const { id } = useAuthContext();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filterType, setFilterType] = useState<string>('all');
    const [filterDate, setFilterDate] = useState<string>('');
    const [filterAmount, setFilterAmount] = useState<number | ''>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const transactionsPerPage = 5;

    
    const { data, error } = useGetTransactionsByUserId(id);

    
    useEffect(() => {
        if (data) {
            setTransactions(data);
        }
    }, [data]);

    if (error) return <p>Error loading transactions</p>;

    
    const filteredTransactions = transactions.filter(transaction => {
        const isTypeMatch = filterType === 'all' || transaction.reason === filterType;
        const isDateMatch = !filterDate || transaction.date === filterDate;
        const isAmountMatch = filterAmount === '' || transaction.amount === filterAmount;

        return isTypeMatch && isDateMatch && isAmountMatch;
    });

    
    const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + transactionsPerPage);

    
    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <h2>My Transactions</h2>

            
            <Form.Group controlId="filterType">
                <Form.Label>Filter by type:</Form.Label>
                <Form.Control
                    as="select"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">Withdrawal</option>
                </Form.Control>
            </Form.Group>

           
            <Form.Group controlId="filterDate">
                <Form.Label>Filter by date:</Form.Label>
                <Form.Control
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                />
            </Form.Group>

            
            <Form.Group controlId="filterAmount">
                <Form.Label>Filter by amount:</Form.Label>
                <Form.Control
                    type="number"
                    value={filterAmount === '' ? '' : filterAmount}
                    onChange={(e) => setFilterAmount(e.target.value ? parseFloat(e.target.value) : '')}
                />
            </Form.Group>

            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTransactions.map(transaction => (
                        <TransactionListItem
                            key={transaction._id}
                            amount={transaction.amount}
                            date={transaction.date}
                            reason={transaction.reason}
                            iban_from={transaction.iban_from}
                            iban_to={transaction.iban_to}
                            type={transaction.type} 
                        />
                    ))}
                </tbody>
            </Table>

            
            <Pagination>
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
            </Pagination>
        </div>
    );
};

export default TransactionsMine;
