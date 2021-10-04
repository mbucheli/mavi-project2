const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
    recipeTitle: {type: String, required: true},
    imageLink: {type: String, required: true},
    description: String, 
    prepTime: {type: String, required: true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true}
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;