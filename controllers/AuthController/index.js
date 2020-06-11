const user = {
  username: "cristian.restituyo@gmail.com",
  password: "password",
};

const login = (req, res) => {
  res.send("login");
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
