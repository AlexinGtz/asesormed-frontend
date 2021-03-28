require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
//const session = require("express-session");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 5000;

const app = express();

app.enable("trust proxy");

app.use("/static", express.static("build/static"));
app.use(bodyParser.json());

app.use("/api", require("./src/routes/api")); //ensureAuthenticated,

app.all("*", (req, res) => {
  //ensureAuthenticated,
  res.sendFile("build/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
