const Notice = require("../models/notices.js");

module.exports.renderAddNotice = async (req, res) => {
  res.render("routes/addnotice.ejs");
};

module.exports.createNotice = async (req, res) => {
  const { notice, password } = req.body;
  if (password != "chayan123") {
    return res.send("Password not correct");
  }
  const newNotice = new Notice(notice);
  newNotice.date = Date.now();
  await newNotice.save();
  return res.redirect("/");
};

module.exports.deleteNotice = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (password != "chayan123") {
    return res.send("Password not correct");
  }
  await Notice.findByIdAndDelete(id);
  return res.redirect("/");
};

