const Student = require("../models/students.js");
const err = require("../utils/myerr.js");

module.exports = async function signupGuard(req, res, next) {
  const { id } = req.params;
  const user = await Student.findById(id);
  if (!user) throw new err(400, "NO Student Found");
  if (!user.password) return next();
  return res.redirect(`/signedin/${id}`);
};

