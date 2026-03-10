const Notice = require("../models/notices.js");

module.exports.renderHome = async (req, res) => {
  const allnotice = await Notice.find({}).sort({ date: -1 });
  res.render("routes/home.ejs", { allnotice });
};

