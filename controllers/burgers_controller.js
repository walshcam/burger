var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");

//************ROUTES********************* */

//Route to Render Initial Page
router.get("/", function(req, res) {
    
})


//Route to POST new burger

//Route to UPDATE burger to devoured