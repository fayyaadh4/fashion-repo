const router = require("express").Router();
const Product = require("../controllers/product.controller");

//PUT request route
router.put("/api/product/edit/:_id", Product.editByID);

module.exports = router;
