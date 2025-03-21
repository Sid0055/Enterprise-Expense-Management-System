import React from 'react';
import { useExpenseContext } from './ExpenseContext';

export const DeleteModal = () => {
  const { deleteModal, setDeleteModal, handleDelete } = useExpenseContext();
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition-all animate-fade-in-down">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Confirm Delete</h3>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this expense? This action cannot be undone.</p>
        <div className="flex justify-end gap-3">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
            onClick={() => setDeleteModal(null)}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            onClick={() => handleDelete(deleteModal)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};