const passport = require("passport");
const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;

const user = require("../models/Profile.js");
const Registered = require("../corememberModel.js");

passport.serializeUser((user, done) => {
  done(user, done);
});

passport.deserializeUser((user, done) => {
  done(user, done);
});

const userLogin = new LocalStrategy(async (username, password, done) => {
  user.findOne({ username: username }, (e, user) => {
    if (e) return done(e);
    if (!user) return done(null, false);
    if (!user.verifyPassword(password)) return done(null, false);
    return done(null, true);
  });
});

passport.use(userLogin);
