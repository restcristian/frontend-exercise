const { Router } = require("express");
const RecipeRoutes = require("./RecipeRoutes");

const router = Router();

router.use("/recipes", RecipeRoutes);

module.exports = router;
