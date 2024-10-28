const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: { type: String, unique: true, require: true },
  emailid: { type: String, unique: true, require: true },
  password: { type: String, unique: true, require: true },
  role: {
    type: String,
    enum: ["Board", "JC", "SC", "Ops", "Sponsorship", "RnO", "PnM"],
  },
  isVerified: { type: Boolean, require: true },
  createdOn: { type: Date, require: true },
});

module.exports = mongoose.model("User", User);
