import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-brown text-cream p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Job Tracker</h1>
          <button
            onClick={handleLogout}
            className="bg-gold text-dark-brown px-4 py-2 rounded-lg font-semibold hover:bg-light-gold transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-brown mb-4">
            Welcome to the Dashboard! 🎉
          </h2>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            ✅ Authentication is working!
          </div>
          <p className="text-lg text-dark-brown mb-4">
            You are logged in as: <strong>{currentUser?.email}</strong>
          </p>
          <p className="text-dark-brown">
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;