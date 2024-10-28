const User = require("./UserModel");

async function registerUser(username, email, password, role, isVerified) {
  const newUser = new User({ username, email, password, role, isVerified });
  await newUser.save();
  console.log("User created");
}

module.exports = { registerUser: registerUser };
