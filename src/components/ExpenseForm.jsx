import React from 'react';
import { X } from 'lucide-react';
import { useExpenseContext } from './ExpenseContext';

export const ExpenseForm = () => {
  const { 
    formData, 
    handleFormChange, 
    handleSubmit, 
    setExpenseFormVisible, 
    editingExpense 
  } = useExpenseContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition-all animate-fade-in-down">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            {editingExpense ? 'Edit Expense' : 'Add New Expense'}
          </h3>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setExpenseFormVisible(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
              <option value="Dining">Dining</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="amount">
              Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                id="amount"
                name="amount"
                step="0.01"
                value={formData.amount}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-lg py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a description"
            ></textarea>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
              onClick={() => setExpenseFormVisible(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              {editingExpense ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};