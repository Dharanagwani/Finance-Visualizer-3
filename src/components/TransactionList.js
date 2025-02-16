import { ListGroup, Button, Container, Badge } from "react-bootstrap";

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <Container className="p-4 mt-3 border rounded shadow bg-white">
      <h3 className="mb-3">Transaction History</h3>
      <ListGroup>
        {transactions.map((t, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{t.description}</strong> <Badge bg="secondary">{t.category}</Badge>
              <p className="mb-0 text-muted">${t.amount} | {new Date(t.date).toLocaleDateString()}</p>
            </div>
            <Button variant="danger" size="sm" onClick={() => deleteTransaction(index)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
