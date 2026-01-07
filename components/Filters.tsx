'use client';

import { Search, X } from 'lucide-react';
import type { FilterState } from '@/lib/types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
}

export default function Filters({ filters, onFilterChange, onReset }: FiltersProps) {
  const updateFilter = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = () => {
    return (
      filters.search !== '' ||
      filters.status !== 'All' ||
      filters.urgency !== 'All' ||
      filters.vertical !== 'All' ||
      filters.accountHealth !== 'All' ||
      filters.issueCategory !== 'All'
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        {hasActiveFilters() && (
          <button
            onClick={onReset}
            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Search */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              placeholder="Search by account name or request ID..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => updateFilter('status', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="All">All</option>
            <option value="Resolved">Resolved</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Urgency
          </label>
          <select
            value={filters.urgency}
            onChange={(e) => updateFilter('urgency', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Vertical */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vertical
          </label>
          <select
            value={filters.vertical}
            onChange={(e) => updateFilter('vertical', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="All">All</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Fuel">Fuel</option>
            <option value="Grocery">Grocery</option>
          </select>
        </div>

        {/* Account Health */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Health
          </label>
          <select
            value={filters.accountHealth}
            onChange={(e) => updateFilter('accountHealth', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="All">All</option>
            <option value="Advocate">Advocate</option>
            <option value="Engaged">Engaged</option>
            <option value="Neutral">Neutral</option>
            <option value="Skeptic">Skeptic</option>
            <option value="Churn Risk">Churn Risk</option>
          </select>
        </div>

        {/* Issue Category */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Issue Category
          </label>
          <select
            value={filters.issueCategory}
            onChange={(e) => updateFilter('issueCategory', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="All">All</option>
            <option value="API Error">API Error</option>
            <option value="Billing Inquiry">Billing Inquiry</option>
            <option value="Refund Request">Refund Request</option>
            <option value="Network Issues">Network Issues</option>
            <option value="Software Integration">Software Integration</option>
          </select>
        </div>
      </div>
    </div>
  );
}
