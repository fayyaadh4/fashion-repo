const router = require("express").Router();
const Product = require("../controllers/product.controller");

//GET request fetching all products from database
router.get("/api/products", Product.getProducts);

module.exports = router;
