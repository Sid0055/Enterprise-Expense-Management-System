import React from 'react';

export const StatCard = ({ title, value, icon, iconBgColor }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
    <div className="flex items-center justify-between">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className={`${iconBgColor} p-2 rounded-lg`}>
        {icon}
      </div>
    </div>
    <p className="text-2xl font-bold mt-2">{value}</p>
    <p className="text-xs text-gray-500 mt-1">Updated today</p>
  </div>
);