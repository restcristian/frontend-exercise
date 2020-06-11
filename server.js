const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
app.use("/api/v1", routes);

app.listen(PORT, () => console.log(`[server]: Listening on port: ${PORT}`));
