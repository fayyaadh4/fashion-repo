const mongoose = require("mongoose");
const Product = require("../models/product.model");
//multer enables files to for uploading files
const multer = require("multer");

//gets all products from data base
exports.getProducts = (req, res, next) => {
  //console.log(res.statusCode, res.body);
  Product.find({}, function(err, prod) {
    if (err) {
      err => next(err);
    }
    res.json(prod);
  });
};

//delete product function which takes in the products id as a param
exports.deleteById = (req, res, next) => {
  console.log(req.params);
  //const id = req.params._id;

  Product.findByIdAndRemove({ _id: req.params._id }, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ id: req.params._id });
    }
  });
};

//edit function
exports.editByID = (req, res, next) => {
  console.log(req.params);
  const query = { _id: req.params._id };
  console.log(req.body);
  console.log("details", req.body.details);
  Product.updateOne(
    query,
    {
      $set: {
        imgDetails: req.body.details
      }
    },
    { new: true },
    function(err, data) {
      if (err) {
        console.log("Something went wrong when updating product", err);
      }
      res.send("Updated");
    }
  );
};
