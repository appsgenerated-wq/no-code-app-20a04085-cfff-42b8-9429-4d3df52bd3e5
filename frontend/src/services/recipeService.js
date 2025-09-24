import apiService from './apiService';

const recipeService = {
  getAllRecipes() {
    return apiService.get('/recipes');
  },

  getRecipeById(id) {
    return apiService.get(`/recipes/${id}`);
  },

  createRecipe(recipeData) {
    // recipeData should be a FormData object if it includes a file
    return apiService.post('/recipes', recipeData);
  },

  updateRecipe(id, recipeData) {
    return apiService.put(`/recipes/${id}`, recipeData);
  },

  deleteRecipe(id) {
    return apiService.delete(`/recipes/${id}`);
  },
};

export default recipeService;
