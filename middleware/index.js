const verifyToken = (req, res, next) => {
  const bearer = req.headers["authorization"];

  if (typeof bearer !== "undefined") {
    const bearerToken = bearer.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  verifyToken,
};
