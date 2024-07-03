const express = require("express");
const RecipeController = require("../controllers/RecipeController");
const router = express.Router();
router.get("", RecipeController.index);
router.get("/:id", RecipeController.show);
router.post("", RecipeController.store);
router.patch("/:id", RecipeController.update);
router.delete("/:id", RecipeController.destroy);

module.exports = router;
