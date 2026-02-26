// Comprehensive Mutual Fund Mock Data
export const mutualFunds = [
  {
    id: 'MF001',
    name: 'Growth Opportunity Fund',
    category: 'Equity',
    minInvestment: 500,
    currentPrice: 145.50,
    riskRating: 'High',
    returnYearly: 15.8,
    returnThreeYear: 12.5,
    returnFiveYear: 10.2,
    aum: 5000000000,
    expenseRatio: 1.2,
    fundManager: 'John Smith',
    navDate: '2024-02-24',
    description: 'An equity fund focused on large-cap growth stocks with high growth potential.',
    holdings: ['TECH: 35%', 'Finance: 25%', 'Healthcare: 20%', 'Others: 20%'],
    riskFactors: ['Market volatility', 'Economic downturn', 'Interest rate changes'],
    benchmark: 'Nifty 500'
  },
  {
    id: 'MF002',
    name: 'Balanced Portfolio Fund',
    category: 'Balanced',
    minInvestment: 1000,
    currentPrice: 210.75,
    riskRating: 'Medium',
    returnYearly: 9.5,
    returnThreeYear: 8.2,
    returnFiveYear: 7.8,
    aum: 8500000000,
    expenseRatio: 0.85,
    fundManager: 'Sarah Johnson',
    navDate: '2024-02-24',
    description: 'A balanced mix of equities and fixed income securities for moderate growth.',
    holdings: ['Equities: 60%', 'Bonds: 35%', 'Cash: 5%'],
    riskFactors: ['Market volatility', 'Interest rate risk'],
    benchmark: 'Balanced Index'
  },
  {
    id: 'MF003',
    name: 'Debt Security Fund',
    category: 'Debt',
    minInvestment: 5000,
    currentPrice: 98.25,
    riskRating: 'Low',
    returnYearly: 5.5,
    returnThreeYear: 5.2,
    returnFiveYear: 5.0,
    aum: 12000000000,
    expenseRatio: 0.45,
    fundManager: 'Mike Chen',
    navDate: '2024-02-24',
    description: 'Fixed income fund providing stable returns with low risk.',
    holdings: ['Government Securities: 50%', 'Corporate Bonds: 35%', 'Cash: 15%'],
    riskFactors: ['Interest rate risk', 'Credit risk'],
    benchmark: 'Bond Index'
  },
  {
    id: 'MF004',
    name: 'Technology Innovation Fund',
    category: 'Equity',
    minInvestment: 1000,
    currentPrice: 320.40,
    riskRating: 'Very High',
    returnYearly: 22.3,
    returnThreeYear: 18.5,
    returnFiveYear: 14.2,
    aum: 3200000000,
    expenseRatio: 1.5,
    fundManager: 'Emma Davis',
    navDate: '2024-02-24',
    description: 'Focused on emerging technology and IT sector companies.',
    holdings: ['Software: 40%', 'Hardware: 25%', 'IT Services: 20%', 'Semiconductor: 15%'],
    riskFactors: ['Tech cycle volatility', 'Regulatory changes', 'Market sentiment'],
    benchmark: 'Tech Index'
  },
  {
    id: 'MF005',
    name: 'Dividend Income Fund',
    category: 'Equity',
    minInvestment: 2000,
    currentPrice: 155.80,
    riskRating: 'Medium',
    returnYearly: 7.2,
    returnThreeYear: 7.8,
    returnFiveYear: 8.0,
    aum: 6800000000,
    expenseRatio: 0.95,
    fundManager: 'Robert Wilson',
    navDate: '2024-02-24',
    description: 'Income-focused fund investing in high dividend-paying stocks.',
    holdings: ['Banking: 30%', 'FMCG: 25%', 'Utilities: 20%', 'Others: 25%'],
    riskFactors: ['Dividend cut risk', 'Market volatility'],
    benchmark: 'Dividend Aristocrats'
  },
  {
    id: 'MF006',
    name: 'Small Cap Emerging Fund',
    category: 'Equity',
    minInvestment: 1500,
    currentPrice: 275.20,
    riskRating: 'Very High',
    returnYearly: 28.5,
    returnThreeYear: 15.8,
    returnFiveYear: 12.5,
    aum: 2100000000,
    expenseRatio: 1.8,
    fundManager: 'Lisa Anderson',
    navDate: '2024-02-24',
    description: 'Aggressive small-cap fund with high growth potential.',
    holdings: ['Small Cap Stocks: 80%', 'Mid Cap: 20%'],
    riskFactors: ['High volatility', 'Liquidity risk', 'Company-specific risk'],
    benchmark: 'Small Cap Index'
  }
];

// Investment performance data for charts
export const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Growth Opportunity Fund',
      data: [100, 102, 105, 108, 110, 115],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    },
    {
      label: 'Balanced Portfolio Fund',
      data: [100, 101, 103, 105, 106, 108],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4
    },
    {
      label: 'Debt Security Fund',
      data: [100, 100.5, 101, 101.5, 102, 102.5],
      borderColor: '#F59E0B',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      tension: 0.4
    }
  ]
};

// User investment portfolio (for investors)
export const userPortfolio = [
  {
    fundId: 'MF001',
    fundName: 'Growth Opportunity Fund',
    units: 50,
    purchasePrice: 130.00,
    currentPrice: 145.50,
    investmentValue: 6500,
    currentValue: 7275,
    gain: 775,
    gainPercentage: 11.92,
    purchaseDate: '2023-08-15'
  },
  {
    fundId: 'MF002',
    fundName: 'Balanced Portfolio Fund',
    units: 30,
    purchasePrice: 200.00,
    currentPrice: 210.75,
    investmentValue: 6000,
    currentValue: 6322.5,
    gain: 322.5,
    gainPercentage: 5.38,
    purchaseDate: '2023-10-20'
  },
  {
    fundId: 'MF005',
    fundName: 'Dividend Income Fund',
    units: 40,
    purchasePrice: 150.00,
    currentPrice: 155.80,
    investmentValue: 6000,
    currentValue: 6232,
    gain: 232,
    gainPercentage: 3.87,
    purchaseDate: '2023-12-01'
  }
];

// Market trends for data analyst
export const marketTrends = [
  { month: 'January', equityFunds: 45, debtFunds: 30, balancedFunds: 35 },
  { month: 'February', equityFunds: 52, debtFunds: 32, balancedFunds: 38 },
  { month: 'March', equityFunds: 48, debtFunds: 35, balancedFunds: 40 },
  { month: 'April', equityFunds: 60, debtFunds: 33, balancedFunds: 45 },
  { month: 'May', equityFunds: 65, debtFunds: 29, balancedFunds: 42 },
  { month: 'June', equityFunds: 70, debtFunds: 31, balancedFunds: 48 }
];

// Educational content
export const educationalContent = [
  {
    id: 1,
    title: 'Understanding Mutual Funds',
    content: 'A mutual fund is a professionally managed investment fund that pools money from many investors to purchase securities.',
    category: 'Basics',
    author: 'Jane Admin'
  },
  {
    id: 2,
    title: 'Risk Assessment Guide',
    content: 'Learn how to evaluate and understand different types of risks associated with mutual funds.',
    category: 'Risk Management',
    author: 'John Advisor'
  },
  {
    id: 3,
    title: 'Building a Diversified Portfolio',
    content: 'Diversification is key to managing investment risk. Learn how to build a balanced portfolio.',
    category: 'Strategy',
    author: 'Sarah Advisor'
  },
  {
    id: 4,
    title: 'Expense Ratios Explained',
    content: 'Understand what expense ratios are and how they impact your investment returns.',
    category: 'Costs',
    author: 'Mike Analyst'
  }
];

// User activities log (for admin)
export const userActivities = [
  { id: 1, user: 'investor1@email.com', action: 'Viewed Growth Fund', timestamp: '2024-02-24 10:30' },
  { id: 2, user: 'investor2@email.com', action: 'Invested 5000 in Balanced Fund', timestamp: '2024-02-24 11:15' },
  { id: 3, user: 'advisor1@email.com', action: 'Created new content', timestamp: '2024-02-24 12:00' },
  { id: 4, user: 'analyst1@email.com', action: 'Generated report', timestamp: '2024-02-24 13:45' },
  { id: 5, user: 'investor3@email.com', action: 'Redeemed funds', timestamp: '2024-02-24 14:20' }
];
