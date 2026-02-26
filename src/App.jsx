import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FundsPage from './pages/FundsPage';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navigation />
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </>
            }
          />
          
          <Route
            path="/funds"
            element={
              <>
                <Navigation />
                <ProtectedRoute>
                  <FundsPage />
                </ProtectedRoute>
              </>
            }
          />

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
