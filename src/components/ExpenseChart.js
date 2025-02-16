import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Container } from "react-bootstrap";

export default function ExpenseChart({ transactions, budgets }) {
  const data = Object.keys(budgets).map((category) => {
    const actual = transactions.filter(t => t.category === category).reduce((acc, t) => acc + t.amount, 0);
    return { category, budget: budgets[category], actual };
  });

  return (
    <Container className="p-4 mt-3 border rounded shadow bg-white">
      <h3 className="mb-3">Budget vs. Actual Spending</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="budget" fill="#00C49F" name="Budget" />
          <Bar dataKey="actual" fill="#FF4563" name="Actual" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
