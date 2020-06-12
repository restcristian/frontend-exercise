const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(403);
  }
  const bearerToken = bearer.split(" ")[1];

  try {
    req.token = jwt.verify(bearerToken, SECRET_KEY);
  } catch (error) {
    return res.status(403);
  }
  next();
};

module.exports = {
  verifyToken,
};
