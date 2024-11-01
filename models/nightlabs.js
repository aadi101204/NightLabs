const mongoose = require("mongoose");
const User = require("./UserModel");

const applyNightlabs = new mongoose.Schema({
  memberID: { type: User.memberID, required: true },
  Applystatus,
  approveStatus,
  CalledFor,
});

const CalledFor = new mongoose.Schema({
  status: { type: Boolean, required: true, default: false },
});
const Applystatus = new mongoose.Schema({
  apply: { type: String, enum: ["Yes", "No"] },
});

const approveStatus = new mongoose.Schema({
  approved: { type: String, enum: ["Pending", "approved"] },
  LabDate: { type: Date, required: true },
});

module.exports = mongoose.model("applyNightLab", applyNightlabs);
