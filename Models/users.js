const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
username : {type: String, required: true},
phone : {type: Number, required: true},
});

module.exports = mongoose.model("User", userSchema);