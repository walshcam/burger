import { connect } from "net";

// Import MySQL connection.
var connection = require("../config/connection.js");

//orm function

let orm = {

    //*********Used to display all burgers on the screen**********
    selectAll: function(callback) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
            
            callback(result);
        });
    },

    //**********Insert a burger from input field************
    insertOne: function(burger_name, callback) {
        //Query construction for burgers table
        let queryString = "INSERT INTO ";
        queryString += "burgers ";
        queryString += "(burger_name, devoured) ";
        queryString += "VALUES ?";

        //Values to be inserted into query above
        let values = [burger_name, false];

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },

    //**************Change a burger from Available to Devoured***********
    updateOne: function(burger_name, callback) {
        //Query construction for burgers table
        let queryString = "UPDATE ";
        queryString += "burgers ";
        queryString += "SET devoured = 1 ";
        queryString += "WHERE burger_name = ?";
 
        //Values to be inserted into query above
        let values = burger_name

        connection.query(queryString, [values], function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }

};

module.exports = orm;