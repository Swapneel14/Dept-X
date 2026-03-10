const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");

const { connectDB, DEFAULT_MONGO_URL } = require("./config/db.js");
const currentPath = require("./middleware/currentPath.js");
const routes = require("./routes/index.js");

connectDB(DEFAULT_MONGO_URL)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(currentPath);
app.use(routes);

// Custom Error Handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).render("routes/error.ejs", { err });
});

app.listen(5000, () => {
  console.log("Server is listenning to post 5000");
});