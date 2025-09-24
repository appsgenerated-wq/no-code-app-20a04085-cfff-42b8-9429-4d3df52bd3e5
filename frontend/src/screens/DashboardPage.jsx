import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import recipeService from '../services/recipeService';
import Card from '../components/Card';
import Button from '../components/Button';
import Header from '../components/Header';
import { PlusIcon } from '@heroicons/react/24/solid';

const DashboardPage = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAllRecipes();
        setRecipes(data || []);
      } catch (err) {
        setError('Failed to fetch recipes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
            <p className="mt-1 text-lg text-gray-500">Discover and share delicious recipes.</p>
          </div>
          <Button href="/add-recipe">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Recipe
          </Button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading recipes...</p>}
        {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.length > 0 ? (
              recipes.map(recipe => (
                <Card key={recipe.id} className="flex flex-col">
                  <img src={recipe.imageUrl || 'https://via.placeholder.com/400x250.png?text=No+Image'} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">{recipe.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{recipe.description}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                       <Link to={`/recipes/${recipe.id}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                         View Recipe &rarr;
                       </Link>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">No recipes yet!</h3>
                <p className="text-gray-500 mt-2">Be the first to add a new recipe to the collection.</p>
                <Button href="/add-recipe" className="mt-6">Add Your First Recipe</Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
