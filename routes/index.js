const { Router } = require("express");
const RecipeRoutes = require("./RecipeRoutes");
const AuthRoutes = require("./AuthRoutes");
const router = Router();
const { verifyToken } = require("../middleware");

router.use("/recipes", verifyToken, RecipeRoutes);
router.use("/auth", AuthRoutes);

module.exports = router;
