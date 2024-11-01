const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const user = require("../models/UserModel.js");

passport.serializeUser((user, done) => {
  done(null, user.memberID);
});

passport.deserializeUser(async (memberID, done) => {
  try {
    const user = await user.findOne({ memberID });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

const userLogin = new LocalStrategy(async (username, password, done) => {
  const user = await user.findOne({ username: username });
  try {
    if (e) return done(e);
    if (!user) return done(null, false);
    if (!user.isVerified)
      return done(null, true, { message: "verify mail id" });

    const isamatch = await bycrpt.compare(password, user.password);
    if (!isamatch) return done(null, false, { message: "incorrect password" });

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
});

passport.use(userLogin);
