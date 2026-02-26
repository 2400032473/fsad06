import { useState } from 'react';
import { userActivities, mutualFunds } from '../../mock/fundData';
import '../../styles/roleDashboards.css';
import { Users, Activity, BarChart3, FileText } from 'lucide-react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '1,248', icon: Users, color: '#667eea' },
    { label: 'Active Funds', value: mutualFunds.length, icon: FileText, color: '#764ba2' },
    { label: 'Total AUM', value: '$45.2B', icon: BarChart3, color: '#f093fb' },
    { label: 'Recent Activities', value: userActivities.length, icon: Activity, color: '#f5576c' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Platform Management & Oversight</p>
      </div>

      {/* Stats Grid */}
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
          Overview
        </button>
        <button
          className={`tab ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          User Activities
        </button>
        <button
          className={`tab ${activeTab === 'funds' ? 'active' : ''}`}
          onClick={() => setActiveTab('funds')}
        >
          Funds Management
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="content-section">
            <h2>Platform Overview</h2>
            <div className="overview-grid">
              <div className="info-box">
                <h3>System Status</h3>
                <p style={{ color: '#10B981', fontSize: '18px', fontWeight: 'bold' }}>✓ All Systems Operational</p>
              </div>
              <div className="info-box">
                <h3>Active Sessions</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>234</p>
              </div>
              <div className="info-box">
                <h3>Last Backup</h3>
                <p>Today at 02:00 UTC</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="content-section">
            <h2>Recent User Activities</h2>
            <div className="activities-table">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                    <th>Timestamp</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userActivities.map(activity => (
                    <tr key={activity.id}>
                      <td>{activity.user}</td>
                      <td>{activity.action}</td>
                      <td>{activity.timestamp}</td>
                      <td><span className="status-badge">Completed</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'funds' && (
          <div className="content-section">
            <h2>Fund Management</h2>
            <div className="funds-management">
              <table>
                <thead>
                  <tr>
                    <th>Fund Name</th>
                    <th>Category</th>
                    <th>Current NAV</th>
                    <th>AUM</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mutualFunds.slice(0, 5).map(fund => (
                    <tr key={fund.id}>
                      <td>{fund.name}</td>
                      <td>{fund.category}</td>
                      <td>${fund.currentPrice.toFixed(2)}</td>
                      <td>${(fund.aum / 1000000000).toFixed(2)}B</td>
                      <td><span className="status-badge" style={{ backgroundColor: '#10B981' }}>Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
