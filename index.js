const express = require("express");
require("./services/passport");
const app = express();

require("./routes")(app);

app.listen(5000, () => console.log("App is listening on port 5000"));
