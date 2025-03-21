import React from 'react';
import { User, Lock, HelpCircle } from 'lucide-react';

export const LoginScreen = ({ email, password, setEmail, setPassword, handleLogin }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6">
        <h2 className="text-center text-3xl font-bold text-white">ExpenseTracker</h2>
        <p className="text-center text-blue-100">Manage your finances with ease</p>
      </div>
      
      <form onSubmit={handleLogin} className="p-8">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex-1 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Login
          </button>
          <button
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-3 px-4 rounded-lg flex-1 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            type="button"
          >
            Sign Up
          </button>
        </div>
        
        <div className="text-center mt-6">
          <a href="#" className="text-blue-500 hover:text-blue-700 text-sm flex justify-center items-center">
            <HelpCircle className="h-4 w-4 mr-1" />
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  </div>
);