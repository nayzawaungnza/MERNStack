const RecipeController = {
  index: (req, res) => {
    res.json({ message: "Get all Recipes" });
  },
  store: (req, res) => {
    res.json({ message: "Store Recipe" });
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
