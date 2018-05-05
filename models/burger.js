// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

 let burger = {
    //read - Display all burgers on the page
    read: function(callback) {
        orm.read(function(results) {
            callback(results);
        });
    },
    //create - Create new burger
    create: function(burger_name, callback) {
        orm.create(burger_name, function(results) {
            callback(results);
        });
    },
    //update - Change burger to devoured
    update: function(burger_name, setCondition, callback) {
        orm.update(burger_name, setCondition, function(results) {
            callback(results);
        });
    }
 };

module.exports = burger;