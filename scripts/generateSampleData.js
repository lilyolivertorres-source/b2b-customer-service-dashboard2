const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Sample data arrays
const verticals = ['Restaurant', 'Fuel', 'Grocery'];
const issueCategories = [
  'API Error',
  'Billing Inquiry',
  'Refund Request',
  'Network Issues',
  'Software Integration',
];
const statuses = ['Resolved', 'In Progress'];
const urgencies = ['High', 'Medium', 'Low'];
const priorities = ['High', 'Medium', 'Low'];
const accountHealthStates = ['Advocate', 'Engaged', 'Neutral', 'Skeptic', 'Churn Risk'];

// Generate random account names
const accountPrefixes = [
  'Acme',
  'Global',
  'Prime',
  'Summit',
  'Stellar',
  'Pacific',
  'Metro',
  'Urban',
  'Coastal',
  'Regional',
];
const accountSuffixes = [
  'Corp',
  'Industries',
  'Solutions',
  'Enterprises',
  'Group',
  'Services',
  'Systems',
  'Partners',
  'Holdings',
  'Network',
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}

function generateServiceRequests(count) {
  const requests = [];
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2024, 11, 31);

  for (let i = 1; i <= count; i++) {
    const requestId = `REG-${String(i).padStart(5, '0')}`;
    const accountName = `${getRandomItem(accountPrefixes)} ${getRandomItem(
      accountSuffixes
    )}`;
    const vertical = getRandomItem(verticals);
    const siteCount = getRandomNumber(1, 500);
    const issueCategory = getRandomItem(issueCategories);
    const requestDate = getRandomDate(startDate, endDate);
    const status = getRandomItem(statuses);
    const urgency = getRandomItem(urgencies);
    const priority = getRandomItem(priorities);
    const timeToRespond = getRandomNumber(1, 48);
    const accountHealth = getRandomItem(accountHealthStates);

    // Only resolved requests have resolution time and date
    let timeToResolution = null;
    let resolutionDate = null;
    if (status === 'Resolved') {
      timeToResolution = getRandomNumber(timeToRespond + 1, 168);
      const reqDate = new Date(requestDate);
      const resDate = new Date(reqDate);
      resDate.setHours(resDate.getHours() + timeToResolution);
      resolutionDate = resDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
    }

    requests.push({
      'Request ID': requestId,
      'Account Name': accountName,
      Vertical: vertical,
      'Site Count': siteCount,
      'Issue Category': issueCategory,
      'Request Date': requestDate,
      Status: status,
      Urgency: urgency,
      Priority: priority,
      'Time to Respond (Hours)': timeToRespond,
      'Time to Resolution (Hours)': timeToResolution,
      'Resolution Date': resolutionDate,
      'Account Health': accountHealth,
    });
  }

  return requests;
}

// Generate 10,000 records
console.log('Generating 10,000 sample service requests...');
const data = generateServiceRequests(10000);

// Create workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(data);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(wb, ws, 'Data Table');

// Ensure the public/data directory exists
const publicDataDir = path.join(__dirname, '..', 'public', 'data');
if (!fs.existsSync(publicDataDir)) {
  fs.mkdirSync(publicDataDir, { recursive: true });
}

// Write to file
const outputPath = path.join(
  publicDataDir,
  'B2B_Customer_Service_Datav2__-_Data_Table.xlsx'
);
XLSX.writeFile(wb, outputPath);

console.log(`✅ Sample data generated successfully!`);
console.log(`📁 File saved to: ${outputPath}`);
console.log(`📊 Total records: ${data.length.toLocaleString()}`);
