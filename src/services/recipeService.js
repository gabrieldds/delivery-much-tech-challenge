class RecipeService {
  constructor(recipeApi, giphyApi) {
    this.recipeApi = recipeApi;
    this.giphyApi = giphyApi;
    this.get.bind(this);
  }

  async get(params = []) {
    params.sort();
    const { status, data: { results } } = await this.recipeApi.get(`/?i=${params.join(',')}`);
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
      status,
      keywords: params,
      recipes,
    };
  }
}

module.exports = RecipeService;
