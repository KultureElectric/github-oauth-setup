const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hello: "world" });
  });

  app.get("/auth/github", passport.authenticate("github"));

  app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureDirect: "/login" }),
    (req, res) => {
      res.redirect("/");
    }
  );
};
