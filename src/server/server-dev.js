import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";

const app = express(),
  compiler = webpack(config);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res) => {
  res.render("index.ejs", {
    "url": "www.google.com"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
