const { Router } = require("express");
const RecipeController = require("../../controllers/RecipeController");

const router = Router();

router.get("/", RecipeController.getAll);

module.exports = router;
