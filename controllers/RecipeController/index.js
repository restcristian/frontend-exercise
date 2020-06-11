const recipes = require("../../recipes.json");
const queryString = require("querystring");

const getAll = (req, res) => {
  const page = parseInt(req.query.page);
  const SIZE = 6;
  const clonedRecipes = [...recipes];
  const slicedRecipes = clonedRecipes.slice(page * SIZE, (page + 1) * SIZE);

  res.send(slicedRecipes);
};

const updateRating = (req, res) => {
  const { payload } = req.body;
  const { id } = req.params;
  const { rating } = payload;

  const recipe = recipes.find((item) => item.id === id);
  recipe.rating = rating;

  res.send(recipe);
};

const toggleFavorite = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((item) => item.id === id);

  if (recipe.hasOwnProperty("isFavorite")) {
    recipe.isFavorite = recipe.isFavorite ? false : true;
  } else {
    recipe.isFavorite = true;
  }
  res.send(recipe);
};

module.exports = {
  getAll,
  updateRating,
  toggleFavorite,
};
