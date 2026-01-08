// Core data types
export type Status = 'Resolved' | 'In Progress';
export type Urgency = 'High' | 'Medium' | 'Low';
export type Priority = 'High' | 'Medium' | 'Low';
export type Vertical = 'Restaurant' | 'Fuel' | 'Grocery';
export type IssueCategory =
  | 'API Error'
  | 'Billing Inquiry'
  | 'Refund Request'
  | 'Network Issues'
  | 'Software Integration';
export type AccountHealth =
  | 'Advocate'
  | 'Engaged'
  | 'Neutral'
  | 'Skeptic'
  | 'Churn Risk';

// Main service request interface
export interface ServiceRequest {
  requestId: string;
  accountName: string;
  vertical: Vertical;
  siteCount: number;
  issueCategory: IssueCategory;
  requestDate: string;
  status: Status;
  urgency: Urgency;
  priority: Priority;
  timeToRespond: number;
  timeToResolution: number | null;
  resolutionDate: string | null;
  accountHealth: AccountHealth;
}

// Dashboard metrics interface
export interface DashboardMetrics {
  totalRequests: number;
  resolvedRequests: number;
  inProgressRequests: number;
  highUrgencyRequests: number;
  averageResponseTime: number;
  averageResolutionTime: number;
}

// Chart data interfaces
export interface PieChartData {
  name: string;
  value: number;
  fill: string;
  [key: string]: string | number;
}

export interface BarChartData {
  name: string;
  count: number;
  fill: string;
  [key: string]: string | number;
}

// Filter state interface
export interface FilterState {
  search: string;
  status: 'All' | Status;
  urgency: 'All' | Urgency;
  vertical: 'All' | Vertical;
  accountHealth: 'All' | AccountHealth;
  issueCategory: 'All' | IssueCategory;
}

// View type
export type ViewType = 'dashboard' | 'details';

// Sort configuration
export interface SortConfig {
  key: keyof ServiceRequest | null;
  direction: 'asc' | 'desc';
}
// Add 'kpi' to your existing ViewType
export type ViewType = 'dashboard' | 'details' | 'kpi';

// If your ServiceRequest type doesn't already include csRepName, add it:
export interface ServiceRequest {
  requestId: string;
  accountName: string;
  vertical: string;
  siteCount: number;
  issueCategory: string;
  requestDate: string;
  status: string;
  urgency: string;
  priority: string;
  timeToRespond: number;
  timeToResolution: number;
  resolutionDate: string;
  accountHealth: string;
  csRepName: string; // Add this line if it doesn't exist
}

// Add this interface for KPI metrics (if it doesn't exist)
export interface RepKPIMetrics {
  name: string;
  totalCases: number;
  resolvedCases: number;
  avgResponseTime: number;
  avgResolutionTime: number;
  resolutionRate: number;
}
