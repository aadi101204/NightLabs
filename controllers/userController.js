const User = require("../models/UserModel");

const gettingUser = async (req, res) => {
  try {
    const requestedUser = await User.findOne(req.user.memberID);
    if (!requestedUser)
      return res.status(404).json({ message: "user not found" });

    if (requestedUser.memberID !== req.user.memberID)
      return res.status(403).json({ message: "access denied" });
    res.status(200).json(requestedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { gettingUser };


