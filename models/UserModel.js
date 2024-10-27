const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfile = new mongoose.Schema({
  AccountDetails,
  LabsHistory,
  Projects,
  HostelDetails,
});
const AccountDetails = new mongoose.Schema({
  Username: { type: String, require: true },
  password: { type: String, require: true },
  memberID: { type: Schema.types.ObjectID, require: true },
  position: { type: String, require: true },
  mgmtPosition: { type: String, require: true },
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

module.exports = mongoose.model("user", userProfile);
