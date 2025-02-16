import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

export default function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({ amount: "", description: "", date: "", category: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.amount || !formData.description || !formData.date || !formData.category) {
      alert("All fields are required!");
      return;
    }

    addTransaction({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ amount: "", description: "", date: "", category: "" });
  }

  return (
    <Container className="p-4 border rounded shadow bg-white">
      <h3 className="mb-3">Add Transaction</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Amount" value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Description" value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="date" value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Add Transaction</Button>
      </Form>
    </Container>
  );
}
