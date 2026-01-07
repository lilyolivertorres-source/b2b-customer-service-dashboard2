'use client';

import { useState, useEffect, useMemo } from 'react';
import { LayoutDashboard, Table2, Loader2 } from 'lucide-react';
import type { ServiceRequest, FilterState, ViewType } from '@/lib/types';
import { loadServiceRequests } from '@/lib/dataLoader';
import { applyFilters, getInitialFilters } from '@/lib/filters';
import {
  calculateMetrics,
  getStatusDistribution,
  getUrgencyBreakdown,
  getRequestsByVertical,
  getIssueCategoriesDistribution,
  getAccountHealthDistribution,
} from '@/lib/metrics';
import MetricsCards from '@/components/MetricsCards';
import Charts from '@/components/Charts';
import DetailsTable from '@/components/DetailsTable';
import Filters from '@/components/Filters';

export default function Home() {
  const [allRequests, setAllRequests] = useState<ServiceRequest[]>([]);
  const [filters, setFilters] = useState<FilterState>(getInitialFilters());
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await loadServiceRequests();
        setAllRequests(data);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Apply filters to get filtered requests
  const filteredRequests = useMemo(() => {
    return applyFilters(allRequests, filters);
  }, [allRequests, filters]);

  // Calculate metrics and chart data based on filtered requests
  const metrics = useMemo(() => calculateMetrics(filteredRequests), [filteredRequests]);
  const statusData = useMemo(() => getStatusDistribution(filteredRequests), [filteredRequests]);
  const urgencyData = useMemo(() => getUrgencyBreakdown(filteredRequests), [filteredRequests]);
  const verticalData = useMemo(() => getRequestsByVertical(filteredRequests), [filteredRequests]);
  const issueCategoryData = useMemo(
    () => getIssueCategoriesDistribution(filteredRequests),
    [filteredRequests]
  );
  const accountHealthData = useMemo(
    () => getAccountHealthDistribution(filteredRequests),
    [filteredRequests]
  );

  // Handle filter reset
  const handleResetFilters = () => {
    setFilters(getInitialFilters());
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading customer service data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                B2B Customer Service Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Monitor and analyze customer service requests
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentView('details')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'details'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Table2 className="w-5 h-5" />
                <span>Details</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Filters */}
          <Filters
            filters={filters}
            onFilterChange={setFilters}
            onReset={handleResetFilters}
          />

          {/* Dashboard View */}
          {currentView === 'dashboard' && (
            <>
              <MetricsCards metrics={metrics} />
              <Charts
                statusData={statusData}
                urgencyData={urgencyData}
                verticalData={verticalData}
                issueCategoryData={issueCategoryData}
                accountHealthData={accountHealthData}
              />
            </>
          )}

          {/* Details View */}
          {currentView === 'details' && (
            <DetailsTable requests={filteredRequests} />
          )}
        </div>
      </main>
    </div>
  );
}
