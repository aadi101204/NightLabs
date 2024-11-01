const mongoose = require("mongoose");
const User = require("./UserModel");

const projectCycle = mongoose.Schema({
  domain: {
    type: String,
    enum: [
      "WebDev",
      "AppDev",
      "AI/ML",
      "CyberSecurity",
      "CC",
      "GameDev",
      "Design",
    ],
  },
  title: { type: String, require: true },
  projectID: { type: User.memberID, require: true },
  assignedDate: { type: Date, require: true },
  progress: { type: String, require: true },
  mentors: { type: String, require: true },
  ProjectMessages,
});

const ProjectMessages = mongoose.Schema({
  messageID: {
    type: Schema.Types.ObjectID,
    unique: true,
    require: true,
  },
  message: { type: String, require: true },
  SentAt: { type: Date, require: true },
});

module.exports = mongoose.model("ProjectCycle", projectCycle);
