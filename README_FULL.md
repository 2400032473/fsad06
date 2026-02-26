# Mutual Fund Investment Platform

A professional web application for exploring, comparing, and managing mutual fund investments with role-based access control.

## 🎯 Project Overview

This platform provides a comprehensive solution for mutual fund investment management with distinct roles and permissions:

### User Roles

1. **Admin** - Platform oversight and management
   - User activity monitoring
   - Fund management
   - Platform statistics
   - Content oversight

2. **Investor** - Personal investment management
   - View and explore mutual funds
   - Manage personal portfolio
   - Track investments and gains
   - Receive recommendations

3. **Financial Advisor** - Content creation and client management
   - Create educational content
   - Manage client portfolios
   - Provide investment guidance
   - Build educational resources

4. **Data Analyst** - Market analysis and reporting
   - Analyze investment trends
   - Generate performance reports
   - Market analytics
   - Data-driven insights

## 🏗️ Project Structure

```
project6/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── FundCard.jsx
│   │   └── FundDetailsModal.jsx
│   ├── context/            # React Context for state management
│   │   └── AuthContext.jsx
│   ├── pages/              # Page components
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FundsPage.jsx
│   │   └── roles/          # Role-specific dashboards
│   │       ├── AdminDashboard.jsx
│   │       ├── InvestorDashboard.jsx
│   │       ├── AdvisorDashboard.jsx
│   │       └── AnalystDashboard.jsx
│   ├── mock/              # Mock data
│   │   └── fundData.js
│   ├── utils/             # Helper functions
│   │   └── helpers.js
│   ├── styles/            # CSS files
│   │   ├── global.css
│   │   ├── auth.css
│   │   ├── navigation.css
│   │   ├── fundCard.css
│   │   ├── fundDetails.css
│   │   └── roleDashboards.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── vite.config.js
├── package.json
├── eslint.config.js
├── index.html
└── README.md
```

## 📦 Dependencies

- **React 19.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Chart.js 4.4.0** - Data visualization
- **React ChartJS 2** - React wrapper for Chart.js
- **Lucide React 0.292.0** - Icon library
- **Vite 8.0** - Build tool

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm lint
```

## 🔐 Authentication

The platform includes a mock authentication system with demo accounts:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@mf.com | admin123 |
| Investor | investor@mf.com | inv123 |
| Advisor | advisor@mf.com | adv123 |
| Analyst | analyst@mf.com | ana123 |

## 💡 Key Features

### 1. Comprehensive Mutual Fund Database
- 6 sample mutual funds with detailed information
- Multiple fund categories (Equity, Debt, Balanced)
- Risk ratings and performance metrics
- Fund manager information
- Portfolio holdings breakdown

### 2. Advanced Fund Filtering
- Filter by category (Equity, Debt, Balanced)
- Filter by risk level (Low, Medium, High, Very High)
- Sort by performance, expense ratio, AUM, or name
- Detailed fund information modal

### 3. Role-Based Dashboards

#### Admin Dashboard
- Platform overview and statistics
- User activity monitoring
- Fund management interface
- System status tracking

#### Investor Dashboard
- Portfolio overview with metrics
- Holdings details and performance tracking
- Investment recommendations
- Gain/loss calculations

#### Advisor Dashboard
- Client management
- Educational content creation and publication
- Client consultation tracking
- Rating and metrics

#### Analyst Dashboard
- Market trend visualization
- Fund performance comparison
- Report generation and download
- Investment analytics

### 4. Data Visualization
- Line charts for market trends
- Bar charts for fund performance
- Portfolio allocation visualization
- Progress bars and metrics

### 5. Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Mobile menu navigation
- Optimized for all screen sizes

## 🛠️ Core Components

### Authentication (AuthContext.jsx)
- User login/logout
- Role-based access control
- User state management
- localStorage persistence

### Navigation (Navigation.jsx)
- Dynamic menu based on user role
- Active route highlighting
- Mobile responsive menu
- User profile display

### Fund Management
- **FundCard.jsx** - Reusable fund display component
- **FundDetailsModal.jsx** - Detailed fund information modal
- **FundsPage.jsx** - Main funds browser with filtering

### Utilities (helpers.js)
- Currency formatting
- Percentage calculations
- Risk color mapping
- Portfolio metrics calculation
- Data filtering and sorting functions

## 📊 Sample Data

### Mutual Funds
The platform includes 6 sample mutual funds:
1. Growth Opportunity Fund (High Return, High Risk)
2. Balanced Portfolio Fund (Moderate Return, Medium Risk)
3. Debt Security Fund (Low Risk)
4. Technology Innovation Fund (Very High Risk, High Return)
5. Dividend Income Fund (Steady Returns)
6. Small Cap Emerging Fund (Very High Growth Potential)

### Mock Portfolio
Sample investor portfolio with:
- 3 invested funds
- Purchase and current prices
- Gains/losses calculations
- Performance metrics

### Market Trends
6-month trend data for:
- Equity fund investments
- Debt fund investments
- Balanced fund investments

## 🎨 Design System

### Color Palette
- **Primary**: #3B82F6 (Blue)
- **Success**: #10B981 (Green)
- **Warning**: #F59E0B (Amber)
- **Danger**: #EF4444 (Red)
- **Background**: #f5f7fa (Light Gray)

### Typography
- **Font Family**: System UI fonts
- **Headings**: Bold, large sizes
- **Body**: Regular weight, medium size

### Spacing
- 20px for page padding
- 16px for container padding
- 12px for component spacing

## 🔄 User Flows

### Admin Flow
1. Login with admin credentials
2. View platform overview
3. Monitor user activities
4. Manage funds list
5. Access system status

### Investor Flow
1. Login with investor credentials
2. View investment dashboard
3. Explore mutual funds catalogue
4. View portfolio holdings
5. Check recommendations

### Advisor Flow
1. Login with advisor credentials
2. Access client management
3. Create educational content
4. View published content
5. Manage client consultations

### Analyst Flow
1. Login with analyst credentials
2. View market trends
3. Analyze fund performance
4. Generate reports
5. Download analysis data

## 🔍 Features Details

### Fund Comparison
- Side-by-side fund metrics
- Performance comparison
- Risk assessment
- Expense ratio analysis

### Portfolio Tracking
- Real-time portfolio value
- Gain/loss calculations
- Performance by fund
- Allocation percentages

### Educational Content
- Create and publish content
- Organize by categories
- Author attribution
- Content management

### Analytics Dashboard
- Investment trends over time
- Fund performance metrics
- Market analysis
- Report generation

## 🎯 Performance Optimization

- Lazy loading of components
- Efficient state management with Context API
- Responsive CSS with media queries
- Optimized chart rendering
- Mock data for fast loading

## 🛡️ Security Features

- React Router protected routes
- Role-based access control
- User session management
- Input validation

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Production Ready
- Minified assets
- Optimized bundle size
- CSS and JS combining
- Image optimization ready

## 📝 Future Enhancements

1. Backend integration
2. Real-time fund data
3. User authentication with JWT
4. Payment gateway integration
5. Email notifications
6. Advanced analytics
7. Video tutorials
8. Live chat support
9. Mobile app (React Native)
10. PWA support

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Team

Built with React, Vite, and modern web technologies for a professional mutual fund investment platform.

---

**Version**: 1.0.0  
**Last Updated**: February 24, 2024
