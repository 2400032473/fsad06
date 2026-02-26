// Utility functions for formatting and calculations

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

export const formatPercentage = (value) => {
  return `${(value).toFixed(2)}%`;
};

export const formatLargeNumber = (value) => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  return formatCurrency(value);
};

export const calculateRiskColor = (riskRating) => {
  switch(riskRating) {
    case 'Low':
      return '#06B6D4'; // Vibrant Cyan
    case 'Medium':
      return '#8B5CF6'; // Vibrant Purple
    case 'High':
      return '#F59E0B'; // Vibrant Amber
    case 'Very High':
      return '#E11D48'; // Vibrant Red
    default:
      return '#6B7280'; // Gray
  }
};

export const calculateGainColor = (gain) => {
  return gain >= 0 ? '#06B6D4' : '#E11D48'; // Vibrant Cyan for gains, Vibrant Red for losses
};

export const filterFundsByCategory = (funds, category) => {
  if (category === 'All') return funds;
  return funds.filter(fund => fund.category === category);
};

export const filterFundsByRisk = (funds, riskLevel) => {
  if (riskLevel === 'All') return funds;
  return funds.filter(fund => fund.riskRating === riskLevel);
};

export const sortFunds = (funds, sortBy) => {
  const sorted = [...funds];
  switch(sortBy) {
    case 'performance':
      return sorted.sort((a, b) => b.returnYearly - a.returnYearly);
    case 'expense':
      return sorted.sort((a, b) => a.expenseRatio - b.expenseRatio);
    case 'aum':
      return sorted.sort((a, b) => b.aum - a.aum);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

export const calculatePortfolioMetrics = (portfolio) => {
  const totalInvested = portfolio.reduce((sum, item) => sum + item.investmentValue, 0);
  const totalCurrent = portfolio.reduce((sum, item) => sum + item.currentValue, 0);
  const totalGain = totalCurrent - totalInvested;
  const gainPercentage = (totalGain / totalInvested) * 100;

  return {
    totalInvested,
    totalCurrent,
    totalGain,
    gainPercentage
  };
};

export const generateChartData = (funds, metric = 'returnYearly') => {
  return {
    labels: funds.map(f => f.name),
    datasets: [{
      label: 'Performance Metrics',
      data: funds.map(f => f[metric]),
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }]
  };
};
