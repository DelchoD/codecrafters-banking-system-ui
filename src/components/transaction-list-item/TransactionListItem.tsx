import { ListGroup } from "react-bootstrap";
import { TransactionListItemProps } from '../../types';


const TransactionListItem: React.FC<TransactionListItemProps> = ({
    amount,
    date,
    reason,
    iban_from,
    iban_to,
    type 
}) => {
    return (
        <ListGroup.Item>
            <p>Date: {date}</p>
            <p>Amount: ${amount}</p>
            <p>Type: {type}</p> 
            <p>Reason: {reason}</p>
            <p>From: {iban_from} To: {iban_to}</p>
        </ListGroup.Item>
    );
};

export default TransactionListItem;
