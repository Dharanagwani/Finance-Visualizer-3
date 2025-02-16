import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function Dashboard({ transactions, budgets }) {
  const totalExpenses = transactions.reduce((acc, t) => acc + t.amount, 0);
  const lastTransaction = transactions[transactions.length - 1];

  return (
    <Container className="p-4 border rounded shadow bg-white mt-3">
      <h3 className="mb-3">Dashboard Summary</h3>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>
              <Card.Text className="fs-4">${totalExpenses.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Most Recent Transaction</Card.Title>
              <Card.Text>
                {lastTransaction ? `${lastTransaction.description} - $${lastTransaction.amount}` : "No Transactions"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mt-4">Budget vs. Actual</h3>
      {Object.keys(budgets).map((category) => {
        const actual = transactions.filter(t => t.category === category).reduce((acc, t) => acc + t.amount, 0);
        const budget = budgets[category];
        const percentage = Math.min((actual / budget) * 100, 100);

        return (
          <Card key={category} className="mb-3">
            <Card.Body>
              <Card.Title>{category}</Card.Title>
              <ProgressBar now={percentage} label={`${Math.round(percentage)}%`} variant={actual > budget ? "danger" : "success"} />
              <Card.Text className="mt-2">{actual > budget ? "⚠ Over Budget" : "✔ Within Budget"}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
