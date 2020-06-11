const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = (req, res) => {
  const { username, password } = req.body;
  const user = {
    username: "cristian.restituyo@gmail.com",
    password: "password",
  };
  if (username === user.username && password === user.password) {
    jwt.sign(user, SECRET_KEY, (err, token) => {
      if (!err) {
        res.send({ token });
      } else {
        res.status(403);
      }
    });
  } else {
    res.send({ message: "Invalid user" });
  }
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
