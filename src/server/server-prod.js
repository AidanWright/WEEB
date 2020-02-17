import path from "path";
import express from "express";

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.render("index.ejs", {
    "url": "https://www.google.com"
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
