# Technical Documentation

## Architecture Overview

The Mutual Funds Investment Platform is built with a modern React + Vite architecture using Context API for state management and React Router for navigation.

### Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.0
- **Routing**: React Router DOM 6.20.0
- **State Management**: React Context API
- **Charts**: Chart.js 4.4.0 + React ChartJS 2
- **Icons**: Lucide React 0.292.0
- **Styling**: CSS3 with responsive design
- **Package Manager**: npm
- **Linter**: ESLint 9.39.3

### Directory Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Main navigation bar
│   ├── ProtectedRoute.jsx      # Route protection wrapper
│   ├── FundCard.jsx            # Reusable fund card component
│   └── FundDetailsModal.jsx    # Fund details popup modal
├── context/
│   └── AuthContext.jsx         # Authentication & authorization context
├── pages/
│   ├── Login.jsx               # Login/authentication page
│   ├── Dashboard.jsx           # Dashboard router
│   ├── FundsPage.jsx          # Mutual funds browser
│   └── roles/
│       ├── AdminDashboard.jsx      # Admin-specific dashboard
│       ├── InvestorDashboard.jsx   # Investor portfolio dashboard
│       ├── AdvisorDashboard.jsx    # Advisor content dashboard
│       └── AnalystDashboard.jsx    # Analyst analytics dashboard
├── mock/
│   └── fundData.js            # Mock data for development
├── utils/
│   └── helpers.js             # Utility functions
├── styles/
│   ├── global.css             # Global styles
│   ├── auth.css               # Authentication styles
│   ├── navigation.css         # Navigation styles
│   ├── fundCard.css           # Fund card styles
│   ├── fundDetails.css        # Modal styles
│   └── roleDashboards.css     # Dashboard styles
├── App.jsx                    # Root component
├── App.css                    # Main app styles
├── index.css                  # Global CSS resets
└── main.jsx                   # Entry point
```

## Component Architecture

### Authentication Flow

```
Login.jsx
  ↓
AuthContext.jsx (User state maintained)
  ↓
ProtectedRoute.jsx (Role-based access)
  ↓
Navigation.jsx (Role-specific menu)
  ↓
Dashboard.jsx → Role-specific Dashboard
```

### Component Hierarchy

```
App
├── Routes
│   ├── Login
│   ├── Dashboard
│   │   ├── Navigation
│   │   ├── AdminDashboard
│   │   ├── InvestorDashboard
│   │   ├── AdvisorDashboard
│   │   └── AnalystDashboard
│   └── FundsPage
│       ├── Navigation
│       ├── FundCard (Grid)
│       └── FundDetailsModal
```

## State Management

### AuthContext

Object structure:
```javascript
{
  user: {
    id: string,
    email: string,
    role: 'admin' | 'investor' | 'advisor' | 'analyst',
    name: string,
    loginTime: Date
  },
  isAuthenticated: boolean,
  login: (email, password, role) => boolean,
  logout: () => void,
  roles: {
    ADMIN: 'admin',
    INVESTOR: 'investor',
    ADVISOR: 'advisor',
    ANALYST: 'analyst'
  }
}
```

### Local Storage

```javascript
// Stored after login
localStorage.user = JSON.stringify({
  id, email, role, name, loginTime
})
```

## Data Structure

### Mutual Fund Object
```javascript
{
  id: string,
  name: string,
  category: 'Equity' | 'Debt' | 'Balanced',
  minInvestment: number,
  currentPrice: number,
  riskRating: 'Low' | 'Medium' | 'High' | 'Very High',
  returnYearly: number,
  returnThreeYear: number,
  returnFiveYear: number,
  aum: number,
  expenseRatio: number,
  fundManager: string,
  navDate: string,
  description: string,
  holdings: string[],
  riskFactors: string[],
  benchmark: string
}
```

### Portfolio Holding Object
```javascript
{
  fundId: string,
  fundName: string,
  units: number,
  purchasePrice: number,
  currentPrice: number,
  investmentValue: number,
  currentValue: number,
  gain: number,
  gainPercentage: number,
  purchaseDate: string
}
```

## Utility Functions

### `helpers.js` Functions

- `formatCurrency(value)` - Format numbers as currency
- `formatPercentage(value)` - Format numbers as percentages
- `formatLargeNumber(value)` - Format large numbers (B, M notation)
- `calculateRiskColor(riskRating)` - Get color for risk level
- `calculateGainColor(gain)` - Get color for gain/loss
- `filterFundsByCategory(funds, category)` - Filter funds
- `filterFundsByRisk(funds, riskLevel)` - Filter by risk
- `sortFunds(funds, sortBy)` - Sort fund list
- `calculatePortfolioMetrics(portfolio)` - Calculate portfolio stats
- `generateChartData(funds, metric)` - Generate chart data

## Routing Structure

```
/              → Redirect to /login
/login         → Login page (public)
/dashboard     → Role-specific dashboard (protected)
/funds         → Funds browser (protected)
/*             → Redirect to /login (404)
```

## Authentication & Authorization

### Protected Routes
- All routes except `/login` require authentication
- Role-based access checked in ProtectedRoute component
- User redirected to login if not authenticated

### Role-Based Access
- **Admin**: Access all pages, user management
- **Investor**: Portfolio and funds pages
- **Advisor**: Content creation and client management
- **Analyst**: Analytics and reports pages

### Demo Accounts
```
admin@mf.com / admin123
investor@mf.com / inv123
advisor@mf.com / adv123
analyst@mf.com / ana123
```

## Responsive Design Strategy

### Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 1024px
- **Desktop**: 1025px+

### CSS Media Queries
```css
@media (max-width: 768px) { }
@media (max-width: 1024px) { }
```

### Features by Screen Size
- Mobile: Single column, collapsed menu
- Tablet: 2-column grids, expandable menu
- Desktop: Multi-column grids, horizontal menu

## Performance Considerations

1. **Code Splitting**: React Router enables lazy loading
2. **Optimization**: Mock data loaded once at startup
3. **Chart Rendering**: Chart.js optimized for performance
4. **CSS Modules**: Scoped styling prevents conflicts
5. **Bundle Size**: ~450KB gzipped (estimated)

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Development Workflow

### File Organization
1. Components in `components/` folder
2. Pages in `pages/` folder with role subfolders
3. Styles in `styles/` folder by feature
4. Mock data in `mock/` folder
5. Utilities in `utils/` folder

### Naming Conventions
- Components: PascalCase (e.g., `FundCard.jsx`)
- CSS files: kebab-case (e.g., `fund-card.css`)
- Functions: camelCase (e.g., `formatCurrency`)
- Constants: UPPER_SNAKE_CASE (e.g., `BASE_URL`)

### Code Style
- Use functional components and hooks
- Proper prop validation
- Comments for complex logic
- Consistent indentation (2 spaces)

## Future Integration Points

### Backend API Integration
- Replace mock data with API calls
- User authentication with JWT
- Real-time fund data
- Order processing

### Required API Endpoints
```
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/funds
GET    /api/funds/:id
POST   /api/portfolio/invest
GET    /api/portfolio/holdings
GET    /api/users/activities
POST   /api/content/create
GET    /api/analytics/trends
```

## Deployment

### Build Command
```bash
npm run build
```

### Output
- Optimized bundle in `dist/` folder
- All assets minified and tree-shaken
- Ready for production deployment

### Deployment Platforms
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Docker containerization

## Monitoring & Logging

### Development
- Browser DevTools for debugging
- Console logging for development
- React DevTools for component inspection

### Production
- Error tracking (Sentry recommended)
- Performance monitoring (Google Analytics)
- User activity logging

## Security Best Practices

1. **Input Validation**: Validate all user inputs
2. **XSS Prevention**: React escapes content by default
3. **CSRF Protection**: Implement when added backend
4. **Secure Headers**: Configure in server
5. **HTTPS**: Use SSL/TLS in production

## Testing Strategy (To be implemented)

### Unit Tests
- Test utility functions
- Component snapshot tests
- Reducer tests

### Integration Tests
- Test user flows
- Route navigation
- Authentication

### E2E Tests
- Playwright or Cypress
- Full user journeys
- Cross-browser testing

## Performance Metrics

### Target Metrics
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Interaction to Next Paint (INP): < 200ms

## Version Control

### Git Workflow
```
main (production)
├── develop (staging)
│   ├── feature/feature-name
│   ├── bugfix/bug-name
│   └── ...
```

## Documentation

- Code comments for complex logic
- JSDoc for functions
- README for setup
- QUICK_START for users
- This file for technical details

---

**Last Updated**: February 24, 2024
**Version**: 1.0.0
