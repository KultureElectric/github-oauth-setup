const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const keys = require("../config/keys");

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.gitHubClientID,
      clientSecret: keys.gitHubClientSecret,
      callbackURL: "http://localhost:5000/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
