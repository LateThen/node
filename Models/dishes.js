const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    calories: {type: Number, require: true},
    protein: {type: Number, require: true},
    carbs: {type: Number, require: true},
    
    
})

module.exports = mongoose.model("Dish", dishSchema)