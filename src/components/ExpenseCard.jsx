import React from 'react';
import { Edit, Trash } from 'lucide-react';
import { useExpenseContext } from './ExpenseContext';

export const ExpenseCard = ({ expense }) => {
  const { handleEdit, setDeleteModal } = useExpenseContext();
  
  return (
    <div className="bg-white rounded-xl shadow-md p-5 transform transition-all hover:shadow-lg">
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-800">{expense.category}</h3>
        <p className="font-bold text-gray-700">${expense.amount.toFixed(2)}</p>
      </div>
      <p className="text-sm text-gray-500 mt-1">{expense.date}</p>
      <p className="text-gray-600 mt-3 mb-4">{expense.description}</p>
      <div className="flex justify-between border-t pt-3">
        <button
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm transition-all"
          onClick={() => handleEdit(expense)}
        >
          <Edit className="h-4 w-4 mr-1" /> Edit
        </button>
        <button
          className="text-red-600 hover:text-red-800 flex items-center text-sm transition-all"
          onClick={() => setDeleteModal(expense.id)}
        >
          <Trash className="h-4 w-4 mr-1" /> Delete
        </button>
      </div>
    </div>
  );
};


