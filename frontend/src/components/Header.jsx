import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import { CakeIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <CakeIcon className="h-8 w-8 text-blue-600"/>
              <span className="text-2xl font-bold text-gray-900">FlavorFusion</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
             <Link to="/dashboard" className="font-medium text-gray-500 hover:text-gray-900">Recipes</Link>
          </div>
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <span className="hidden sm:inline text-sm text-gray-600">Hi, {user.name}</span>
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
      </nav>
    </header>
  );
};

export default Header;
