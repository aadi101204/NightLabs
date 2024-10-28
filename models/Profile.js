const mongoose = require("mongoose");
const User = require("./UserModel");

const userProfile = new mongoose.Schema({
  User,
  LabsHistory,
  Projects,
  HostelDetails,
});
const LabsHistory = new mongoose.Schema({
  TotalAttended: { type: Number, require: false },
  NightLab,
});
const HostelDetails = new mongoose.Schema({
  Name: { type: String, require: true },
  hostelType: { type: String, enum: ["MH", "LH"] },
  block: { type: String, require: true },
  RegNo: { type: String, require: true },
});

module.exports = mongoose.model("profile", userProfile);
