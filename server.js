require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
// API Route handler
app.use("/api/v1", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`[server]: Listening on port: ${PORT}`));
