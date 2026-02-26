import { useState } from 'react';
import { userPortfolio, mutualFunds } from '../../mock/fundData';
import { calculatePortfolioMetrics, formatCurrency, formatPercentage } from '../../utils/helpers';
import '../../styles/roleDashboards.css';
import { TrendingUp, Wallet, DollarSign, Target } from 'lucide-react';

function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const portfolioMetrics = calculatePortfolioMetrics(userPortfolio);

  const stats = [
    { 
      label: 'Total Investment',
      value: formatCurrency(portfolioMetrics.totalInvested),
      icon: DollarSign,
      color: '#667eea'
    },
    { 
      label: 'Current Value', 
      value: formatCurrency(portfolioMetrics.totalCurrent),
      icon: Wallet,
      color: '#06B6D4'
    },
    { 
      label: 'Total Gain', 
      value: formatCurrency(portfolioMetrics.totalGain),
      icon: TrendingUp,
      color: '#10B981',
      gain: true
    },
    { 
      label: 'Gain %', 
      value: formatPercentage(portfolioMetrics.gainPercentage),
      icon: Target,
      color: '#f5576c',
      gain: true
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Investment Dashboard</h1>
        <p>Track and manage your mutual fund investments</p>
      </div>

      {/* Portfolio Stats */}
      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                <Icon size={24} color="white" />
              </div>
              <div className="stat-details">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Portfolio Overview
        </button>
        <button
          className={`tab ${activeTab === 'holdings' ? 'active' : ''}`}
          onClick={() => setActiveTab('holdings')}
        >
          Holdings Details
        </button>
        <button
          className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommendations')}
        >
          Recommendations
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="content-section">
            <h2>Portfolio Summary</h2>
            <div className="portfolio-summary">
              <div className="summary-box">
                <h3>Your Holdings</h3>
                <p>{userPortfolio.length} funds</p>
              </div>
              <div className="summary-box">
                <h3>Portfolio Allocation</h3>
                <div className="allocation-chart">
                  {userPortfolio.map((holding, idx) => (
                    <div key={idx} className="allocation-item">
                      <span>{holding.fundName.substring(0, 15)}...</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${(holding.currentValue / portfolioMetrics.totalCurrent) * 100}%`,
                            backgroundColor: ['#667eea', '#06B6D4', '#f5576c'][idx % 3]
                          }}
                        />
                      </div>
                      <span>{((holding.currentValue / portfolioMetrics.totalCurrent) * 100).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'holdings' && (
          <div className="content-section">
            <h2>Your Holdings</h2>
            <div className="holdings-table">
              <table>
                <thead>
                  <tr>
                    <th>Fund Name</th>
                    <th>Units</th>
                    <th>Invested</th>
                    <th>Current Value</th>
                    <th>Gain/Loss</th>
                    <th>Return %</th>
                  </tr>
                </thead>
                <tbody>
                  {userPortfolio.map((holding, idx) => (
                    <tr key={idx}>
                      <td>{holding.fundName}</td>
                      <td>{holding.units}</td>
                      <td>{formatCurrency(holding.investmentValue)}</td>
                      <td>{formatCurrency(holding.currentValue)}</td>
                      <td style={{ color: holding.gain >= 0 ? '#10B981' : '#EF4444' }}>
                        {formatCurrency(holding.gain)}
                      </td>
                      <td style={{ color: holding.gainPercentage >= 0 ? '#10B981' : '#EF4444' }}>
                        {formatPercentage(holding.gainPercentage)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div className="content-section">
            <h2>Investment Recommendations</h2>
            <div className="recommendations">
              <div className="recommendation-box">
                <h3>👉 Diversify Your Portfolio</h3>
                <p>Consider adding a debt fund to balance your equity-heavy portfolio.</p>
              </div>
              <div className="recommendation-box">
                <h3>👉 Rebalance Quarterly</h3>
                <p>Your portfolio allocation has shifted. Review and rebalance according to your goals.</p>
              </div>
              <div className="recommendation-box">
                <h3>👉 Explore Growth Opportunities</h3>
                <p>Technology Innovation Fund shows strong momentum. Consider increasing allocation.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvestorDashboard;
