const router = require("express").Router();
const Product = require("../controllers/product.controller");
require('dotenv').config();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if not logged in
    res.redirect(`${process.env.CLIENT_URL}/admin`);
  } else {
    next();
  }
};

//delete routt
router.get("/api/product/delete/:_id", authCheck, Product.deleteById);

module.exports = router;
