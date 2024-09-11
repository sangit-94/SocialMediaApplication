"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var databaseFactory_1 = require("./config/databaseFactory");
var routes_1 = require("./routes/routes");
dotenv_1.default.config();
// Use the factory to create the database connection
var dbType = process.env.DB_TYPE || 'mongodb';
var database = databaseFactory_1.default.createDatabase(dbType);
database.connect().then(function () {
    console.log("".concat(dbType, " database connected"));
});
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', routes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
