const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, user => {
    done(null, user);
  });
});

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.gitHubClientID,
      clientSecret: keys.gitHubClientSecret,
      callbackURL: "/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ githubID: profile.id }, user => {
        return done(null, user);
      });
    }
  )
);
