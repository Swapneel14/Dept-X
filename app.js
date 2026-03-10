const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");

const { connectDB, DEFAULT_MONGO_URL } = require("./config/db.js");
const currentPath = require("./middleware/currentPath.js");
const routes = require("./routes/index.js");

const mongoUrl = process.env.MONGO_URL || DEFAULT_MONGO_URL;

connectDB(mongoUrl)
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listenning to port ${PORT}`);
});