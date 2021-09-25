const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.restaurant = require("./restaurant.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;
