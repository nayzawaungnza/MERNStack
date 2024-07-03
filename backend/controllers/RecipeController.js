const Recipe = require("../models/Recipe");

const RecipeController = {
  index: (req, res) => {
    res.json({ message: "Get all Recipes" });
  },
  store: async (req, res) => {
    try {
      const { title, description, ingredients, instructions } = req.body;
      const recipe = await Recipe.create({
        title,
        description,
        ingredients,
        instructions,
      });

      res.json(recipe);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
  update: (req, res) => {
    res.json({ message: "Update Recipe" });
  },
  destroy: (req, res) => {
    res.json({ message: "Delete Recipe" });
  },
  show: (req, res) => {
    res.json({ message: "Get Recipe" });
  },
};

module.exports = RecipeController;
