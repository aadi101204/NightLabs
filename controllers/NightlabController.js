const applyNightLab = require("../models/nightlabs");
const User = require("../models/UserModel");

const FormFiller = async (req, res) => {
  try {
    const checkingUser = User.findOne(req.user.memberID);
    if (!checkingUser)
      return res.status(404).json({ message: "user not found" });

    const calledForNightlab = applyNightLab.findOne(checkingUser);
    if (calledForNightlab) {
      applyGoogleForms(req, res);
    } else {
      return res.json({ popup: "you are not called for nightlab 😢" });
    }
  } catch (error) {
    return res.json({ message: error });
  }
};

function applyGoogleForms(req, res) {
  const hosteldetails = req.user.HostelDetails;
  return res.json(hosteldetails);
}

module.exports = { FormFiller };
