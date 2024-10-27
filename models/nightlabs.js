const mongoose = require("mongoose");

const applyNightlabs = new mongoose.Schema({
  Applystatus,
  approveStatus,
});

const Applystatus = new mongoose.Schema({
  apply: { type: String, enum: ["Yes", "No"] },
});

const approveStatus = new mongoose.Schema({
  approved: { type: String, enum: ["Pending", "approved"] },
  LabDate: { type: Date, required: true },
});

module.exports = mongoose.model("NightLab", nightlabs);
