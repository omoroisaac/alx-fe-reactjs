import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Delicious Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and share amazing recipes from around the world. 
            Find your next favorite meal today!
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Recipe Image */}
              <div 
                className="h-48 overflow-hidden"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Recipe Content */}
              <div className="p-6">
                <h2 
                  className="text-xl font-bold text-gray-800 mb-3 cursor-pointer"
                  onClick={() => handleRecipeClick(recipe.id)}
                >
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                <button 
                  onClick={() => handleRecipeClick(recipe.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading delicious recipes...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;