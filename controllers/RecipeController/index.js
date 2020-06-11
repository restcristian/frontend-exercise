const recipes = require("../../recipes.json");

const getAll = (req, res) => {
  res.send(recipes);
};

const updateRating = (req, res) => {
  const { payload } = req.body;
  const { id } = req.params;
  const { rating } = payload;

  const recipe = recipes.find((item) => item.id === id);
  recipe.rating = rating;

  res.send(recipe);
};

module.exports = {
  getAll,
  updateRating,
};
