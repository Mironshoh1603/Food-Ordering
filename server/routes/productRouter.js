const express = require("express");

const router = express.Router();

const Product = require("../models/productModel");

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get("/products-by-categories", async (req, res) => {
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
const User = require("../models/userModel");

router.post("/create-user/", async (req, res) => {
  console.log("mana");
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    // _id: req.body._id,
  });

  console.log(user);
  res.status(200).json({
    data: user,
  });
  return;
});

module.exports = router;
