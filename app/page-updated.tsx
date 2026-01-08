'use client';

import { useState, useEffect, useMemo } from 'react';
import { Loader2 } from 'lucide-react';
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
import ThemeToggle from '@/components/ThemeToggle';
import Sidebar from '@/components/Sidebar';
import KPIDashboard from '@/components/KPIDashboard';

function DashboardContent() {
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="text-center">
          <div className="relative">
            <Loader2 className="w-16 h-16 animate-spin text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <div className="absolute inset-0 w-16 h-16 mx-auto animate-ping text-blue-400 opacity-20">
              <Loader2 className="w-16 h-16" />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium">Loading customer service data...</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Processing 10,000+ records</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Sidebar Navigation */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {currentView === 'dashboard' && 'Dashboard Overview'}
                  {currentView === 'details' && 'Request Details'}
                  {currentView === 'kpi' && 'Internal KPIs'}
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {currentView === 'dashboard' && 'Monitor and analyze customer service requests'}
                  {currentView === 'details' && 'Detailed view of all service requests'}
                  {currentView === 'kpi' && 'CS representative performance tracking'}
                </p>
              </div>
              {/* Dark mode toggle */}
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filters - only show on dashboard and details views */}
            {(currentView === 'dashboard' || currentView === 'details') && (
              <Filters
                filters={filters}
                onFilterChange={setFilters}
                onReset={handleResetFilters}
              />
            )}

            {/* Dashboard View */}
            {currentView === 'dashboard' && (
              <div className="space-y-6 animate-fadeIn">
                <MetricsCards metrics={metrics} />
                <Charts
                  statusData={statusData}
                  urgencyData={urgencyData}
                  verticalData={verticalData}
                  issueCategoryData={issueCategoryData}
                  accountHealthData={accountHealthData}
                />
              </div>
            )}

            {/* Details View */}
            {currentView === 'details' && (
              <div className="animate-fadeIn">
                <DetailsTable requests={filteredRequests} />
              </div>
            )}

            {/* KPI View */}
            {currentView === 'kpi' && (
              <KPIDashboard />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return <DashboardContent />;
}
