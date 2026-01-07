# Quick Start Guide

Get up and running with the B2B Customer Service Dashboard in 5 minutes!

## 1. Installation (1 minute)

```bash
cd b2b-customer-service
npm install
```

## 2. Add Data (30 seconds)

### Option A: Use Your Excel File
Place your file here: `public/data/B2B_Customer_Service_Datav2__-_Data_Table.xlsx`

### Option B: Generate Sample Data
```bash
npm run generate-data
```

This creates 10,000 sample records for testing.

## 3. Start Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 4. Explore the Dashboard (2 minutes)

### Dashboard View
- View 6 key metrics at the top
- Explore 5 interactive charts
- All data updates based on filters

### Details View
- Click the "Details" button in the header
- Sort by clicking column headers
- Navigate with pagination

### Filters
- Use the search bar for accounts or request IDs
- Apply dropdown filters for status, urgency, vertical, etc.
- Click "Reset All" to clear filters

## Key Features at a Glance

| Feature | How to Use |
|---------|------------|
| **Switch Views** | Click "Dashboard" or "Details" buttons in header |
| **Filter Data** | Use filter dropdowns or search bar |
| **Sort Table** | Click any column header in Details view |
| **Reset Filters** | Click "Reset All" button (when filters active) |
| **Navigate Pages** | Use "Previous" and "Next" buttons |
| **View Charts** | Hover over chart elements for details |

## File Structure

```
public/data/          → Your Excel file goes here
app/page.tsx          → Main application code
components/           → UI components
lib/                  → Data processing logic
```

## Common Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm start            # Run production build

# Utilities
npm run generate-data # Create sample data
npm run lint         # Check code quality
```

## Excel File Requirements

Your Excel file must have these columns:
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

## Deployment (5 minutes)

### Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your app is live.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Need Help?

- 📖 **Full Documentation**: [README.md](README.md)
- 🚀 **Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- 📱 **User Guide**: [USAGE.md](USAGE.md)
- 📋 **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## Troubleshooting

**No data showing?**
- Check that Excel file exists in `public/data/`
- Run `npm run generate-data` to create sample data

**Build errors?**
```bash
npm install           # Reinstall dependencies
npm run build        # Try building
```

**Server won't start?**
- Port 3000 might be in use
- Check terminal for error messages
- Try `npx next dev -p 3001` to use different port

## What's Included

✅ Dashboard with 6 metrics cards
✅ 5 interactive charts
✅ Sortable table with 10,000 records
✅ Advanced filtering system
✅ Pagination (50 per page)
✅ Fully responsive design
✅ Sample data generator

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **xlsx** - Excel parsing

---

**You're ready to go!** 🎉

Start exploring your customer service data with powerful analytics and visualizations.
