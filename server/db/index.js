const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
