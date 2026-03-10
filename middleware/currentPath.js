module.exports = function currentPath(req, res, next) {
  res.locals.currentPath = req.path;
  next();
};

