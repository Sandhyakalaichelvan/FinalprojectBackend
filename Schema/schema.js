const mongoose = require("mongoose");
var firstSchema = new mongoose.Schema(
    {
    name: { type: String, uppercase:true },
    email: { type: String, required:true, unique:true },
    mobile: { type: Number},
    password: { type: String}
  },
      {collection:'test'}
  );
  module.exports = mongoose.model("register", firstSchema);