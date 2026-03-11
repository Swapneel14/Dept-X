const Notice = require("../models/notices.js");

module.exports.renderAddNotice = async (req, res) => {
  res.render("routes/addnotice.ejs");
};

module.exports.createNotice = async (req, res) => {
  const { notice, password } = req.body;
  if (password != "chayan123") {
    return res.send("Password not correct");
  }

  // Ensure simple string fields for MongoDB
  const payload = {
    by: notice && notice.by ? String(notice.by).trim() : "Anonymous",
    content: notice && notice.content ? String(notice.content).trim() : "(No content)",
    date: new Date(),
  };

  const newNotice = new Notice(payload);
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

