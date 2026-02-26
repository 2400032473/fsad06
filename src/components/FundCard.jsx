import { formatCurrency, formatPercentage, calculateRiskColor } from '../utils/helpers';
import '../styles/fundCard.css';
import { TrendingUp, TrendingDown } from 'lucide-react';

function FundCard({ fund, onSelect }) {
  const gainColor = fund.returnYearly >= 0 ? '#10B981' : '#EF4444';

  return (
    <div className="fund-card">
      <div className="fund-header">
        <div>
          <h3>{fund.name}</h3>
          <p className="fund-category">{fund.category}</p>
        </div>
        <div
          className="risk-badge"
          style={{ backgroundColor: calculateRiskColor(fund.riskRating) }}
        >
          {fund.riskRating}
        </div>
      </div>

      <div className="fund-details">
        <div className="detail-item">
          <span className="label">NAV</span>
          <span className="value">{formatCurrency(fund.currentPrice)}</span>
        </div>
        <div className="detail-item">
          <span className="label">1Y Return</span>
          <span className="value" style={{ color: gainColor }}>
            <span style={{ marginRight: '4px' }}>
              {fund.returnYearly >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            </span>
            {formatPercentage(fund.returnYearly)}
          </span>
        </div>
      </div>

      <div className="fund-stats">
        <div className="stat">
          <span className="stat-label">3Y Return</span>
          <span className="stat-value">{formatPercentage(fund.returnThreeYear)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Expense Ratio</span>
          <span className="stat-value">{formatPercentage(fund.expenseRatio)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Min Investment</span>
          <span className="stat-value">{formatCurrency(fund.minInvestment)}</span>
        </div>
      </div>

      <button
        className="view-details-btn"
        onClick={() => onSelect && onSelect(fund)}
      >
        View Details
      </button>
    </div>
  );
}

export default FundCard;
