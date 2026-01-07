import type {
  ServiceRequest,
  DashboardMetrics,
  PieChartData,
  BarChartData,
} from './types';

/**
 * Calculate dashboard metrics from service requests
 */
export function calculateMetrics(requests: ServiceRequest[]): DashboardMetrics {
  const totalRequests = requests.length;
  const resolvedRequests = requests.filter(r => r.status === 'Resolved').length;
  const inProgressRequests = requests.filter(r => r.status === 'In Progress').length;
  const highUrgencyRequests = requests.filter(r => r.urgency === 'High').length;

  // Calculate average response time across all requests
  const totalResponseTime = requests.reduce((sum, r) => sum + r.timeToRespond, 0);
  const averageResponseTime = totalRequests > 0
    ? Math.round((totalResponseTime / totalRequests) * 10) / 10
    : 0;

  // Calculate average resolution time for resolved requests only
  const resolvedWithTime = requests.filter(r => r.timeToResolution !== null);
  const totalResolutionTime = resolvedWithTime.reduce(
    (sum, r) => sum + (r.timeToResolution || 0),
    0
  );
  const averageResolutionTime = resolvedWithTime.length > 0
    ? Math.round((totalResolutionTime / resolvedWithTime.length) * 10) / 10
    : 0;

  return {
    totalRequests,
    resolvedRequests,
    inProgressRequests,
    highUrgencyRequests,
    averageResponseTime,
    averageResolutionTime,
  };
}

/**
 * Get status distribution data for pie chart
 */
export function getStatusDistribution(requests: ServiceRequest[]): PieChartData[] {
  const resolved = requests.filter(r => r.status === 'Resolved').length;
  const inProgress = requests.filter(r => r.status === 'In Progress').length;

  return [
    { name: 'Resolved', value: resolved, fill: '#10b981' },
    { name: 'In Progress', value: inProgress, fill: '#f59e0b' },
  ];
}

/**
 * Get urgency breakdown data for bar chart
 */
export function getUrgencyBreakdown(requests: ServiceRequest[]): BarChartData[] {
  const urgencyCounts = {
    High: requests.filter(r => r.urgency === 'High').length,
    Medium: requests.filter(r => r.urgency === 'Medium').length,
    Low: requests.filter(r => r.urgency === 'Low').length,
  };

  return [
    { name: 'High', count: urgencyCounts.High, fill: '#ef4444' },
    { name: 'Medium', count: urgencyCounts.Medium, fill: '#f59e0b' },
    { name: 'Low', count: urgencyCounts.Low, fill: '#10b981' },
  ];
}

/**
 * Get requests by vertical for bar chart
 */
export function getRequestsByVertical(requests: ServiceRequest[]): BarChartData[] {
  const verticalCounts = {
    Restaurant: requests.filter(r => r.vertical === 'Restaurant').length,
    Fuel: requests.filter(r => r.vertical === 'Fuel').length,
    Grocery: requests.filter(r => r.vertical === 'Grocery').length,
  };

  return [
    { name: 'Restaurant', count: verticalCounts.Restaurant, fill: '#3b82f6' },
    { name: 'Fuel', count: verticalCounts.Fuel, fill: '#8b5cf6' },
    { name: 'Grocery', count: verticalCounts.Grocery, fill: '#ec4899' },
  ];
}

/**
 * Get issue categories distribution for horizontal bar chart
 */
export function getIssueCategoriesDistribution(requests: ServiceRequest[]): BarChartData[] {
  const categoryCounts = {
    'API Error': requests.filter(r => r.issueCategory === 'API Error').length,
    'Billing Inquiry': requests.filter(r => r.issueCategory === 'Billing Inquiry').length,
    'Refund Request': requests.filter(r => r.issueCategory === 'Refund Request').length,
    'Network Issues': requests.filter(r => r.issueCategory === 'Network Issues').length,
    'Software Integration': requests.filter(r => r.issueCategory === 'Software Integration').length,
  };

  return [
    { name: 'API Error', count: categoryCounts['API Error'], fill: '#3b82f6' },
    { name: 'Billing Inquiry', count: categoryCounts['Billing Inquiry'], fill: '#10b981' },
    { name: 'Refund Request', count: categoryCounts['Refund Request'], fill: '#f59e0b' },
    { name: 'Network Issues', count: categoryCounts['Network Issues'], fill: '#ef4444' },
    { name: 'Software Integration', count: categoryCounts['Software Integration'], fill: '#8b5cf6' },
  ];
}

/**
 * Get account health distribution for bar chart
 */
export function getAccountHealthDistribution(requests: ServiceRequest[]): BarChartData[] {
  const healthCounts = {
    'Advocate': requests.filter(r => r.accountHealth === 'Advocate').length,
    'Engaged': requests.filter(r => r.accountHealth === 'Engaged').length,
    'Neutral': requests.filter(r => r.accountHealth === 'Neutral').length,
    'Skeptic': requests.filter(r => r.accountHealth === 'Skeptic').length,
    'Churn Risk': requests.filter(r => r.accountHealth === 'Churn Risk').length,
  };

  return [
    { name: 'Advocate', count: healthCounts['Advocate'], fill: '#10b981' },
    { name: 'Engaged', count: healthCounts['Engaged'], fill: '#3b82f6' },
    { name: 'Neutral', count: healthCounts['Neutral'], fill: '#6b7280' },
    { name: 'Skeptic', count: healthCounts['Skeptic'], fill: '#f59e0b' },
    { name: 'Churn Risk', count: healthCounts['Churn Risk'], fill: '#ef4444' },
  ];
}
