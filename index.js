const cookieSession = require("cookie-session");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
require("./models/user.js");
require("./services/passport");

mongoose.connect("mongodb://localhost/github-oauth-setup");

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["asdflasdfhbaöskjdfböasudfb"]
  })
);

app.use(passport.initialize());

app.use(passport.session());

require("./routes/routes")(app);

app.listen(5000, () => console.log("App is listening on port 5000"));
