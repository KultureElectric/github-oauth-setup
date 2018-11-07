const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ githubID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        const newUser = await new User({ githubID: profile.id }).save();
        return done(null, newUser);
      }
    }
  )
);
