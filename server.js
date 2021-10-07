require("dotenv").config()

const { application } = require("express");
// Dependencies
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require ("mongoose");
const app = express();
const db = mongoose.connection;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Database
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true }
);

// Database Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongodb connected'));
db.on('disconnected', () => console.log('mongodb disconnected'));

//Routes // Controllers
const recipeController = require("./controllers/recipes.js");
app.use("/recipes", recipeController);

app.get("/", (req, res) => {
    res.redirect("/recipes");
});

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('express is listening on:', PORT));
