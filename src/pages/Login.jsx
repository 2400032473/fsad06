import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('investor');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (login(email, password, role)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  const demoAccounts = [
    { email: 'admin@mf.com', password: 'admin123', role: 'admin' },
    { email: 'investor@mf.com', password: 'inv123', role: 'investor' },
    { email: 'advisor@mf.com', password: 'adv123', role: 'advisor' },
    { email: 'analyst@mf.com', password: 'ana123', role: 'analyst' }
  ];

  const fillDemoAccount = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    setRole(account.role);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Mutual Fund Platform</h1>
          <p>Professional Investment Management</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="investor">Investor</option>
              <option value="advisor">Financial Advisor</option>
              <option value="analyst">Data Analyst</option>
            </select>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="demo-section">
          <p className="demo-title">Demo Accounts:</p>
          <div className="demo-buttons">
            {demoAccounts.map((account, idx) => (
              <button
                key={idx}
                type="button"
                className="demo-btn"
                onClick={() => fillDemoAccount(account)}
              >
                {account.role.charAt(0).toUpperCase() + account.role.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
