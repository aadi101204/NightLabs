const mongoose = require("mongoose");

const registeredEmail = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("memberModel", registeredEmail);
