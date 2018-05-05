// Import MySQL connection.
let connection = require("../config/connection.js");

//orm function

let orm = {

    //*********Used to display all burgers on the screen**********
    read: function(callback) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
            
            callback(result);
        });
    },

    //**********Insert a burger from input field************
    create: function(burger_name, callback) {
        //Query construction for burgers table
        let queryString = "INSERT INTO ";
        queryString += "burgers ";
        queryString += "SET ?";

        //Values to be inserted into query above
        let values = 
        {
            burger_name: burger_name, 
            devoured: false
        };

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },

    //**************Change a burger from Available to Devoured***********
    update: function(setCondition, callback) {
        //Query construction for burgers table
        let queryString = "UPDATE ";
        queryString += "burgers ";
        queryString += "SET devoured = 1 ";
        queryString += "WHERE " + setCondition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }

};

module.exports = orm;