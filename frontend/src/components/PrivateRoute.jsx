import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p className="text-gray-600">Loading authentication state...</p>
        </div>
    );
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
