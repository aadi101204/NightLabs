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
  userid,
  isProject: { type: Boolean, require: true, default: false },
  HostelDetails ,
});

const HostelDetails = new mongoose.Schema({
  Name: { type: String, require: true },
  hostelType: { type: String, enum: ["MH", "LH"] },
  block: { type: String, require: true },
  RegNo: { type: String, require: true },
});

const userid = mongoose.Schema({
  memberID: { type: Schema.Types.ObjectID, require: true },
});

module.exports = mongoose.model("User", User);
