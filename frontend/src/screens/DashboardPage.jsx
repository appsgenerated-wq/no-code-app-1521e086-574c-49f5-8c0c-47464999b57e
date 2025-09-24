import React from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={handleLogout} variant="danger" size="sm">
            Logout
          </Button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Card className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {user.name}!</h2>
            <p className="mt-2 text-gray-600">You are logged in with the email: {user.email}</p>
          </Card>

          <Card title="Your Account">
            <p className="text-gray-600">This is your main dashboard area. More features coming soon!</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
