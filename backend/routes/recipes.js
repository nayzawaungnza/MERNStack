const express = require("express");
const RecipeController = require("../controllers/RecipeController");
const { body } = require("express-validator");
const handleErrorMessage = require("../middlewares/handleErrorMessage");

const router = express.Router();
router.get("", RecipeController.index);
router.get("/:id", RecipeController.show);
router.post(
  "",
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("ingredients").notEmpty().isArray({ min: 1 }),
  ],
  handleErrorMessage,
  RecipeController.store
);
router.patch("/:id", RecipeController.update);
router.delete("/:id", RecipeController.destroy);

module.exports = router;
