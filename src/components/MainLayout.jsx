// components/MainLayout.jsx
import React, { useState, useEffect } from 'react';
import { CreditCard, Menu, X, User } from 'lucide-react';
import { Dashboard } from './Dashboard';
import { Expenses } from './Expenses';


export const MainLayout = ({ setIsLoggedIn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Close mobile menu when selecting a tab
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [activeTab]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center text-blue-600 font-bold text-xl">
                <CreditCard className="h-6 w-6 mr-2" />
                ExpenseTracker
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'expenses' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('expenses')}
              >
                Expenses
              </button>
              <div className="border-l h-6 mx-2"></div>
              <button
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 transition-all"
                onClick={() => setIsLoggedIn(false)}
              >
                <User className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button
                className={`block w-full text-left px-3 py-2 rounded-lg ${
                  activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-lg ${
                  activeTab === 'expenses' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('expenses')}
              >
                Expenses
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        {activeTab === 'dashboard' ? <Dashboard setActiveTab={setActiveTab} /> : <Expenses />}
      </main>
    </div>
  );
};