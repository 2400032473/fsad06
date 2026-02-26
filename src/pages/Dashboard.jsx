import { useAuth } from '../context/AuthContext';
import AdminDashboard from './roles/AdminDashboard';
import InvestorDashboard from './roles/InvestorDashboard';
import AdvisorDashboard from './roles/AdvisorDashboard';
import AnalystDashboard from './roles/AnalystDashboard';

function Dashboard() {
  const { user } = useAuth();

  switch(user?.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'investor':
      return <InvestorDashboard />;
    case 'advisor':
      return <AdvisorDashboard />;
    case 'analyst':
      return <AnalystDashboard />;
    default:
      return <div>Unknown Role</div>;
  }
}

export default Dashboard;
