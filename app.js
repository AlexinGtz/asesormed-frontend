require("dotenv").config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
//const session = require("express-session");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 5000;

const app = express();

app.enable("trust proxy");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.use("/api", require("./src/routes/api")); //ensureAuthenticated,

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
