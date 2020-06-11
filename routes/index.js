const { Router } = require("express");
const RecipeRoutes = require("./RecipeRoutes");
const AuthRoutes = require("./AuthRoutes");
const router = Router();

router.use("/recipes", RecipeRoutes);
router.use("/auth", AuthRoutes);

module.exports = router;
