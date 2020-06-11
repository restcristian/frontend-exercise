const recipes = require("../../recipes.json");

const getAll = (req, res) => {
  res.send(recipes);
};

module.exports = {
  getAll,
};
