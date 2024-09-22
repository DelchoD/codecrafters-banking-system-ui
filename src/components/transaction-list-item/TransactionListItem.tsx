
import { ListGroup } from "react-bootstrap";



interface TransactionProps {
    transaction: {
      id: string;
      date: string;
      type: string;
      amount: number;
      description: string;
      iban_to: string;
    };
  }
  
  export default function TransactionListItem({ transaction }: TransactionProps) {
    const { date, type, amount, description, iban_to } = transaction;
    
    return (
      <tr>
        <td>{date}</td>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{description}</td>
        <td>{iban_to}</td>
      </tr>
    );
  }

