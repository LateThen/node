const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    tier: {type: String, require: true}
    
})

module.exports = mongoose.model("Achievement", achievementSchema)