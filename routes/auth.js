const router = require("express").Router();
const passport = require("passport");
//used dotenv to store client url
require("dotenv").config();

//routes for login requests
router.get(
  "/googlelogin",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/googlelogin/redirect",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/admin`
  }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/admin/home`);
  }
);

//do not include any scope for facebook passport
router.get("/facebooklogin", passport.authenticate("facebook"));

router.get(
  "/facebooklogin/redirect",
  passport.authenticate("facebook", {
    failureRedirect: `${process.env.CLIENT_URL}/admin`
  }),
  function(req, res) {
    //successful authentication, redirect home
    res.redirect(`${process.env.CLIENT_URL}/admin/home`);
  }
);

router.post(
  "/locallogin",
  passport.authenticate("local", {
    failureRedirect: `${process.env.CLIENT_URL}/admin`
  }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/admin/home`);
  }
);

//route for local signup
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/logout",
    failureRedirect: "/signup"
  })
);

module.exports = router;
