import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

export default function BudgetForm({ setBudget }) {
  const [formData, setFormData] = useState({ category: "", budget: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.category || !formData.budget) {
      alert("Both fields are required!");
      return;
    }

    setBudget((prevBudgets) => ({ ...prevBudgets, [formData.category]: parseFloat(formData.budget) }));
    setFormData({ category: "", budget: "" });
  }

  return (
    <Container className="p-4 border rounded shadow bg-white">
      <h3 className="mb-3">Set Monthly Budget</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Budget Amount" value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })} />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Set Budget</Button>
      </Form>
    </Container>
  );
}
