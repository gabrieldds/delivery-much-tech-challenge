const express = require('express');
const RecipeController = require('../controllers/recipeController');
const RecipeService = require('../services/recipeService');
const Api = require('../utils/api');
const {
  apiKey, recipeBaseURL, giphyBaseURL,
} = require('../config/env');

const router = express.Router();
const recipeApi = new Api(recipeBaseURL);
const giphyApi = new Api(`${giphyBaseURL}?api_key=${apiKey}&limit=1`);
const recipeService = new RecipeService(recipeApi, giphyApi);
const recipeController = new RecipeController(recipeService);

router.get('/', recipeController.get);

module.exports = router;
