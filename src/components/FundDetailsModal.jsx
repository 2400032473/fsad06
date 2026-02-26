import { formatCurrency, formatPercentage, calculateRiskColor, formatLargeNumber } from '../utils/helpers';
import '../styles/fundDetails.css';
import { X } from 'lucide-react';

function FundDetailsModal({ fund, onClose }) {
  if (!fund) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2>{fund.name}</h2>
            <p>{fund.category} Fund</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {/* Key Metrics */}
          <section className="modal-section">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Current NAV</span>
                <span className="metric-value">{formatCurrency(fund.currentPrice)}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Risk Rating</span>
                <span
                  className="metric-value risk-badge"
                  style={{ backgroundColor: calculateRiskColor(fund.riskRating) }}
                >
                  {fund.riskRating}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">AUM</span>
                <span className="metric-value">{formatLargeNumber(fund.aum)}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Expense Ratio</span>
                <span className="metric-value">{formatPercentage(fund.expenseRatio)}</span>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section className="modal-section">
            <h3>Performance Returns</h3>
            <div className="performance-grid">
              <div className="performance-item">
                <span className="perf-label">1 Year</span>
                <span className="perf-value">{formatPercentage(fund.returnYearly)}</span>
              </div>
              <div className="performance-item">
                <span className="perf-label">3 Years</span>
                <span className="perf-value">{formatPercentage(fund.returnThreeYear)}</span>
              </div>
              <div className="performance-item">
                <span className="perf-label">5 Years</span>
                <span className="perf-value">{formatPercentage(fund.returnFiveYear)}</span>
              </div>
            </div>
          </section>

          {/* Portfolio Holdings */}
          <section className="modal-section">
            <h3>Portfolio Holdings</h3>
            <div className="holdings-list">
              {fund.holdings.map((holding, idx) => (
                <div key={idx} className="holding-item">
                  <span>{holding}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Risk Factors */}
          <section className="modal-section">
            <h3>Risk Factors</h3>
            <div className="risk-factors">
              {fund.riskFactors.map((factor, idx) => (
                <div key={idx} className="risk-factor-item">
                  <span>• {factor}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fund Details */}
          <section className="modal-section">
            <h3>Fund Information</h3>
            <div className="fund-info">
              <div className="info-item">
                <span className="info-label">Fund Manager</span>
                <span className="info-value">{fund.fundManager}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Minimum Investment</span>
                <span className="info-value">{formatCurrency(fund.minInvestment)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Benchmark</span>
                <span className="info-value">{fund.benchmark}</span>
              </div>
              <div className="info-item">
                <span className="info-label">NAV Date</span>
                <span className="info-value">{fund.navDate}</span>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="modal-section">
            <h3>About This Fund</h3>
            <p className="fund-description">{fund.description}</p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary">Invest Now</button>
        </div>
      </div>
    </div>
  );
}

export default FundDetailsModal;
