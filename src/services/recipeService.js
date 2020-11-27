class RecipeService {
  constructor(recipeApi, giphyApi) {
    this.recipeApi = recipeApi;
    this.giphyApi = giphyApi;
  }

  async get(params = []) {
    params.sort();
    if (params.length > 3) {
      return {
        message: 'Number of ingredients must have to be 3 at most!',
      };
    }

    const { data: { results } } = await this.recipeApi.get(`/?i=${params.join(',')}`);
    const recipes = await Promise.all(results.map(async (result) => {
      const { title, href, ingredients } = result;
      const { data: { data: [{ images: { original: { url } } }] } } = await this.giphyApi.get(`&q=${title}`);
      return {
        title,
        ingredients: ingredients.split(', ').sort(),
        link: href,
        gif: url,
      };
    }));

    return {
      keywords: params,
      recipes,
    };
  }
}

module.exports = RecipeService;
