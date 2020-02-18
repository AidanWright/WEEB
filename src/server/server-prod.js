import path from "path";
import express from "express";

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(express.static(__dirname));

const items = [
  "Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.",
  "He went back to the video to see what had been recorded and was shocked at what he saw.",
  "She could hear him in the shower singing with a joy she hoped he'd retain after she delivered the news.",
  "Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.",
  "Standing on one's head at job interviews forms a lasting impression.",
  "He set out for a short walk, but now all he could see were mangroves and water were for miles."
];
const item = items[Math.floor(Math.random() * items.length)];
const sen = "This sentenced is dynamically generated in the production server" + item;
app.get("/", (req, res) => {
  res.render("index.ejs", {
    "dynamicSentence": sen
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
