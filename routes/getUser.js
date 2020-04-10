const router = require("express").Router();
const User = require("../controllers/user.controller");
require("dotenv").config();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if no user is logged in
    res.redirect(`${process.env.CLIENT_URL}/admin`);
  } else {
    next();
  }
};

//get request for fetching users
router.get("/api/home", authCheck, User.getUser);

module.exports = router;
