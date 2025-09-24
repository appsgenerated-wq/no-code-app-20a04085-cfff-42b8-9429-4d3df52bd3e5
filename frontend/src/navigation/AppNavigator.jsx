import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import PrivateRoute from '../components/PrivateRoute';

// TODO: Create these pages
const AddRecipePage = () => <div className='p-8'>Add Recipe Page (Coming Soon)</div>;
const RecipeDetailPage = () => <div className='p-8'>Recipe Detail Page (Coming Soon)</div>;

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      </Route>
    </Routes>
  );
};

export default AppNavigator;
