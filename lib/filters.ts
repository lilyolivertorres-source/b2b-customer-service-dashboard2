import type { ServiceRequest, FilterState } from './types';

/**
 * Apply filters to service requests
 */
export function applyFilters(
  requests: ServiceRequest[],
  filters: FilterState
): ServiceRequest[] {
  return requests.filter((request) => {
    // Search filter (account name or request ID)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        request.accountName.toLowerCase().includes(searchLower) ||
        request.requestId.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Status filter
    if (filters.status !== 'All' && request.status !== filters.status) {
      return false;
    }

    // Urgency filter
    if (filters.urgency !== 'All' && request.urgency !== filters.urgency) {
      return false;
    }

    // Vertical filter
    if (filters.vertical !== 'All' && request.vertical !== filters.vertical) {
      return false;
    }

    // Account Health filter
    if (filters.accountHealth !== 'All' && request.accountHealth !== filters.accountHealth) {
      return false;
    }

    // Issue Category filter
    if (filters.issueCategory !== 'All' && request.issueCategory !== filters.issueCategory) {
      return false;
    }

    return true;
  });
}

/**
 * Get initial filter state
 */
export function getInitialFilters(): FilterState {
  return {
    search: '',
    status: 'All',
    urgency: 'All',
    vertical: 'All',
    accountHealth: 'All',
    issueCategory: 'All',
  };
}
