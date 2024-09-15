
import { useParams } from "react-router-dom";
import { useGetTransactionsByAccountId } from "../../hooks/transaction-hooks";
import { useGetAccountById } from "../../hooks/account-hooks";

import TransactionListItem from "../transaction-list-item/TransactionListItem";
import { Transaction } from "../../types/Transaction";

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import styles from './AccountDetails.module.css';



export default function AccountDetails() {

    const { accountId } = useParams();
    const [account] = useGetAccountById(accountId);
    const [transactions] = useGetTransactionsByAccountId(accountId);


    return (

        <div className={styles['details-wrapper']}>

            <h2 className={styles['details-heading']}>Account Details</h2>

            <div className={styles['account-info']}>
                <p className={styles['balance-text']}>Account Balance: {account.balance}</p>
                <p className={styles['iban-text']}>Account IBAN: {account.iban}</p>
            </div>

            <h2 className={styles['transactions-heading']}>All Transactions</h2>

            <div className={styles['transaction-list']}>

                <ListGroup>
                    {transactions.map((t: Transaction) => <TransactionListItem
                        key={t._id}
                        {...t}
                    />)}
                </ListGroup>
            </div>
            

            <div>
                <Button style={{ marginRight: '2.5em' }} variant="primary" size="lg">Transfer Funds</Button>
                <Button variant="primary" size="lg">View Statement</Button>
            </div>

        </div>
    )


}