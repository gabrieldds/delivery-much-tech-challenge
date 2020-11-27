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
  test('Should recipes have 10 elements and keywords sorted', async () => {
    const sut = makeSut();
    const params = ['bread', 'garlic', 'tomato'];
    const { recipes, keywords } = await sut.get(params);
    expect(recipes.length).toBe(10);
    expect(keywords).toEqual(params.sort());
  });
});
