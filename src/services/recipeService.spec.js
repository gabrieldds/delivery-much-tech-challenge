const RecipeService = require('./recipeService');
const Api = require('../utils/api');
const { apiKey } = require('../config/env');

const makeSut = () => {
  const recipeApi = new Api('http://www.recipepuppy.com/api');
  const giphyApi = new Api(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1`);
  const sut = new RecipeService(recipeApi, giphyApi);
  return sut;
};

describe('RecipeService object', () => {
  test('Should return status 200', async () => {
    const sut = makeSut();
    const { status } = await sut.get(['bread', 'garlic', 'tomato']);
    expect(status).toBe(200);
  });
});
