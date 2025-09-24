import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              NiceApp
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
          </nav>
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <Button href="/dashboard" variant="secondary" size="sm">Dashboard</Button>
                <Button onClick={logout} variant="outline" size="sm">Logout</Button>
              </>
            ) : (
              <>
                <Button href="/login" variant="secondary" size="sm">Sign In</Button>
                <Button href="/register" size="sm">Get Started</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
