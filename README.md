# B2B Customer Service Dashboard

A modern, interactive Next.js application for monitoring and analyzing B2B customer service requests with real-time data visualization, filtering, and comprehensive dashboards.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

### Dashboard View
- **Key Metrics Cards**: Display total requests, resolved count, in-progress count, high urgency requests, average response time, and average resolution time
- **Interactive Charts**:
  - Status distribution (pie chart)
  - Urgency levels breakdown (bar chart)
  - Requests by vertical (bar chart)
  - Issue categories distribution (horizontal bar chart)
  - Account health distribution (bar chart)

### Details View
- **Sortable Table**: Click column headers to sort by any field
- **Color-Coded Badges**: Visual indicators for status, urgency, and account health
- **Pagination**: Efficiently browse through 10,000+ records (50 per page)

### Advanced Filtering
- Search by account name or request ID
- Filter by status (Resolved/In Progress)
- Filter by urgency level (High/Medium/Low)
- Filter by vertical (Restaurant/Fuel/Grocery)
- Filter by account health (Advocate/Engaged/Neutral/Skeptic/Churn Risk)
- Filter by issue category (API Error/Billing Inquiry/Refund Request/Network Issues/Software Integration)
- All filters update metrics and charts in real-time

### Responsive Design
- Optimized for desktop, tablet, and mobile devices
- Modern, clean interface with smooth transitions
- Accessible and user-friendly

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: lucide-react
- **Data Processing**: xlsx (SheetJS)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd b2b-customer-service
```

2. Install dependencies:
```bash
npm install
```

3. Generate sample data (optional):
```bash
npm run generate-data
```

This creates a sample Excel file with 10,000 customer service records in `public/data/`.

### Using Your Own Data

To use your own Excel file:

1. Place your Excel file in the `public/data/` directory
2. Name it `B2B_Customer_Service_Datav2__-_Data_Table.xlsx`
3. Ensure your Excel file has the following columns:
   - Request ID
   - Account Name
   - Vertical
   - Site Count
   - Issue Category
   - Request Date
   - Status
   - Urgency
   - Priority
   - Time to Respond (Hours)
   - Time to Resolution (Hours)
   - Resolution Date
   - Account Health

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
b2b-customer-service/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Charts.tsx         # Chart components using Recharts
│   ├── DetailsTable.tsx   # Sortable table with pagination
│   ├── Filters.tsx        # Filter controls
│   └── MetricsCards.tsx   # Dashboard metrics cards
├── lib/
│   ├── types.ts           # TypeScript type definitions
│   ├── dataLoader.ts      # Excel file parsing logic
│   ├── filters.ts         # Filtering utilities
│   └── metrics.ts         # Metrics calculation functions
├── public/
│   └── data/              # Excel data files
├── scripts/
│   └── generateSampleData.js  # Sample data generator
└── package.json
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy this application is using [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Platforms

This Next.js application can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## Performance Optimizations

- **Client-side rendering** with React hooks for optimal interactivity
- **useMemo** hooks to prevent unnecessary recalculations
- **Pagination** for efficient rendering of large datasets
- **Code splitting** and lazy loading via Next.js
- **Optimized images** using Next.js Image component
- **Production build** includes minification and tree-shaking

## Data Format

The application expects Excel files with the following structure:

| Column Name | Type | Example |
|------------|------|---------|
| Request ID | String | REG-00001 |
| Account Name | String | Acme Corp |
| Vertical | String | Restaurant |
| Site Count | Number | 25 |
| Issue Category | String | API Error |
| Request Date | Date | 01/15/2024 |
| Status | String | Resolved |
| Urgency | String | High |
| Priority | String | High |
| Time to Respond (Hours) | Number | 2.5 |
| Time to Resolution (Hours) | Number | 24.0 |
| Resolution Date | Date | 01/16/2024 |
| Account Health | String | Advocate |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-data` - Generate sample Excel data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and React
