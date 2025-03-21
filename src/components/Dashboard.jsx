// components/Dashboard.jsx
import React from 'react';
import { DollarSign, Home, Calendar, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useExpenseContext } from './ExpenseContext';
import { StatCard } from './StatCard';

export const Dashboard = ({setActiveTab}) => {
  const { expenses, totalExpenses, chartData } = useExpenseContext();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Expenses" 
          value={`$${totalExpenses.toFixed(2)}`} 
          icon={<DollarSign className="h-5 w-5 text-blue-600" />}
          iconBgColor="bg-blue-100"
        />
        
        <StatCard 
          title="Home Expenses" 
          value="$245.30" 
          icon={<Home className="h-5 w-5 text-green-600" />}
          iconBgColor="bg-green-100"
        />
        
        <StatCard 
          title="Monthly Budget" 
          value="$1,500.00" 
          icon={<Calendar className="h-5 w-5 text-purple-600" />}
          iconBgColor="bg-purple-100"
        />
        
        <StatCard 
          title="Savings Rate" 
          value="23%" 
          icon={<PieChart className="h-5 w-5 text-amber-600" />}
          iconBgColor="bg-amber-100"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Expense Categories</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Recent Expenses</h3>
          <div className="overflow-y-auto max-h-64">
            <ul className="space-y-3">
              {expenses.slice(0, 3).map(expense => (
                <li key={expense.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{expense.category}</p>
                    <p className="text-sm text-gray-500">{expense.date}</p>
                  </div>
                  <p className="font-bold text-gray-700">${expense.amount.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-full mt-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium py-2 rounded-lg transition-all"
            onClick={() => setActiveTab('expenses')}
          >
            View All Expenses
          </button>
        </div>
      </div>
    </div>
  );
};