const router = require("express").Router();
const Product = require("../models/product.model");
//multer used for uploading of files
const multer = require("multer");

//location for uploads to be stored
const DIR = "./uploads/";

//destination as well as naming of files being stored
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname
        .toLowerCase()
        .split(" ")
        .join("-")
    );
  }
});

//filter for uploading of files
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

//new product function and route
router.post("/api/add", upload.single("source", "details"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  //console.log(req.files);
  // console.log('test');
  const details = req.body.details;
  const source = req.file.path;
  /*if(!details || !source) {
        res.status(400);
        res.json({ error: "Invalid data"});
    }*/
  try {
    const newProduct = await Product({
      imgDetails: details,
      imgSrc: source
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
