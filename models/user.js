const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new Schema({
  githubID: String
});

UserSchema.plugin(findOrCreate);

mongoose.model("users", UserSchema);
