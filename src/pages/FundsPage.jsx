import { useState } from 'react';
import { mutualFunds } from '../mock/fundData';
import { filterFundsByCategory, filterFundsByRisk, sortFunds } from '../utils/helpers';
import FundCard from '../components/FundCard';
import FundDetailsModal from '../components/FundDetailsModal';
import '../styles/fundCard.css';

function FundsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [selectedFund, setSelectedFund] = useState(null);

  let filteredFunds = mutualFunds;
  filteredFunds = filterFundsByCategory(filteredFunds, selectedCategory);
  filteredFunds = filterFundsByRisk(filteredFunds, selectedRisk);
  filteredFunds = sortFunds(filteredFunds, sortBy);

  const categories = ['All', ...new Set(mutualFunds.map(f => f.category))];
  const riskLevels = ['All', 'Low', 'Medium', 'High', 'Very High'];

  return (
    <div className="funds-page">
      <div className="page-header">
        <h1>Mutual Funds</h1>
        <p>Explore and compare our comprehensive collection of mutual funds</p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label>Category</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Risk Level</label>
          <select value={selectedRisk} onChange={(e) => setSelectedRisk(e.target.value)}>
            {riskLevels.map(risk => (
              <option key={risk} value={risk}>{risk}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="performance">Performance</option>
            <option value="expense">Expense Ratio</option>
            <option value="aum">AUM</option>
          </select>
        </div>
      </div>

      <div className="funds-grid">
        {filteredFunds.length > 0 ? (
          filteredFunds.map(fund => (
            <FundCard
              key={fund.id}
              fund={fund}
              onSelect={setSelectedFund}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No funds found matching your criteria</p>
          </div>
        )}
      </div>

      {selectedFund && (
        <FundDetailsModal
          fund={selectedFund}
          onClose={() => setSelectedFund(null)}
        />
      )}
    </div>
  );
}

export default FundsPage;
