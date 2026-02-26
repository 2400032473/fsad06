import { useState } from 'react';
import { marketTrends, mutualFunds } from '../../mock/fundData';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../../styles/roleDashboards.css';
import { BarChart3, TrendingUp, Download, Filter } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnalystDashboard() {
  const [activeTab, setActiveTab] = useState('trends');

  const stats = [
    { label: 'Total Funds', value: mutualFunds.length, icon: BarChart3, color: '#667eea' },
    { label: 'Avg Performance', value: '12.3%', icon: TrendingUp, color: '#06B6D4' },
    { label: 'Market Trend', value: 'Bullish', icon: BarChart3, color: '#10B981' },
    { label: 'Reports Generated', value: '24', icon: Download, color: '#f5576c' }
  ];

  const trendChartData = {
    labels: marketTrends.map(t => t.month),
    datasets: [
      {
        label: 'Equity Funds',
        data: marketTrends.map(t => t.equityFunds),
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.15)',
        tension: 0.4,
        fill: true,
        borderWidth: 3
      },
      {
        label: 'Debt Funds',
        data: marketTrends.map(t => t.debtFunds),
        borderColor: '#06B6D4',
        backgroundColor: 'rgba(6, 182, 212, 0.15)',
        tension: 0.4,
        fill: true,
        borderWidth: 3
      },
      {
        label: 'Balanced Funds',
        data: marketTrends.map(t => t.balancedFunds),
        borderColor: '#f5576c',
        backgroundColor: 'rgba(245, 87, 108, 0.15)',
        tension: 0.4,
        fill: true,
        borderWidth: 3
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Market Trends Over Time'
      }
    }
  };

  const performanceData = {
    labels: mutualFunds.map(f => f.name.substring(0, 10)),
    datasets: [{
      label: 'Yearly Return %',
      data: mutualFunds.map(f => f.returnYearly),
      backgroundColor: [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#f5576c',
        '#06B6D4',
        '#10B981'
      ],
      borderRadius: 8,
      borderSkipped: false,
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    }]
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Data Analytics Dashboard</h1>
        <p>Market analysis, trends, and investment performance reports</p>
      </div>

      {/* Stats */}
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
          className={`tab ${activeTab === 'trends' ? 'active' : ''}`}
          onClick={() => setActiveTab('trends')}
        >
          Market Trends
        </button>
        <button
          className={`tab ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          Fund Performance
        </button>
        <button
          className={`tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          Reports
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'trends' && (
          <div className="content-section">
            <h2>Investment Trends</h2>
            <div className="chart-container">
              <Line data={trendChartData} options={chartOptions} />
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="content-section">
            <h2>Fund Performance Comparison</h2>
            <div className="chart-container">
              <Bar data={performanceData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Return Percentage (%)'
                    }
                  }
                }
              }} />
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="content-section">
            <h2>Available Reports</h2>
            <div className="reports-list">
              {[
                { name: 'Monthly Market Summary', date: '2024-02-01', type: 'PDF' },
                { name: 'Fund Performance Analysis', date: '2024-01-31', type: 'XLSX' },
                { name: 'Quarterly Trend Report', date: '2024-01-01', type: 'PDF' },
                { name: 'Risk Assessment Report', date: '2023-12-31', type: 'PDF' },
                { name: 'Portfolio Analytics', date: '2023-12-15', type: 'XLSX' }
              ].map((report, idx) => (
                <div key={idx} className="report-item">
                  <div className="report-info">
                    <h3>{report.name}</h3>
                    <span className="report-date">{report.date}</span>
                  </div>
                  <div className="report-actions">
                    <span className="report-type">{report.type}</span>
                    <button className="btn-small">
                      <Download size={16} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalystDashboard;
