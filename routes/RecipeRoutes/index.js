const { Router } = require("express");
const RecipeController = require("../../controllers/RecipeController");

const router = Router();

router.get("/", RecipeController.getAll);
router.put("/rate/:id", RecipeController.updateRating);
router.put("/favorite/:id", RecipeController.toggleFavorite);

module.exports = router;
