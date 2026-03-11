const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");

const { connectDB } = require("./config/db.js");
const currentPath = require("./middleware/currentPath.js");
const routes = require("./routes/index.js");

require("dotenv").config();

const atlasUrl = "mongodb+srv://swapneel_14:Daredevil1421@cluster0.3udl4ly.mongodb.net/dashboard?retryWrites=true&w=majority";
const dblink =  atlasUrl;

if (!process.env.MONGO_URL) {
  console.log("WARNING: MONGO_URL not set; falling back to Atlas URL. Remove local fallback if you want strict Atlas enforcement.");
}

connectDB(dblink)
  .then(() => {
    console.log("connected to mongo", dblink);
  })
  .catch((err) => {
    console.error("mongo connection error", err);
    process.exit(1);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(currentPath);
app.use(routes);

// Debug route: verify current DB connection target
const mongoose = require("mongoose");
app.get("/db-check", (req, res) => {
  const db = mongoose.connection;
  res.json({
    host: db.host,
    name: db.name,
    readyState: db.readyState,
    url: dblink
  });
});

// Custom Error Handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).render("routes/error.ejs", { err });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listenning to port ${PORT}`);
});