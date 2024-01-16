const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    difficulty: {type: String, require: true},
    
    
})

module.exports = mongoose.model("Exercise", exerciseSchema)