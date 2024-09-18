export interface Transaction {
    _id: string;
    amount: number;
    date: string;
    reason: string;
    iban_from: string;
    iban_to: string;
    type: string; 
}

export interface TransactionListItemProps {
    amount: number;
    date: string;
    reason: string;
    iban_from: string;
    iban_to: string;
    type: string; 
}
