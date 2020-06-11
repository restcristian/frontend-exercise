const jwt = require("jsonwebtoken");
const recipes = require("../../recipes.json");
const { SECRET_KEY } = process.env;

const getAll = async (req, res) => {
  const { token } = req;
  try {
    const decoded = await jwt.verify(token, SECRET_KEY);
    const page = parseInt(req.query.page);
    const SIZE = 6;
    const clonedRecipes = [...recipes];
    const slicedRecipes = clonedRecipes.slice(page * SIZE, (page + 1) * SIZE);

    res.send(slicedRecipes);
  } catch (error) {
    res.status(403);
  }
};

const updateRating = async (req, res) => {
  const { token } = req;

  try {
    const decoded = await jwt.verify(token, SECRET_KEY);
    const { payload } = req.body;
    const { id } = req.params;
    const { rating } = payload;

    const recipe = recipes.find((item) => item.id === id);
    recipe.rating = rating;
    res.send(recipe);
  } catch (error) {
    res.status(403);
  }
};

const toggleFavorite = async (req, res) => {
  const { token } = req;
  try {
    const decoded = await jwt.verify(token, SECRET_KEY);
    const { id } = req.params;
    const recipe = recipes.find((item) => item.id === id);

    if (recipe.hasOwnProperty("isFavorite")) {
      recipe.isFavorite = recipe.isFavorite ? false : true;
    } else {
      recipe.isFavorite = true;
    }
    res.send(recipe);
  } catch (error) {
    res.status(403);
  }
};

module.exports = {
  getAll,
  updateRating,
  toggleFavorite,
};
