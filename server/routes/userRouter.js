const express = require("express");

var router = express.Router();

const User = require("../models/userModel");

router.post("/user/", async (req, res) => {
  console.log("mana");
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    _id: req.body._id,
  });

  console.log(user);
  res.status(200).json({
    data: user,
  });
  return;
});

module.exports = router;
