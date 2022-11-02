const express = require("express");

const router = express.Router();

const Product = require("../models/productModel");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$category",
          products: { $push: "$$ROOT" },
        },
      },
      { $project: { name: "$_id", products: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
