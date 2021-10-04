//Dependencies
const { application } = require("express");
const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe.js");

//Export
module.exports = recipeRouter;

//Routes

//INDEX
recipeRouter.get("/", (req, res) => {
    Recipe.find({}, (error, allRecipes) => {
       res.render("index.ejs", {
           recipes: allRecipes
       });
    }); 
});   
        
//NEW
recipeRouter.get("/new", (req, res) => {
    res.render("new.ejs");
});


//DELETE

//UPDATE

//CREATE
recipeRouter.post("/", (req, res) => {
    Recipe.create(req.body, (error, newRecipe) => {
        res.redirect("/recipes");
    });
});

//EDIT

//SHOW
recipeRouter.get("/:id", (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        res.render("show.ejs", {
            recipe: foundRecipe
        });
    });
});