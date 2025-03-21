// components/Expenses.jsx
import React from 'react';
import { ExpenseCard } from './ExpenseCard';
import { ExpenseForm } from './ExpenseForm';
import { DeleteModal } from './DeleteModal';
import { useExpenseContext } from './ExpenseContext';

export const Expenses = () => {
  const { expenses, expenseFormVisible, deleteModal, setExpenseFormVisible } = useExpenseContext();

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">All Expenses</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
          onClick={() => setExpenseFormVisible(true)}
        >
          Add Expense
        </button>
      </div>

      {expenseFormVisible && <ExpenseForm />}
      {deleteModal && <DeleteModal />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};