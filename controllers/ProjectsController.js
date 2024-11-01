const Project = require("../models/ProjectCyclemodel");
const User = require("../models/UserModel");

const gettingProject = async (req, res) => {
  try {
    const user = await User.findOne(req.user.memberID);
    if (!user) res.status(404).json({ message: "user not found" });

    const hasProject = req.user.isProject;

    if (!hasProject) res.json({ popup: "you are not part of any project" });

    const projectID = req.user.memberID;
    if (!Project.findOne(projectID))
      res.json({ popup: "you dont seem to have a project" });

    res.json(projectID);
  } catch (error) {
    res.json({ popup: error });
  }
};

module.exports = { gettingProject };
