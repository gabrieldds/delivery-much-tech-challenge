require('dotenv').config();

module.exports = {
  apiKey: process.env.API_KEY,
  recipeBaseURL: process.env.RECIPE_URL,
  giphyBaseURL: process.env.GIPHY_URL,
};
