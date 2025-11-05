const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    require: [true, "must provide name"],
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskScheme);
