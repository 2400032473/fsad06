import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import '../styles/navigation.css';

function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getMenuByRole = () => {
    const commonMenus = [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Funds', path: '/funds' }
    ];

    const roleSpecificMenus = {
      admin: [
        ...commonMenus,
        { label: 'Users', path: '/users' },
        { label: 'Activities', path: '/activities' }
      ],
      investor: [
        ...commonMenus,
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Transactions', path: '/transactions' }
      ],
      advisor: [
        ...commonMenus,
        { label: 'Content', path: '/content' },
        { label: 'Clients', path: '/clients' }
      ],
      analyst: [
        ...commonMenus,
        { label: 'Analytics', path: '/analytics' },
        { label: 'Reports', path: '/reports' }
      ]
    };

    return roleSpecificMenus[user?.role] || commonMenus;
  };

  const menuItems = getMenuByRole();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>MF Platform</h1>
          <span className="role-badge">{user?.role.toUpperCase()}</span>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        <div className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="navbar-links">
            {menuItems.map((menu) => (
              <button
                key={menu.path}
                onClick={() => {
                  navigate(menu.path);
                  setMobileMenuOpen(false);
                }}
                className={`nav-link ${location.pathname === menu.path ? 'active' : ''}`}
              >
                {menu.label}
              </button>
            ))}
          </div>

          <div className="navbar-user">
            <span className="user-email">{user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
