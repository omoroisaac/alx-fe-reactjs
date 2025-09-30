import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    } else if (formData.summary.trim().length < 10) {
      newErrors.summary = 'Summary should be at least 10 characters long';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients';
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
    } else {
      const stepsList = formData.instructions.split('\n').filter(step => step.trim());
      if (stepsList.length < 2) {
        newErrors.instructions = 'Please provide at least 2 preparation steps';
      }
    }

    if (!formData.prepTime || formData.prepTime < 1) {
      newErrors.prepTime = 'Preparation time is required';
    }

    if (!formData.cookTime || formData.cookTime < 1) {
      newErrors.cookTime = 'Cooking time is required';
    }

    if (!formData.servings || formData.servings < 1) {
      newErrors.servings = 'Number of servings is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Recipe submitted successfully!');
        setIsSubmitting(false);
        navigate('/'); // Redirect to home page
      }, 1500);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Add New Recipe
          </h1>
          <p className="text-gray-600">
            Share your delicious recipe with the community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Recipe Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Spaghetti Carbonara"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Recipe Summary */}
          <div className="mb-6">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Summary *
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="3"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.summary ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief description of your recipe..."
            />
            {errors.summary && (
              <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
            )}
          </div>

          {/* Recipe Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Preparation Time */}
            <div>
              <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-2">
                Prep Time (min) *
              </label>
              <input
                type="number"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.prepTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="15"
              />
              {errors.prepTime && (
                <p className="text-red-500 text-sm mt-1">{errors.prepTime}</p>
              )}
            </div>

            {/* Cooking Time */}
            <div>
              <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-2">
                Cook Time (min) *
              </label>
              <input
                type="number"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.cookTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="30"
              />
              {errors.cookTime && (
                <p className="text-red-500 text-sm mt-1">{errors.cookTime}</p>
              )}
            </div>

            {/* Servings */}
            <div>
              <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-2">
                Servings *
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.servings ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="4"
              />
              {errors.servings && (
                <p className="text-red-500 text-sm mt-1">{errors.servings}</p>
              )}
            </div>
          </div>

          {/* Difficulty */}
          <div className="mb-6">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients * (one per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs..."
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
              Preparation Steps * (one step per line)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.instructions ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Preheat oven to 350°F...&#10;Mix dry ingredients...&#10;Add wet ingredients..."
            />
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-200 font-medium flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Recipe'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;