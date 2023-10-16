const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  },
  password: {
    type: String,
    require: true,
  },
  lastActive: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
