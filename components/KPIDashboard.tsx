'use client';

import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

export default function KPIDashboard() {
  // Placeholder data - this will be populated with actual calculations
  const repPerformance = [
    {
      name: 'Sarah Mitchell',
      avgResponseTime: 8.5,
      avgResolutionTime: 28.3,
      totalCases: 2043,
      resolvedCases: 1891,
      resolutionRate: 92.6,
    },
    {
      name: 'James Chen',
      avgResponseTime: 7.2,
      avgResolutionTime: 25.1,
      totalCases: 1987,
      resolvedCases: 1854,
      resolutionRate: 93.3,
    },
    {
      name: 'Maria Rodriguez',
      avgResponseTime: 9.1,
      avgResolutionTime: 31.2,
      totalCases: 2108,
      resolvedCases: 1923,
      resolutionRate: 91.2,
    },
    {
      name: 'David Thompson',
      avgResponseTime: 6.8,
      avgResolutionTime: 23.7,
      totalCases: 1956,
      resolvedCases: 1847,
      resolutionRate: 94.4,
    },
    {
      name: 'Emily Patterson',
      avgResponseTime: 8.9,
      avgResolutionTime: 29.8,
      totalCases: 1906,
      resolvedCases: 1765,
      resolutionRate: 92.6,
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              CS Representative Performance
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Track individual team member metrics and KPIs
            </p>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              5 Team Members
            </span>
          </div>
        </div>
      </div>

      {/* Team Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Response Time</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">8.1h</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">↓ 12% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Resolution Time</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">27.6h</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">↓ 8% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Resolution Rate</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">92.8%</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">↑ 3% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Cases</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">10,000</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Across all reps</p>
        </div>
      </div>

      {/* Individual Rep Performance Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Individual Performance Metrics
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  CS Representative
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Total Cases
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Avg Response (hrs)
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Avg Resolution (hrs)
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Resolution Rate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {repPerformance.map((rep, index) => (
                <tr
                  key={rep.name}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {rep.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {rep.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Rank #{index + 1}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {rep.totalCases.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {rep.avgResponseTime.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {rep.avgResolutionTime.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${rep.resolutionRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {rep.resolutionRate.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note about placeholder data */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Note:</strong> This is placeholder data. Once connected to your actual dataset, these metrics will calculate dynamically based on the CS Rep Name column.
        </p>
      </div>
    </div>
  );
}
