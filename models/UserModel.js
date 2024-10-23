const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfile = new mongoose.Schema({
  AccountDetails,
  LabsHistory,
  Projects,
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

module.exports = mongoose.model("user", userProfile);
