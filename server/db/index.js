const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
