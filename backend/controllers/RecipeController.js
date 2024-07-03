const { default: mongoose } = require("mongoose");
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
  update: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid ID" });
      }
      const recipe = await Recipe.findByIdAndUpdate(
        id,
        { ...req.body },
        {
          new: true,
        }
      );
      if (!recipe) {
        return res.status(404).json({ msg: "Recipe not found" });
      }

      res.json(recipe);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid ID" });
      }

      const recipe = await Recipe.findByIdAndDelete(id);

      if (!recipe) {
        return res.status(404).json({ msg: "Recipe not found" });
      }

      res.json({ message: "Delete Recipe Success" });
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid ID" });
      }
      const recipe = await Recipe.findById(id);
      if (!recipe) {
        return res.status(404).json({ msg: "Recipe not found" });
      }
      res.json(recipe);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};

module.exports = RecipeController;
