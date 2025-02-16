
# **Personal Finance Visualizer (Stage 3: Budgeting)**
🚀 **A simple web application for tracking personal finances with budget management.**  

## **📌 Features**
✔ **All Stage 2 Features** +  
✔ **Set Monthly Category Budgets**  
✔ **Budget vs. Actual Comparison Chart** (Visual representation)  
✔ **Simple Spending Insights** (Over/Under Budget Warnings)  

---

## **📂 Tech Stack**
- **Frontend:** React, Bootstrap, Recharts  
- **State Management:** React Hooks (`useState`)  
- **CSS Framework:** Bootstrap  

---

## **📌 Installation Guide**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Application**
```sh
npm start
```
The app will be available at **`http://localhost:3000`**.

---

## **📂 Project Structure**
```
📦 personal-finance-visualizer
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TransactionForm.js   # Add transactions with categories
 ┃ ┃ ┣ 📜 TransactionList.js   # List transactions with categories
 ┃ ┃ ┣ 📜 ExpenseChart.js      # Budget vs. Actual Bar Chart
 ┃ ┃ ┣ 📜 Dashboard.js         # Summary cards (Total expenses, Category breakdown)
 ┃ ┃ ┣ 📜 BudgetForm.js        # Set budgets per category
 ┃ ┣ 📜 App.js                 # Main application
 ┃ ┣ 📜 index.js               # Entry point
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## **📌 Usage**
1. **Set Budgets:** Choose a category and enter a budget amount.  
2. **Add Transactions:** Enter amount, description, date, and category, then click "Add Transaction."  
3. **View Transactions:** See your transaction history categorized by type.  
4. **Delete Transactions:** Click "Delete" to remove a transaction.  
5. **View Budget Insights:**  
   - **Budget vs. Actual Chart:** Visual representation of spending vs. budget.  
   - **Progress Bars:** Show how much of your budget is used per category.  
   - **Over Budget Warning:** Highlights categories where spending exceeds the budget.  
   - **Dashboard Summary:**  
     - ✅ **Total Expenses**  
     - ✅ **Category Breakdown**  
     - ✅ **Most Recent Transactions**  

