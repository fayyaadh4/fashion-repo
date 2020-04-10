const mongoose = require("mongoose");
const User = require("../models/user.model");

//gets users
exports.getUser = (req, res, next) => {
  console.log("status", req.statusCode);
  console.log("body", req.body);
  User.find({ user: req.user.id }, function(err, user) {
    if (err) {
      err => next(err);
    }
    res.json(req.user);
  });
};
