import * as XLSX from 'xlsx';
import type { ServiceRequest } from './types';

/**
 * Parse Excel file and convert to ServiceRequest array
 * This function can be used both server-side (Node.js) and client-side (browser)
 */
export async function parseExcelFile(filePath: string): Promise<ServiceRequest[]> {
  try {
    // Read the file
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();

    // Parse the workbook
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    // Get the first sheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convert to JSON with header row
    const rawData: any[] = XLSX.utils.sheet_to_json(worksheet, {
      raw: false,
      defval: null
    });

    // Transform the data to match our TypeScript interface
    const serviceRequests: ServiceRequest[] = rawData.map((row) => ({
      requestId: row['Request ID'] || '',
      accountName: row['Account Name'] || '',
      vertical: row['Vertical'] || 'Restaurant',
      siteCount: parseInt(row['Site Count']) || 0,
      issueCategory: row['Issue Category'] || 'API Error',
      requestDate: row['Request Date'] || '',
      status: row['Status'] || 'In Progress',
      urgency: row['Urgency'] || 'Low',
      priority: row['Priority'] || 'Low',
      timeToRespond: parseFloat(row['Time to Respond (Hours)']) || 0,
      timeToResolution: row['Time to Resolution (Hours)']
        ? parseFloat(row['Time to Resolution (Hours)'])
        : null,
      resolutionDate: row['Resolution Date'] || null,
      accountHealth: row['Account Health'] || 'Neutral',
    }));

    return serviceRequests;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    return [];
  }
}

/**
 * Load data from Excel file in public directory
 * This is the main function to use in the application
 */
export async function loadServiceRequests(): Promise<ServiceRequest[]> {
  const filePath = '/data/B2B_Customer_Service_Datav2__-_Data_Table.xlsx';
  return parseExcelFile(filePath);
}
