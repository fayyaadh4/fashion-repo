const router = require("express").Router();
require('dotenv').config()

//logout route which logs user out of session and removes cookie
router.get("/api/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect(`${process.env.CLIENT_URL}/admin`);
});

module.exports = router;
