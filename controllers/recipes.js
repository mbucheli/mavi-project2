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
recipeRouter.delete("/:id", (req, res) => {
    Recipe.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/recipes");
    });
});

//UPDATE
recipeRouter.put("/:id", (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, updatedRecipe) => {
        res.redirect(`/recipes/${req.params.id}`);
    });
});

//CREATE
recipeRouter.post("/", (req, res) => {
    Recipe.create(req.body, (error, newRecipe) => {
        res.redirect("/recipes");
    });
});

//EDIT
recipeRouter.get("/:id/edit", (req, res) => {
    Recipe.findById(req.params.id, (err, addedRecipe) => {
        res.render("edit.ejs", {
            recipe: addedRecipe
        });
    });
});

//SHOW
recipeRouter.get("/:id", (req, res) => {
    Recipe.findById(req.params.id, (err, addedRecipe) => {
        res.render("show.ejs", {
            recipe: addedRecipe
        });
    });
});