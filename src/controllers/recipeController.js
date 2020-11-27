class RecipeController {
  constructor(recipeService) {
    this.recipeService = recipeService;

    this.get = this.get.bind(this);
  }

  async get(req, res) {
    try {
      const { i } = req.query;
      const ingredients = i.trim().split(',');
      const response = await this.recipeService.get(ingredients);
      return res.json(response);
    } catch (error) {
      const { status, data } = error;
      return res.status(status).json({ error: data });
    }
  }
}

module.exports = RecipeController;
