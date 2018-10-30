const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hello: "world" });
  });

  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/github/callback", passport.authenticate("github"));

  app.get("/api/current_user", (req, res) => {
    req.user;
  });
};
