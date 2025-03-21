import React, { createContext, useState, useContext } from "react";

const ExpenseContext = createContext();

const useExpenseContext = () => useContext(ExpenseContext);

const ExpenseProvider = ({ children }) => {
  // Sample expense data
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Groceries",
      amount: 85.5,
      date: "2025-03-15",
      description: "Weekly grocery shopping",
    },
    {
      id: 2,
      category: "Transportation",
      amount: 45.0,
      date: "2025-03-14",
      description: "Fuel",
    },
    {
      id: 3,
      category: "Entertainment",
      amount: 65.75,
      date: "2025-03-12",
      description: "Movie night",
    },
    {
      id: 4,
      category: "Utilities",
      amount: 120.3,
      date: "2025-03-10",
      description: "Electricity bill",
    },
    {
      id: 5,
      category: "Dining",
      amount: 78.25,
      date: "2025-03-08",
      description: "Dinner with friends",
    },
  ]);

  // Form state
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  // Chart data
  const chartData = [
    { name: "Groceries", amount: 350 },
    { name: "Transportation", amount: 275 },
    { name: "Entertainment", amount: 200 },
    { name: "Utilities", amount: 325 },
    { name: "Dining", amount: 250 },
  ];

  // Total expenses calculation
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  // In ExpenseContext.jsx, update the handleSubmit function:
  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(formData.amount);

    if (editingExpense) {
      // Update existing expense
      const updatedExpense = {
        ...formData,
        amount: parsedAmount,
      };
      setExpenses(
        expenses.map((expense) =>
          expense.id === editingExpense.id
            ? { ...expense, ...updatedExpense }
            : expense
        )
      );
      setEditingExpense(null);
    } else {
      // Add new expense
      // Update the new expense creation to:
      const newExpense = {
        id:
          expenses.length > 0 ? Math.max(...expenses.map((e) => e.id)) + 1 : 1,
        ...formData,
        amount: parsedAmount,
      };
      setExpenses([...expenses, newExpense]);
    }
  };

  // Reset form
  setFormData({ category: "", amount: "", date: "", description: "" });
  setExpenseFormVisible(false);

  // Handle edit expense
  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setFormData({
      category: expense.category,
      amount: expense.amount,
      date: expense.date,
      description: expense.description,
    });
    setExpenseFormVisible(true);
  };

  // Handle delete expense
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setDeleteModal(null);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        expenseFormVisible,
        setExpenseFormVisible,
        editingExpense,
        setEditingExpense,
        deleteModal,
        setDeleteModal,
        formData,
        setFormData,
        chartData,
        totalExpenses,
        handleFormChange,
        handleSubmit,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
export { ExpenseProvider, useExpenseContext };
