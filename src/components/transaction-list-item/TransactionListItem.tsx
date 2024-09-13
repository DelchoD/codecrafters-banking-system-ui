import { ListGroup } from "react-bootstrap";


export default function TransactionListItem({
    amount,
    date,
    reason,
    iban_from,
    iban_to
}) {

    return (
        <ListGroup.Item>
            <p>Date: {date}</p>
            <p>Amount: {amount}</p>
            <p>Reason: {reason}</p>
            <p>From {iban_from} to {iban_to}</p>
        </ListGroup.Item>
    )
}