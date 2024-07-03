const Recipe = require("../models/Recipe");

const RecipeController = {
  index: async (req, res) => {
    try {
      const recipes = await Recipe.find().sort({ createdAt: -1 });
      res.json(recipes);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
  store: async (req, res) => {
    const { title, description, ingredients, instructions } = req.body;
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
    });

    res.json(recipe);
  },
  update: (req, res) => {
    res.json({ message: "Update Recipe" });
  },
  destroy: (req, res) => {
    res.json({ message: "Delete Recipe" });
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      res.json(recipe);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  },
};

module.exports = RecipeController;
