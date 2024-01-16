const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
    bestfriend : {type: Boolean, required: true },
    
});

module.exports = mongoose.model("Friend", friendSchema);