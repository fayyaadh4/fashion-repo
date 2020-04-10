const mongoose = require("mongoose");

//admin model
const UserSchema = new mongoose.Schema({
  username: { type: String, lowercase: true },
  facebookID: { type: String },
  //facebookToken: { type: String },
  username: { type: String, lowercase: true },
  googleID: { type: String },
  username: { type: String, lowercase: true },
  password: { type: String }
});

let User = mongoose.model("user", UserSchema);
module.exports = User;
