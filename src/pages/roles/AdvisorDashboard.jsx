import { useState } from 'react';
import { educationalContent } from '../../mock/fundData';
import '../../styles/roleDashboards.css';
import { BookOpen, Users, PlusCircle, MessageSquare } from 'lucide-react';

function AdvisorDashboard() {
  const [activeTab, setActiveTab] = useState('content');
  const [newContent, setNewContent] = useState({ title: '', content: '', category: '' });

  const stats = [
    { label: 'Clients', value: '42', icon: Users, color: '#667eea' },
    { label: 'Content Published', value: educationalContent.length, icon: BookOpen, color: '#06B6D4' },
    { label: 'Consultations', value: '28', icon: MessageSquare, color: '#f093fb' },
    { label: 'Rating', value: '4.8/5', icon: PlusCircle, color: '#f5576c' }
  ];

  const handlePublishContent = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Publishing content:', newContent);
    setNewContent({ title: '', content: '', category: '' });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Financial Advisor Dashboard</h1>
        <p>Manage content, clients, and provide investment guidance</p>
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
          className={`tab ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          Educational Content
        </button>
        <button
          className={`tab ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => setActiveTab('clients')}
        >
          My Clients
        </button>
        <button
          className={`tab ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Content
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'content' && (
          <div className="content-section">
            <h2>Published Content</h2>
            <div className="content-list">
              {educationalContent.map(item => (
                <div key={item.id} className="content-item">
                  <div className="content-header">
                    <h3>{item.title}</h3>
                    <span className="content-category">{item.category}</span>
                  </div>
                  <p>{item.content}</p>
                  <div className="content-meta">
                    <span>By {item.author}</span>
                    <button className="btn-small">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="content-section">
            <h2>Your Clients</h2>
            <div className="clients-table">
              <table>
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Portfolio Value</th>
                    <th>Risk Profile</th>
                    <th>Last Consultation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>$25,000</td>
                    <td>Moderate</td>
                    <td>2024-02-20</td>
                    <td><button className="btn-small">Consult</button></td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>$45,000</td>
                    <td>Aggressive</td>
                    <td>2024-02-15</td>
                    <td><button className="btn-small">Consult</button></td>
                  </tr>
                  <tr>
                    <td>Bob Johnson</td>
                    <td>$18,500</td>
                    <td>Conservative</td>
                    <td>2024-02-10</td>
                    <td><button className="btn-small">Consult</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="content-section">
            <h2>Create New Content</h2>
            <form className="content-form" onSubmit={handlePublishContent}>
              <div className="form-group">
                <label>Content Title</label>
                <input
                  type="text"
                  value={newContent.title}
                  onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                  placeholder="e.g., How to build a retirement portfolio"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={newContent.category}
                  onChange={(e) => setNewContent({ ...newContent, category: e.target.value })}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Basics">Basics</option>
                  <option value="Risk Management">Risk Management</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Costs">Costs</option>
                </select>
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={newContent.content}
                  onChange={(e) => setNewContent({ ...newContent, content: e.target.value })}
                  placeholder="Write your educational content here..."
                  rows="8"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">Publish Content</button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setNewContent({ title: '', content: '', category: '' })}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdvisorDashboard;
